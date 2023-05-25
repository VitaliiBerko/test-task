import { useState } from "react";
import PropTypes from "prop-types";
import "./UserCardItemStyles.scss";
import logo from "../../images/Logo.svg";
import avatarImg from "../../images/Hansel.png";




const UserCardItem = ({ user }) => {
  // console.log(user);
  const { avatar, tweets, followers } = user; 
  console.log(user); 
  // const [count, setCount] = useState(0);
  const [text, setText] = useState("FOLLOW");
  const [isFollowing, setIsFolowing] = useState(false);
  
  console.log(followers);   

  
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
      
        <img src={logo} alt="Logo" className="logoGO" />      
      
        <img src={avatar || avatarImg} alt="User avatar" className="avatar" />
      

      <ul className="description">
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
