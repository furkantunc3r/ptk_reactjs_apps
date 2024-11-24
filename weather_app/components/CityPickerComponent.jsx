import { useContext } from "react";
import ForecastContext from "../contexts/ForecastContext";
import '../src/App.css'

export const CityPickerComponent = () => {
    const { selectedCity, setSelectedCity } = useContext(ForecastContext);

    const handleChange = (e) => {
        setSelectedCity(e.target.value);
    };
    
    return (
        <>
        <select name="cities" id="cites" value={ selectedCity } onChange={ handleChange }>
            <option value="Istanbul">Istanbul</option>
            <option value="Kocaeli">Kocaeli</option>
            <option value="Ankara">Ankara</option>
            <option value="Samsun">Samsun</option>
            <option value="Erzurum">Erzurum</option>
            <option value="Antalya">Antalya</option>
        </select>
        </>
    )
};