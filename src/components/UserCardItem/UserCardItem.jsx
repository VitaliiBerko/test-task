import { useState } from "react";
import "./UserCardItemStyles.scss";
import logo from "../../images/Logo.svg";
import picture from "../../images/picture@1.png";
import avatar from "../../images/Hansel.png";
import ellips from "../../images/Ellipse1.png";
import rectangl from "../../images/Rectangle 1.png"
import { Link, useLocation } from "react-router-dom";

const UserCardItem = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("FOLLOW");
  const [isActive, setIsActive] = useState(false);

  const startFollowers = `${100500 + count}`.split("");
  startFollowers.splice(-3, 0, ",");
  const numberFollowers = startFollowers.join("");
  const location = useLocation();

  const handleOnClick = () => {
    setIsActive(!isActive);

    if (!isActive) {
      setCount(count + 1);
      setText("FOLLOWING");
      document.querySelector("#follow-button").classList.add("active");
    } else {
      setCount(count - 1);
      setText("FOLLOW");
      document.querySelector("#follow-button").classList.remove("active");
    }
  };

  return (
    <li className="user-card">
      <Link to="/home" state={{from: location}}><img src={logo} alt="Logo" className="logoGO" /></Link>
      <img src={picture} alt="Ideas" width="308px" height="168px" className="picture" />
      <div className="thumb">
        <img src={rectangl} alt="Rectangle" className="rectangle" />
        <img src={ellips} alt="Ellips" className="ellips"/>
        <img src={avatar} alt="User avatar" className="avatar" />
      </div>

      <ul>
        <li className="text mrBtn16">777 TWEETS</li>
        <li className="text mrBtn26">{numberFollowers} FOLLOWERS</li>

        <button onClick={handleOnClick} id="follow-button" className="button">
          {text}
        </button>
      </ul>
    </li>
  );
};

export default UserCardItem;
