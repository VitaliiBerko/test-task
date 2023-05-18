import { useState } from "react";

const UserCardItem = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("FOLLOW");

  const startFollowers = `${100500 + count}`.split("");
  startFollowers.splice(-3, 0, ",");
  const numberFollowers = startFollowers.join("");

  const handleOnClick = () => {
    setCount(count + 1);
    setText("FOLLOWING");
  };
  return (
    <li>
      {<h2>{numberFollowers} FOLLOWERS</h2>}
      <button onClick={handleOnClick}>{text}</button>
    </li>
  );
};

export default UserCardItem;
