import { useEffect, useState } from 'react';
import './WeatherCheck.css'
type WeatherData = {
  temperature: number;
  windspeed: number;
  weathercode: number;
};

export default function WeatherCheck() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>('');
  useEffect(() => {
    if (!navigator.geolocation) {
      setError(`Location is not possible in your navigator`);
      setLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
          );
          if (!response.ok) {
            throw new Error(`Fail in receiving weather informations`);
          }
          const data = await response.json();
          setWeather(data.current_weather);
        } catch (error) {
          setError(`Was not possible to get weather information`);
        } finally {
          setLoading(false);
        }
      },
      (geoError) => {
        setError('Permission denied or location unavailable');
        setLoading(false);
      },
      { timeout: 5000 },
    );
  }, []);
  if (loading) {
    return <>Loading current weather information, please wait</>;
  }
  if (error) {
    return <>{error}</>;
  }
  return (
    <div className='weatherContainer'>
      {weather && (
        <div className='weatherStatusContainer'>
          <h2>Previsao Atual</h2>
          <p title='Temperature'>Temperature: {weather.temperature}</p>
          <p title='Wind speed'>Wind: {weather.windspeed} km/h</p>
        </div>
      )}
    </div>
  );
}
