import logo from './logo.svg';
import './App.css';
import IMG from "./logo.svg"
function App() {

  const handleNoHover = () => {
    var x = document.getElementById('no-btn');
    x.style.position = "absolute";
    x.style.top = Math.random() * 90 + "vh";
    x.style.left = Math.random() * 90 + "vw";
  }
  const handleYes = () => {
    document.getElementsByTagName('h1')[0].textContent = "Congrats you are mine";
    console.log("yes");
  }
  return (
    <>
      <div className='cute-gif'>
        <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWNhdHUxZzRzdDNkbWdibWF3eTVqdnczYXV4NjBsYzMxbnF5cXlpMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjI4sFlp73fvEYgw/giphy.gif" />
        <h1>Main Flirt krna shuru Krun ?</h1>
        <div>
          <button onClick={handleYes}>YES</button>
          <button id="no-btn" onMouseEnter={handleNoHover}>NO</button>
        </div>
      </div>
    </>
  );
}

export default App;
