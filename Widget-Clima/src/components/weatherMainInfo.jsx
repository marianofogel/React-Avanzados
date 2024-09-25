/* eslint-disable react/prop-types */
export default function WeatherMainInfo({ weather }) {
    return (
        <div>
            
            <div>{weather?.location.name}</div>
            <div>{weather?.location.country}</div>
            <div>
                <img
                    src={`http:${weather?.current.condition.icon}`}
                    width="100"
                    alt={weather?.current.condition.text}
                />
                <div>
                    <div>{weather?.current.condition.text}</div>
                    <div>{weather?.current.temp_c}°</div>
                </div>
            </div>
            <iframe
            title="mapa"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.83988669535!2d${weather?.location.lon}2!3d${weather?.location.lat}7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondres%2C%20Reino%20Unido!5e0!3m2!1ses-419!2sar!4v1727201734499!5m2!1ses-419!2sar`}
                
                width="600"
                height="450"
                style={{border:0}}
                loading="lazy"
            ></iframe>
        </div>
    );
}
