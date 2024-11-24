import { ForecastProvider } from '../contexts/ForecastContext'
import { ForecastComponent } from '../components/ForecastComponent'
import { CityPickerComponent } from '../components/CityPickerComponent'
import './App.css'

function App() {
  return (
    <>
    <ForecastProvider >
      <CityPickerComponent/>
      <hr />
      <ForecastComponent />
    </ForecastProvider>
    </>
  )
}

export default App
