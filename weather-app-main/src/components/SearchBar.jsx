const SearchBar = ({ city, setCity, fetchWeather }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
      fetchWeather();
    }}
    className="flex flex-col sm:flex-row items-center gap-2 mb-4"
  >
    <input
      type="text"
      placeholder="Enter city name"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      className="border px-4 py-2 rounded w-64"
    />
    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Get Weather
    </button>
  </form>
);

export default SearchBar;