import { useState } from "react";
import "./UserCardItem.styled.css";

const UserCardItem = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("FOLLOW");

  const startFollowers = `${100500 + count}`.split("");
  startFollowers.splice(-3, 0, ",");
  const numberFollowers = startFollowers.join("");
  const button= document.querySelector("#follow-button")
  console.log(button);

  const handleOnClick = () => {
    setCount(count + 1);
    setText("FOLLOWING");
    button.classList.toggle('active')    
  };
  return (
    <li className="user-card">
        <img src="" alt="" />
      <ul>
        <li>777 TWEETS</li>
        <li>
          {numberFollowers} FOLLOWERS          
        </li>

        <button onClick={handleOnClick} id="follow-button">{text}</button>
      </ul>
    </li>
  );
};

export default UserCardItem;
