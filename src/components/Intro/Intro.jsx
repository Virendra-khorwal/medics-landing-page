

import heroImage from "../../images/7.png";
import cardImg1 from "../../images/133.png";
import cardImg2 from "../../images/146.png";
import "./Intro.css";
import Button from "../button/button";

const Intro = () => {
  return (
    <div className="intro container">
      <div className="i-left">
        <h1 className="title">
          Find Your desire <span>health</span> Solution
        </h1>
        <p>Early Protection for your family Health</p>
        <Button/>
      </div>
      <div className="i-right">
        <img className="img" src={heroImage} alt="App" />
        <img src={cardImg1} alt="card" className="card-img i-img1" />
        <img src={cardImg2} alt="card" className="card-img i-img2" />
      </div>
    </div>
  );
};

export default Intro;
