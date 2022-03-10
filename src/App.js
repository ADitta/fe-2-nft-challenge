import "./styles/app.scss";

import view from "./images/icon-view.svg";
import etherium from "./images/icon-ethereum.svg";
import clock from "./images/icon-clock.svg";
import avatar from "./images/image-avatar.png";
function App() {
  return (
    <div className="card-container">
      <div className="img">
        <div className="img-overlay">
          <img src={view} alt="" />
        </div>
      </div>

      <h1>Equilibrium #3429</h1>
      <h2>Our Equilibrium collection promotes balance and calm.</h2>
      <div className="price-container">
        <a className="eth">
          <img src={etherium} alt="" /> 0.041 ETH
        </a>
        <a className="time">
          <img src={clock} alt="" /> 3 days left
        </a>
      </div>
      <div className="line"></div>
      <div className="author-container">
        <div className="avatar">
          <img src={avatar} alt="" />
        </div>
        <p>
          Creation of <span>Jules Wyvern</span>
        </p>
      </div>
    </div>
  );
}

export default App;
