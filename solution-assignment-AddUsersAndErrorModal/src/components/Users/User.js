import React from "react";

const User = (props) => {
  return (
    <li>
        Username: {props.name} - {props.age} year{props.age > 1?"s":"" } old
    </li>
  );
};

export default User;
