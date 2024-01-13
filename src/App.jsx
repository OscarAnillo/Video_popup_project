import { useState } from "react";
import "./App.css";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="App">
      <div className="main-container">
        <img
          src="https://images.pexels.com/photos/434311/pexels-photo-434311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="movie"
        />
        <h1>Nothing Ages Better Than Wine</h1>
        <p>
          It`s a wonderful story that starts on a vine, takes the humble grape
          and turns it into wine. Don`t mix the grape with the grain, a rule not
          to forget, it may lead to things you might just regret.
        </p>
        <button className="btn" onClick={() => setToggle(!toggle)}>
          Watch Trailer
        </button>
      </div>
      {toggle && (
        <div className="trailer-container">
          <video src="./trailer.mp4" controls></video>
          <i
            className="fa-solid fa-xmark fa-2x close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>
      )}
    </div>
  );
}

export default App;
