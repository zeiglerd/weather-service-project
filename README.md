# weather-service-project

🌤️ HTTP server that serves the forecasted weather 🌡️

Powered by 🔌 https://www.weather.gov/documentation/services-web-api


## Requires

- Latest Node.js LTS `>=24.11.1`


## Install

- **$** `npm i`


## Development

- **$** `npm run dev`


## Build

- **$** `npm run build`


## Start

- **$** `npm start`


## Routes

- > ### GET `/weather/report/{lat},{long}`
  >
  >> #### Parameters
  >>  - `lat`: Latitude
  >>  - `long`: Longitude
  >
  >> #### Returns
  >>  - The forecasted weather.
  >>
  >>    Example JSON:
  >>    ```
  >>    {
  >>      "characterization": "cold",
  >>      "shortForecast": "Mostly Cloudy"
  >>    }
  >>    ```
  > ---

- > ### GET `/api-docs`
  >
  >> #### Returns
  >>  - OpenAPI specification.
  > ---
