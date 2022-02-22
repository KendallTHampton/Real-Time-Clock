import React, {useState} from "react";

function App()
{
  let now = new Date().toLocaleTimeString();

  const [time, setTime] = useState("Click Button");

  function updateTime()
  {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  function clock()
  {
    setInterval(updateTime, 1000);
  }

  return (
    <div className="container">
      <h1 className="clock">Clock: Click to get Current Time</h1>
      <h1>{time}</h1>
      <button onClick={clock}>Get Time</button>
    </div>
  );
}

export default App;
