import { Forecast } from "../../../types/weather/Forecast";
import { Gridpoints } from "../../../types/weather/Gridpoints";
import axios from "../../../utils/axios.js";

export async function getForecast({
  gridId,
  gridX,
  gridY,
}: Gridpoints): Promise<Forecast> {
  // Documentation: https://www.weather.gov/documentation/services-web-api
  // Example: https://api.weather.gov/gridpoints/LSX/67,65/forecast
  const result = await axios.get(
    `https://api.weather.gov/gridpoints/${gridId}/${gridX},${gridY}/forecast`
  );

  const { periods } = result.data.properties;

  const forecast = periods[0] as Forecast;

  return forecast;
}
