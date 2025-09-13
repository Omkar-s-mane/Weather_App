const WeatherCard = ({ weather }) => (
  <div className="bg-[#a8dadc] outline  rounded shadow p-4 text-center max-w-md w-full">
    <h2 className="text-2xl font-bold mb-2">
      {weather.name}, {weather.sys.country}
    </h2>
    <p className="capitalize mb-1">{weather.weather[0].description}</p>
    <p className="text-xl mb-1">🌡 Temp: {weather.main.temp} °C</p>
    <p className="mb-1">💧 Humidity: {weather.main.humidity}%</p>
    <p>🌬 Wind: {weather.wind.speed} m/s</p>
  </div>
);

export default WeatherCard;