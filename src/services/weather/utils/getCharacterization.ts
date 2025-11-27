import { Forecast } from "../../../types/weather/Forecast";

export function getCharacterization(today: Forecast) {
  switch (today.temperatureUnit) {
    case "C":
      if (today.temperature >= 29.4444) return "hot";
      if (today.temperature >= 18.3333) return "moderate";
      return "cold";

    case "F":
    default:
      if (today.temperature >= 85) return "hot";
      if (today.temperature >= 65) return "moderate";
      return "cold";
  }
}
