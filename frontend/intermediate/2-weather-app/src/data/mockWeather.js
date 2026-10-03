// src/data/mockWeather.js
//
// Fake weather data shaped like a Visual Crossing "timeline" API response
// (units: metric -> temp in °C, windspeed in km/h).
//
// It contains 3 days: yesterday, today and tomorrow, each with 24 hourly entries,
// so you can build the "Previous 24 Hours" and "Next 24 Hours" sections.
// "Now" in this mock is 2026-10-03 at 15:00.
//
// When you connect the real API, replace the import with a fetch() and the
// rest of your components should keep working, because the shape is the same.

export const mockWeather = {
  "queryCost": 1,
  "latitude": 9.025,
  "longitude": 38.7469,
  "resolvedAddress": "Addis Ababa, Ethiopia",
  "address": "addis ababa",
  "timezone": "Africa/Addis_Ababa",
  "currentConditions": {
    "datetime": "15:00:00",
    "temp": 26.0,
    "humidity": 45,
    "precipprob": 10,
    "windspeed": 12.2,
    "conditions": "Partially cloudy",
    "icon": "partly-cloudy-day"
  },
  "days": [
    {
      "datetime": "2026-10-02",
      "tempmax": 25.0,
      "tempmin": 15.0,
      "conditions": "Partially cloudy",
      "icon": "partly-cloudy-day",
      "hours": [
        {
          "datetime": "00:00:00",
          "temp": 16.5,
          "humidity": 66,
          "precipprob": 0,
          "windspeed": 2.0,
          "conditions": "Clear",
          "icon": "clear-night"
        },
        {
          "datetime": "01:00:00",
          "temp": 15.7,
          "humidity": 68,
          "precipprob": 0,
          "windspeed": 2.2,
          "conditions": "Clear",
          "icon": "clear-night"
        },
        {
          "datetime": "02:00:00",
          "temp": 15.2,
          "humidity": 70,
          "precipprob": 0,
          "windspeed": 2.8,
          "conditions": "Clear",
          "icon": "clear-night"
        },
        {
          "datetime": "03:00:00",
          "temp": 15.0,
          "humidity": 70,
          "precipprob": 0,
          "windspeed": 3.8,
          "conditions": "Clear",
          "icon": "clear-night"
        },
        {
          "datetime": "04:00:00",
          "temp": 15.2,
          "humidity": 70,
          "precipprob": 0,
          "windspeed": 5.0,
          "conditions": "Clear",
          "icon": "clear-night"
        },
        {
          "datetime": "05:00:00",
          "temp": 15.7,
          "humidity": 68,
          "precipprob": 0,
          "windspeed": 6.4,
          "conditions": "Clear",
          "icon": "clear-night"
        },
        {
          "datetime": "06:00:00",
          "temp": 16.5,
          "humidity": 66,
          "precipprob": 0,
          "windspeed": 8.0,
          "conditions": "Clear",
          "icon": "clear-day"
        },
        {
          "datetime": "07:00:00",
          "temp": 17.5,
          "humidity": 64,
          "precipprob": 0,
          "windspeed": 9.6,
          "conditions": "Clear",
          "icon": "clear-day"
        },
        {
          "datetime": "08:00:00",
          "temp": 18.7,
          "humidity": 61,
          "precipprob": 0,
          "windspeed": 11.0,
          "conditions": "Clear",
          "icon": "clear-day"
        },
        {
          "datetime": "09:00:00",
          "temp": 20.0,
          "humidity": 58,
          "precipprob": 0,
          "windspeed": 12.2,
          "conditions": "Clear",
          "icon": "clear-day"
        },
        {
          "datetime": "10:00:00",
          "temp": 21.3,
          "humidity": 54,
          "precipprob": 0,
          "windspeed": 13.2,
          "conditions": "Clear",
          "icon": "clear-day"
        },
        {
          "datetime": "11:00:00",
          "temp": 22.5,
          "humidity": 51,
          "precipprob": 0,
          "windspeed": 13.8,
          "conditions": "Clear",
          "icon": "clear-day"
        },
        {
          "datetime": "12:00:00",
          "temp": 23.5,
          "humidity": 49,
          "precipprob": 0,
          "windspeed": 14.0,
          "conditions": "Clear",
          "icon": "clear-day"
        },
        {
          "datetime": "13:00:00",
          "temp": 24.3,
          "humidity": 47,
          "precipprob": 0,
          "windspeed": 13.8,
          "conditions": "Clear",
          "icon": "clear-day"
        },
        {
          "datetime": "14:00:00",
          "temp": 24.8,
          "humidity": 46,
          "precipprob": 10,
          "windspeed": 13.2,
          "conditions": "Partially cloudy",
          "icon": "partly-cloudy-day"
        },
        {
          "datetime": "15:00:00",
          "temp": 25.0,
          "humidity": 45,
          "precipprob": 10,
          "windspeed": 12.2,
          "conditions": "Partially cloudy",
          "icon": "partly-cloudy-day"
        },
        {
          "datetime": "16:00:00",
          "temp": 24.8,
          "humidity": 46,
          "precipprob": 10,
          "windspeed": 11.0,
          "conditions": "Partially cloudy",
          "icon": "partly-cloudy-day"
        },
        {
          "datetime": "17:00:00",
          "temp": 24.3,
          "humidity": 47,
          "precipprob": 10,
          "windspeed": 9.6,
          "conditions": "Partially cloudy",
          "icon": "partly-cloudy-day"
        },
        {
          "datetime": "18:00:00",
          "temp": 23.5,
          "humidity": 49,
          "precipprob": 10,
          "windspeed": 8.0,
          "conditions": "Partially cloudy",
          "icon": "partly-cloudy-day"
        },
        {
          "datetime": "19:00:00",
          "temp": 22.5,
          "humidity": 51,
          "precipprob": 30,
          "windspeed": 6.4,
          "conditions": "Overcast",
          "icon": "cloudy"
        },
        {
          "datetime": "20:00:00",
          "temp": 21.3,
          "humidity": 54,
          "precipprob": 30,
          "windspeed": 5.0,
          "conditions": "Overcast",
          "icon": "cloudy"
        },
        {
          "datetime": "21:00:00",
          "temp": 20.0,
          "humidity": 58,
          "precipprob": 30,
          "windspeed": 3.8,
          "conditions": "Overcast",
          "icon": "cloudy"
        },
        {
          "datetime": "22:00:00",
          "temp": 18.7,
          "humidity": 61,
          "precipprob": 30,
          "windspeed": 2.8,
          "conditions": "Overcast",
          "icon": "cloudy"
        },
        {
          "datetime": "23:00:00",
          "temp": 17.5,
          "humidity": 64,
          "precipprob": 30,
          "windspeed": 2.2,
          "conditions": "Overcast",
          "icon": "cloudy"
        }
      ]
    },
    {
      "datetime": "2026-10-03",
      "tempmax": 26.0,
      "tempmin": 14.0,
      "conditions": "Partially cloudy",
      "icon": "partly-cloudy-day",
      "hours": [
        {
          "datetime": "00:00:00",
          "temp": 15.8,
          "humidity": 66,
          "precipprob": 0,
          "windspeed": 2.0,
          "conditions": "Clear",
          "icon": "clear-night"
        },
        {
          "datetime": "01:00:00",
          "temp": 14.8,
          "humidity": 68,
          "precipprob": 0,
          "windspeed": 2.2,
          "conditions": "Clear",
          "icon": "clear-night"
        },
        {
          "datetime": "02:00:00",
          "temp": 14.2,
          "humidity": 70,
          "precipprob": 0,
          "windspeed": 2.8,
          "conditions": "Clear",
          "icon": "clear-night"
        },
        {
          "datetime": "03:00:00",
          "temp": 14.0,
          "humidity": 70,
          "precipprob": 0,
          "windspeed": 3.8,
          "conditions": "Clear",
          "icon": "clear-night"
        },
        {
          "datetime": "04:00:00",
          "temp": 14.2,
          "humidity": 70,
          "precipprob": 0,
          "windspeed": 5.0,
          "conditions": "Clear",
          "icon": "clear-night"
        },
        {
          "datetime": "05:00:00",
          "temp": 14.8,
          "humidity": 68,
          "precipprob": 0,
          "windspeed": 6.4,
          "conditions": "Clear",
          "icon": "clear-night"
        },
        {
          "datetime": "06:00:00",
          "temp": 15.8,
          "humidity": 66,
          "precipprob": 0,
          "windspeed": 8.0,
          "conditions": "Clear",
          "icon": "clear-day"
        },
        {
          "datetime": "07:00:00",
          "temp": 17.0,
          "humidity": 64,
          "precipprob": 0,
          "windspeed": 9.6,
          "conditions": "Clear",
          "icon": "clear-day"
        },
        {
          "datetime": "08:00:00",
          "temp": 18.4,
          "humidity": 61,
          "precipprob": 0,
          "windspeed": 11.0,
          "conditions": "Clear",
          "icon": "clear-day"
        },
        {
          "datetime": "09:00:00",
          "temp": 20.0,
          "humidity": 58,
          "precipprob": 0,
          "windspeed": 12.2,
          "conditions": "Clear",
          "icon": "clear-day"
        },
        {
          "datetime": "10:00:00",
          "temp": 21.6,
          "humidity": 54,
          "precipprob": 10,
          "windspeed": 13.2,
          "conditions": "Partially cloudy",
          "icon": "partly-cloudy-day"
        },
        {
          "datetime": "11:00:00",
          "temp": 23.0,
          "humidity": 51,
          "precipprob": 10,
          "windspeed": 13.8,
          "conditions": "Partially cloudy",
          "icon": "partly-cloudy-day"
        },
        {
          "datetime": "12:00:00",
          "temp": 24.2,
          "humidity": 49,
          "precipprob": 10,
          "windspeed": 14.0,
          "conditions": "Partially cloudy",
          "icon": "partly-cloudy-day"
        },
        {
          "datetime": "13:00:00",
          "temp": 25.2,
          "humidity": 47,
          "precipprob": 10,
          "windspeed": 13.8,
          "conditions": "Partially cloudy",
          "icon": "partly-cloudy-day"
        },
        {
          "datetime": "14:00:00",
          "temp": 25.8,
          "humidity": 45,
          "precipprob": 10,
          "windspeed": 13.2,
          "conditions": "Partially cloudy",
          "icon": "partly-cloudy-day"
        },
        {
          "datetime": "15:00:00",
          "temp": 26.0,
          "humidity": 45,
          "precipprob": 10,
          "windspeed": 12.2,
          "conditions": "Partially cloudy",
          "icon": "partly-cloudy-day"
        },
        {
          "datetime": "16:00:00",
          "temp": 25.8,
          "humidity": 45,
          "precipprob": 10,
          "windspeed": 11.0,
          "conditions": "Partially cloudy",
          "icon": "partly-cloudy-day"
        },
        {
          "datetime": "17:00:00",
          "temp": 25.2,
          "humidity": 47,
          "precipprob": 10,
          "windspeed": 9.6,
          "conditions": "Partially cloudy",
          "icon": "partly-cloudy-day"
        },
        {
          "datetime": "18:00:00",
          "temp": 24.2,
          "humidity": 49,
          "precipprob": 30,
          "windspeed": 8.0,
          "conditions": "Overcast",
          "icon": "cloudy"
        },
        {
          "datetime": "19:00:00",
          "temp": 23.0,
          "humidity": 51,
          "precipprob": 30,
          "windspeed": 6.4,
          "conditions": "Overcast",
          "icon": "cloudy"
        },
        {
          "datetime": "20:00:00",
          "temp": 21.6,
          "humidity": 54,
          "precipprob": 30,
          "windspeed": 5.0,
          "conditions": "Overcast",
          "icon": "cloudy"
        },
        {
          "datetime": "21:00:00",
          "temp": 20.0,
          "humidity": 68,
          "precipprob": 80,
          "windspeed": 7.8,
          "conditions": "Rain, Partially cloudy",
          "icon": "rain"
        },
        {
          "datetime": "22:00:00",
          "temp": 18.4,
          "humidity": 71,
          "precipprob": 80,
          "windspeed": 6.8,
          "conditions": "Rain, Partially cloudy",
          "icon": "rain"
        },
        {
          "datetime": "23:00:00",
          "temp": 17.0,
          "humidity": 74,
          "precipprob": 80,
          "windspeed": 6.2,
          "conditions": "Rain, Partially cloudy",
          "icon": "rain"
        }
      ]
    },
    {
      "datetime": "2026-10-04",
      "tempmax": 22.0,
      "tempmin": 13.0,
      "conditions": "Rain, Partially cloudy",
      "icon": "rain",
      "hours": [
        {
          "datetime": "00:00:00",
          "temp": 14.3,
          "humidity": 66,
          "precipprob": 30,
          "windspeed": 2.0,
          "conditions": "Overcast",
          "icon": "cloudy"
        },
        {
          "datetime": "01:00:00",
          "temp": 13.6,
          "humidity": 68,
          "precipprob": 30,
          "windspeed": 2.2,
          "conditions": "Overcast",
          "icon": "cloudy"
        },
        {
          "datetime": "02:00:00",
          "temp": 13.2,
          "humidity": 69,
          "precipprob": 30,
          "windspeed": 2.8,
          "conditions": "Overcast",
          "icon": "cloudy"
        },
        {
          "datetime": "03:00:00",
          "temp": 13.0,
          "humidity": 70,
          "precipprob": 30,
          "windspeed": 3.8,
          "conditions": "Overcast",
          "icon": "cloudy"
        },
        {
          "datetime": "04:00:00",
          "temp": 13.2,
          "humidity": 69,
          "precipprob": 30,
          "windspeed": 5.0,
          "conditions": "Overcast",
          "icon": "cloudy"
        },
        {
          "datetime": "05:00:00",
          "temp": 13.6,
          "humidity": 68,
          "precipprob": 30,
          "windspeed": 6.4,
          "conditions": "Overcast",
          "icon": "cloudy"
        },
        {
          "datetime": "06:00:00",
          "temp": 14.3,
          "humidity": 66,
          "precipprob": 30,
          "windspeed": 8.0,
          "conditions": "Overcast",
          "icon": "cloudy"
        },
        {
          "datetime": "07:00:00",
          "temp": 15.2,
          "humidity": 74,
          "precipprob": 80,
          "windspeed": 13.6,
          "conditions": "Rain, Partially cloudy",
          "icon": "rain"
        },
        {
          "datetime": "08:00:00",
          "temp": 16.3,
          "humidity": 71,
          "precipprob": 80,
          "windspeed": 15.0,
          "conditions": "Rain, Partially cloudy",
          "icon": "rain"
        },
        {
          "datetime": "09:00:00",
          "temp": 17.5,
          "humidity": 68,
          "precipprob": 80,
          "windspeed": 16.2,
          "conditions": "Rain, Partially cloudy",
          "icon": "rain"
        },
        {
          "datetime": "10:00:00",
          "temp": 18.7,
          "humidity": 64,
          "precipprob": 80,
          "windspeed": 17.2,
          "conditions": "Rain, Partially cloudy",
          "icon": "rain"
        },
        {
          "datetime": "11:00:00",
          "temp": 19.8,
          "humidity": 61,
          "precipprob": 80,
          "windspeed": 17.8,
          "conditions": "Rain, Partially cloudy",
          "icon": "rain"
        },
        {
          "datetime": "12:00:00",
          "temp": 20.7,
          "humidity": 49,
          "precipprob": 10,
          "windspeed": 14.0,
          "conditions": "Partially cloudy",
          "icon": "partly-cloudy-day"
        },
        {
          "datetime": "13:00:00",
          "temp": 21.4,
          "humidity": 47,
          "precipprob": 10,
          "windspeed": 13.8,
          "conditions": "Partially cloudy",
          "icon": "partly-cloudy-day"
        },
        {
          "datetime": "14:00:00",
          "temp": 21.8,
          "humidity": 46,
          "precipprob": 10,
          "windspeed": 13.2,
          "conditions": "Partially cloudy",
          "icon": "partly-cloudy-day"
        },
        {
          "datetime": "15:00:00",
          "temp": 22.0,
          "humidity": 45,
          "precipprob": 10,
          "windspeed": 12.2,
          "conditions": "Partially cloudy",
          "icon": "partly-cloudy-day"
        },
        {
          "datetime": "16:00:00",
          "temp": 21.8,
          "humidity": 46,
          "precipprob": 10,
          "windspeed": 11.0,
          "conditions": "Partially cloudy",
          "icon": "partly-cloudy-day"
        },
        {
          "datetime": "17:00:00",
          "temp": 21.4,
          "humidity": 47,
          "precipprob": 10,
          "windspeed": 9.6,
          "conditions": "Partially cloudy",
          "icon": "partly-cloudy-day"
        },
        {
          "datetime": "18:00:00",
          "temp": 20.7,
          "humidity": 49,
          "precipprob": 0,
          "windspeed": 8.0,
          "conditions": "Clear",
          "icon": "clear-day"
        },
        {
          "datetime": "19:00:00",
          "temp": 19.8,
          "humidity": 51,
          "precipprob": 0,
          "windspeed": 6.4,
          "conditions": "Clear",
          "icon": "clear-night"
        },
        {
          "datetime": "20:00:00",
          "temp": 18.7,
          "humidity": 54,
          "precipprob": 0,
          "windspeed": 5.0,
          "conditions": "Clear",
          "icon": "clear-night"
        },
        {
          "datetime": "21:00:00",
          "temp": 17.5,
          "humidity": 58,
          "precipprob": 0,
          "windspeed": 3.8,
          "conditions": "Clear",
          "icon": "clear-night"
        },
        {
          "datetime": "22:00:00",
          "temp": 16.3,
          "humidity": 61,
          "precipprob": 0,
          "windspeed": 2.8,
          "conditions": "Clear",
          "icon": "clear-night"
        },
        {
          "datetime": "23:00:00",
          "temp": 15.2,
          "humidity": 64,
          "precipprob": 0,
          "windspeed": 2.2,
          "conditions": "Clear",
          "icon": "clear-night"
        }
      ]
    }
  ]
};

export const MOCK_NOW = { date: "2026-10-03", hour: 15 };

// Flatten all days into one list of hours with a full timestamp.
const allHours = mockWeather.days.flatMap((day) =>
  day.hours.map((hour) => ({
    ...hour,
    date: day.datetime,
    timestamp: new Date(`${day.datetime}T${hour.datetime}`).getTime(),
  }))
);

const nowTimestamp = new Date(
  `${MOCK_NOW.date}T${String(MOCK_NOW.hour).padStart(2, "0")}:00:00`
).getTime();

// The 24 hours before "now" (oldest first).
export const getPrevious24Hours = () =>
  allHours.filter((h) => h.timestamp < nowTimestamp).slice(-24);

// "Now" plus the next 23 hours.
export const getNext24Hours = () =>
  allHours.filter((h) => h.timestamp >= nowTimestamp).slice(0, 24);

export default mockWeather;
