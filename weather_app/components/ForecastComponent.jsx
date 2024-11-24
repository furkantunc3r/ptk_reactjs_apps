import axios from 'axios';
import { useContext, useEffect, useState} from 'react';
import ForecastContext from '../contexts/ForecastContext';
import '../src/App.css'

export const ForecastComponent = () => {
    const [isLoading, setIsloading] = useState(true);
    const [forecastData, setForecastData] = useState([]);
    const { selectedCity } = useContext(ForecastContext);

    useEffect(() => {
        const fetchForecast = async () => {
            try {
                setIsloading(true);
    
                const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${ import.meta.env.VITE_SECRET_KEY }&q=${ selectedCity }&days=8&lang=tr`);
    
                setForecastData(response.data.forecast.forecastday);
            } catch (error) {
                console.log(error);
            } finally {
                setIsloading(false);
            }
        }

        fetchForecast();
    }, [selectedCity]);

    return (
        <>
            { isLoading ? <p>Loading...</p> : <div>
            <div className='forecast-container'>
            <ul style={{listStyle: 'none'}}>                
                {forecastData.map((day, index) => (
                    <div className={`day-container${ index === 0 ? ' current-day' : ''}`} key={ index }>
                        <li key={index}>
                            <p>{new Date(day.date).toString().split(' ')[0]}</p>
                            <img src={day.day.condition.icon}></img>
                            <div className='degree-container'>
                                <p>{day.day.maxtemp_c.toFixed(0)}°</p>
                                <p>{day.day.mintemp_c.toFixed(0)}°</p>
                            </div>
                        </li>
                    </div>
                ))}                
            </ul>
            </div>
        </div>}
            
        </>
    )
};