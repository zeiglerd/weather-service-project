import { LatLong } from "../../../types/weather/LatLong";
import { Report } from "../../../types/weather/Report";
import { getForecast } from "./getForecast.js";
import { getGridpoints } from "./getGridpoints.js";
import { getCharacterization } from "./getCharacterization.js";

export async function getReport({ lat, long }: LatLong): Promise<Report> {
  const { gridId, gridX, gridY } = await getGridpoints({ lat, long });

  if (!gridId || !gridX || !gridY) {
    throw new Error("Invalid latitude or longitude.");
  }

  const forecast = await getForecast({ gridId, gridX, gridY });

  const report = {
    characterization: getCharacterization(forecast),
    shortForecast: forecast.shortForecast,
  };

  return report;
}
