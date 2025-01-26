import { NextRequest, NextResponse } from "next/server";
import ee from "@google/earthengine";
import { getPrivateKey } from "@/features/peta/services/earthEngineServices";

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const privateKey = getPrivateKey();
    await new Promise<void>((resolve, reject) => {
      ee.data.authenticateViaPrivateKey(privateKey, resolve, reject);
    });
    console.log("Earth Engine Authentication Succeeded");

    await new Promise<void>((resolve, reject) => {
      ee.initialize(null, null, resolve, reject);
    });

    console.log("Earth Engine Initialization Succeeded");

    const image = ee.Image("LANDSAT/LC08/C02/T1_TOA/LC08_044034_20140318");

    image.getInfo(
      (info: any) => {
        console.log("Landsat Image Info:", info);
      },
      (error: Error) => {
        console.error("Error fetching Landsat image info:", error);
      }
    );
    const ndvi = image.normalizedDifference(["B5", "B4"]).rename("NDVI");
    // console.log("NDVI Object:", ndvi);
    const map = ndvi.getMap({
      bands: ["NDVI"],
      min: -1,
      max: 1,
      palette: ["blue", "white", "green"],
    });
    console.log("NDVI Map:", map);
    console.log("NDVI Map ID:", map.mapid);
    return NextResponse.json({
      success: true,
      mapId: map.mapid,
    });
  } catch (error: unknown) {
    console.error("Error in Earth Engine API:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
