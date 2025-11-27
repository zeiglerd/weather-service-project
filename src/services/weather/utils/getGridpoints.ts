import { Gridpoints } from "../../../types/weather/Gridpoints";
import { LatLong } from "../../../types/weather/LatLong";
import axios from "../../../utils/axios.js";

export async function getGridpoints({
  lat,
  long,
}: LatLong): Promise<Gridpoints> {
  // Documentation: https://www.weather.gov/documentation/services-web-api
  // Example: https://api.weather.gov/points/38.4501,-91.0085
  const result = await axios.get(
    `https://api.weather.gov/points/${lat},${long}`
  );

  const properties = result.data.properties as Gridpoints;

  return properties;
}
