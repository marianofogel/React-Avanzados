/* eslint-disable react/prop-types */
import './weatherMainInfo.css'

export default function WeatherMainInfo({ weather }) {
    return (
        <div className="container">
            <div className="ciudad">{weather?.location.name}</div>
            <div className="pais">{weather?.location.country}</div>
            <div className="containerLogoTemp">
                <img
                    className="logoClima"
                    src={`http:${weather?.current.condition.icon}`}
                    width="100"
                    alt={weather?.current.condition.text}
                />
                <div>
                    <div className="estadoClima">{weather?.current.condition.text}</div>
                    <div className="temperatura">{weather?.current.temp_c}°</div>
                </div>
            </div>
            <iframe
                className="mapa"
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d158857.83988669535!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1727314810436!5m2!1ses-419!2sar`}
                width="400"
                height="250"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
            ></iframe>
        </div>
    );
}
