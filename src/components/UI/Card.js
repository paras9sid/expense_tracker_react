import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; // white space after card is necessary otherwise it will wont work
  // children is a reserved keyword/name - will work btw opening and closing componeent card where it is imported
  return <div className={classes}>{props.children}</div>;
};
export default Card;
