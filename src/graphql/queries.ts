import { gql } from '@apollo/client';

export const GET_WEATHER_BY_CITY_NAME_QUERY = gql`
  query getCityByName($name: String!, $country: String, $config: ConfigInput) {
    getCityByName(name: $name, country: $country, config: $config) {
      name
      country
      weather {
        temperature {
          actual
          feelsLike
          min
          max
        }
        wind {
          speed
          deg
        }
        clouds {
          all
          visibility
          humidity
        }
        summary {
          title
          description
          icon
        }
        timestamp
      }
    }
  }
`