import { useState } from "react";
import "./UserCardItemStyles.scss";
import logo from "../../images/Logo.svg";
import picture from "../../images/picture@1.png";
import avatar from "../../images/Hansel.png";
import ellips from "../../images/Ellipse1.png";

const UserCardItem = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("FOLLOW");
  const [isActive, setIsActive] = useState(false);

  const startFollowers = `${100500 + count}`.split("");
  startFollowers.splice(-3, 0, ",");
  const numberFollowers = startFollowers.join("");

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
      <img src={logo} alt="Logo" className="logoGO" />
      <img src={picture} alt="Ideas" width="308px" height="168px" />
      <div className="thumb">
        <img src={ellips} alt="Ellips" />
        <img src={avatar} alt="User avatar" className="avatar" />
      </div>

      <ul>
        <li className="text">777 TWEETS</li>
        <li className="text">{numberFollowers} FOLLOWERS</li>

        <button onClick={handleOnClick} id="follow-button" className="button">
          {text}
        </button>
      </ul>
    </li>
  );
};

export default UserCardItem;
