// index.js
import ee from '@google/earthengine';
import fs from 'fs';

console.log('Starting script...');

// Read private key from file
let privateKey;
try {
  privateKey = JSON.parse(fs.readFileSync('./.credentials.json', 'utf8'));
  console.log('Credentials loaded successfully');
} catch (error) {
  console.error('Error loading credentials:', error);
  process.exit(1);
}

const initializeEE = () => {
  return new Promise((resolve, reject) => {
    console.log('Attempting to initialize Earth Engine...');
    ee.initialize(null, null,
      () => {
        console.log('Earth Engine initialized successfully');
        resolve('Earth Engine client library initialized.');
      },
      (err) => {
        console.error('Initialization error:', err);
        reject(new Error(`Initialization error: ${err}`));
      }
    );
  });
};

const authenticateEE = () => {
  return new Promise((resolve, reject) => {
    console.log('Attempting to authenticate...');
    ee.data.authenticateViaPrivateKey(privateKey,
      () => {
        console.log('Authentication completed successfully');
        resolve('Authentication successful');
      },
      (err) => {
        console.error('Authentication error:', err);
        reject(new Error(`Authentication error: ${err}`));
      }
    );
  });
};

const analyzeImage = async () => {
  console.log('Starting image analysis...');

  try {
    console.log('Loading Landsat image...');
    const image = ee.Image('LANDSAT/LC08/C02/T1_TOA/LC08_044034_20140318');
    
    const vizParams = {
      bands: ['B4', 'B3', 'B2'],
      min: 0,
      max: 0.3,
      gamma: 1.4,
      dimensions: 1024
    };

    console.log('Calculating NDVI...');
    const ndvi = image.normalizedDifference(['B5', 'B4']).rename('NDVI');
    const geometry = ee.Geometry.Point([-122.4194, 37.7749]);

    console.log('Getting image info...');
    const imageInfo = await new Promise((resolve, reject) => {
      image.getInfo((info) => {
        console.log('Image info received');
        if (info) resolve(info);
        else reject(new Error('Failed to get image info'));
      });
    });

    console.log('Calculating NDVI statistics...');
    const ndviStats = await new Promise((resolve, reject) => {
      ndvi.reduceRegion({
        reducer: ee.Reducer.mean(),
        geometry: geometry,
        scale: 1000
      }).evaluate((stats) => {
        console.log('NDVI stats calculated');
        if (stats) resolve(stats);
        else reject(new Error('Failed to calculate NDVI'));
      });
    });

    console.log('Getting thumbnail URL...');
    const thumbUrl = await new Promise((resolve, reject) => {
      image.getThumbURL({
        ...vizParams,
        format: 'jpg',
      }, (url) => {
        console.log('Thumbnail URL received');
        if (url) resolve(url);
        else reject(new Error('Failed to get thumbnail URL'));
      });
    });

    console.log('All analysis completed successfully');
    return {
      imageInfo,
      ndviStats,
      thumbUrl
    };

  } catch (error) {
    console.error('Analysis error:', error);
    throw error;
  }
};

// Main execution
const main = async () => {
  console.log('=== Starting Main Execution ===');
  try {
    console.log('\nStep 1: Authentication');
    await authenticateEE();
    
    console.log('\nStep 2: Initialization');
    await initializeEE();
    
    console.log('\nStep 3: Analysis');
    const results = await analyzeImage();
    
    console.log('\nFinal Results:');
    console.log('--------------');
    console.log('NDVI Statistics:', results.ndviStats);
    console.log('Image URL:', results.thumbUrl);
    
  } catch (error) {
    console.error('\nError in main execution:', error);
  }
};

// Add process error handlers
process.on('unhandledRejection', (error) => {
  console.error('Unhandled Promise Rejection:', error);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
});

// Run the program
console.log('=== Starting Program ===');
main().then(() => {
  console.log('=== Program Completed ===');
}).catch(error => {
  console.error('Program failed:', error);
});