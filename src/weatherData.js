const data = [
  { city: 'Amsterdam', temp: 299.15 },
  { city: 'Ha Noi', temp: 290.15 },
  { city: 'Hai Phong', temp: 295.15 },
  { city: 'Thai Binh', temp: 300.15 },
  { city: 'TP HCM', temp: 299.15 },
]

export const weatherData = (scale) => {
  switch (scale) {
    case 'celsius':
      return data.map(({ city, temp }) => ({
        city,
        temp: (temp - 273.15).toFixed(2),
      }))

    case 'fahrenheit':
      return data.map(({ city, temp }) => ({
        city,
        temp: ((temp - 273.15) * 1.8 + 32).toFixed(2),
      }))
    case 'kelvin':
    default:
      return data
  }
}
