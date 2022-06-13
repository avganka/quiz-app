import { useState } from 'react';


function Timer(): JSX.Element {
  const [start, setStart] = useState(false);
  const count = 3;

  return (
    <>
      <div className="timer">
        <svg className="timer__body" id="svg1" viewBox="0 0 20 20">
          <circle className="pie-bg" r="10" cx="10" cy="10" />
          <circle className="pie" r="5" cx="10" cy="10" fill="transparent"
            strokeWidth="10"
            strokeDasharray="0, 31.4"
            transform="rotate(-90) translate(-20)"
          >
            <animate attributeName="stroke-dasharray" dur={count} begin={start ? '0s' : 'indefinite'} end={!start ? '0s' : '100s'} values="0; 31.4" restart="whenNotActive" />
          </circle>
          <text x="50%" y="25%" fill="white" textAnchor="middle" dy="7" fontSize="5">Click</text>
        </svg>

      </div>
      <button onClick={() => setStart((prev)=>!prev)}>start</button>
    </>
  );
}

export default Timer;
