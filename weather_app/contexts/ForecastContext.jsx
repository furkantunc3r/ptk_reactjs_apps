import { createContext } from "react";
import { useState } from "react";

const ForecastContext = createContext();

export const ForecastProvider = ({ children }) => {
    const [selectedCity, setSelectedCity] = useState('Istanbul');

    const data = {
        selectedCity,
        setSelectedCity
    }

    return (
        <>
            <ForecastContext.Provider value={ data }>
                { children }
            </ForecastContext.Provider>
        </>
    )
};

export default ForecastContext;