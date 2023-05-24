import { useState } from "react";
import PropTypes from "prop-types";
import "./UserCardItemStyles.scss";
import logo from "../../images/Logo.svg";
import picture from "../../images/picture@1.png";
import avatarImg from "../../images/Hansel.png";
import ellips from "../../images/Ellipse1.png";
import rectangl from "../../images/Rectangle 1.png";
import { Link, useLocation } from "react-router-dom";


const UserCardItem = ({ user }) => {
  // console.log(user);
  const { avatar, tweets, followers } = user; 
  console.log(user); 
  // const [count, setCount] = useState(0);
  const [text, setText] = useState("FOLLOW");
  const [isFollowing, setIsFolowing] = useState(false);
  
  console.log(followers);   

  const location = useLocation();

  const handleOnFollow = () => {  
     
    setIsFolowing(!isFollowing);

    if (isFollowing) {
      followers + 1;
      setText("FOLLOWING");
      event.target.classList.add("active");
    } else {
      followers - 1;
      setText("FOLLOW");
      event.target.classList.remove("active");
    }
  };

  return (
    <li className="user-card">
      <Link to="/home" state={{ from: location }}>
        <img src={logo} alt="Logo" className="logoGO" />
      </Link>
      <img
        src={picture}
        alt="Ideas"
        width="308px"
        height="168px"
        className="picture"
      />
      <div className="thumb">
        <img src={rectangl} alt="Rectangle" className="rectangle" />
        <img src={ellips} alt="Ellips" className="ellips" />
        <img src={avatar || avatarImg} alt="User avatar" className="avatar" />
      </div>

      <ul>
        <li className="text mrBtn16">{tweets} TWEETS</li>
        <li className="text mrBtn26">{followers.toLocaleString("en-US")} FOLLOWERS</li>

        <button onClick={handleOnFollow} className="button">
          {text}
        </button>
      </ul>
    </li>
  );
};

UserCardItem.propTypes = {
  user: PropTypes.shape(
    {
      avatar: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired
     }
  ).isRequired  
};



export default UserCardItem;
