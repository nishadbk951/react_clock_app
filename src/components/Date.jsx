import { useEffect, useState } from "react";


const UseEffectExample = () => {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const date = new Date();
      setHour((hour) => (hour = date.getHours()));
      setMin((min) => (min = date.getMinutes()));
      setSec((sec) => (sec = date.getSeconds()));
    }, 1000);
  });

  return (
    <div className="clock-wrapper">
      <div className="clock-card">
        <h1 className="clock-title">TIME:</h1>
        <h1 className="clock-digits">
          <span>{hour}</span>:<span>{min}</span>:<span>{sec}</span>
        </h1>
      </div>
    </div>
  );
};

export default UseEffectExample;