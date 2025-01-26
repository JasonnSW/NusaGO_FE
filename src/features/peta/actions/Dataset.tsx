export const fetchNDVIData = async () => {
  try {
    const response = await fetch("/api/earth-engine");
    const data = await response.json();
    if (data.success) {
      return data;
    } else {
      console.error("Error fetching NDVI data:", data.error);
    }
  } catch (error) {
    console.error("Error in fetching NDVI data:", error);
  }
};
