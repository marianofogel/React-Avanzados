import { useEffect, useState } from "react";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";
import './weatherApp.css'

export default function WeatherApp() {

    const API_KEY = "02cc80ff23014ff1b64152613242409";

    const [weather, setWeather] = useState(null)

    useEffect(() => {
        loadInfo()
    }, [])

    useEffect(() => {

        document.title = `Weather | ${weather?.location.name ?? ""}`

    }, [weather])


    async function loadInfo(city = 'london') {
        try {
            const request = await fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)

            const json = await request.json()

            setWeather(json)

            console.log(json)

        } catch (error) {
            console.log(error)
        }
    }


    function handleChangeCity(city) {
        setWeather(null)
        loadInfo(city)

    }


    return (
        <>
            <div className='weatherContainer'>
                <WeatherForm onChangeCity={handleChangeCity} />
                <WeatherMainInfo weather={weather} />
            </div>
        </>
    )
}