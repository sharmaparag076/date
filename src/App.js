import React, { useState } from 'react'; // Import useState from React
import './App.css';
import giff from "./Assets/gig.jpg"
function App() {
  const [yes, setYes] = useState(false);
  const [double, setDouble] = useState(false);

  const handleNoHover = () => {
    const x = document.getElementById('no-btn');
    x.style.position = "absolute";
    x.style.top = Math.random() * 90 + "vh";
    x.style.left = Math.random() * 90 + "vw";
  };

  const handleYes = () => {
    if (yes) {
      handleDoubleYes();
    } else {
      const h1Element = document.getElementsByTagName('h1')[0];
      h1Element.textContent = "Congratulations, Now can I call you mine?";
      setYes(true);
    }
  };

  const handleDoubleYes = () => {
    const h1Element = document.getElementsByTagName('h1')[0];
    h1Element.textContent = "😍";
    setDouble(true);
  };

  return (
    <>
      <div className='cute-gif'>

        {!double && < img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWNhdHUxZzRzdDNkbWdibWF3eTVqdnczYXV4NjBsYzMxbnF5cXlpMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjI4sFlp73fvEYgw/giphy.gif" alt="cute gif" />
        }
        {double && < img src={giff} alt="cute gif" />
        }
        <h1>Main Flirt krna shuru Krun ?</h1>
        {!double && (
          <div>
            <button onClick={handleYes}>YES</button>
            <button id="no-btn" onMouseEnter={handleNoHover}>NO</button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
