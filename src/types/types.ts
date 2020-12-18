export type IconProps = {
  width?: number
  height?: number
  fillColor?: string
  strokeColor?: string
  className?: string
}

type WeatherDataType = {
  temperature: {
    actual: number
    feelsLike: number
    min: number
    max: number
  }
  wind: {
    speed: number
    deg: number
  }
  clouds: {
    all: number
    visibility: number
    humidity: number
  }
  summary: {
    title: string
    description: string
    icon: string
  }
  timestamp: number
}

export type CityType = {
  name: string
  country: string
  weather: WeatherDataType
}

export type StateType = {
  city: {
    loading: LOADING_STATES
    error: string | null
    data: CityType
  }
}

export enum LOADING_STATES {
  'IDLE' = 'IDLE',
  'LOADING' = 'LOADING',
  'FAILED' = 'FAILED',
  'SUCCEEDED'= 'SUCCEEDED'
}