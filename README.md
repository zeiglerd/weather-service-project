# weather-service-project

🌩️ HTTP server that serves the forecasted weather 🌞

Powered by 🔌 https://www.weather.gov/documentation/services-web-api


## Requires

- Latest Node.js LTS `>=24.11.1`


## Optionally

- Clone the `.env.template` file — naming it `.env` — to further configure the server.


## Install

- **$** `npm i`


## Development

- **$** `npm run dev`


## Build

- **$** `npm run build`


## Start

- **$** `npm start`


## Test

- **$** `npm t`


## Routes

- > ### GET `/weather/report/{lat},{long}`
  >
  >> #### Parameters
  >>  - `lat`: Latitude
  >>    - Positive (+) number: Indicates a position in the Northern Hemisphere.
  >>    - Negative (-) number: Indicates a position in the Southern Hemisphere.
  >>  - `long`: Longitude
  >>    - Positive (+) number: Indicates a position East of the Prime Meridian.
  >>    - Negative (-) number: Indicates a position West of the Prime Meridian.
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
