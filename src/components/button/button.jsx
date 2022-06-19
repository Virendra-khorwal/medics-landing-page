import { FaAppStoreIos } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

import "./button.css";

const Button = () => {
  return (
    <div className="download">
      <button className="btn b-btn">
        <FaGooglePlay />
        Android
      </button>
      <button className="btn b-btn">
        <FaAppStoreIos />
        IOS
      </button>
    </div>
  );
};

export default Button;
