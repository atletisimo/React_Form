import React,{ useState} from 'react'

const Temperature = () => {
    const [temperatureValue, setTemperatureValue] = useState(10);
    const [temperatureColor, setTemperatureColor] = useState("cold");
    const increaseTemperature = () => {
      // setTemperatureValue(temperatureValue + 1);
      const newTemperature = temperatureValue + 1;
      setTemperatureValue(newTemperature);
      if (newTemperature >= 22) {
        setTemperatureColor("hot");
      }
    };
    const decreaseTemperature = () => {
      const newTemperature = temperatureValue - 1;
      setTemperatureValue(newTemperature);
      if (newTemperature < 14) {
        setTemperatureColor("cold");
      }
    };
    return (
      <div className="temperature-display">
        <div className={`temperature ${temperatureColor}`}>
          {temperatureValue}°C
        </div>
        <div className="button-container">
          <button onClick={increaseTemperature}>+</button>
          <button onClick={decreaseTemperature}>-</button>
        </div>
      </div>
    );
  };


export default Temperature