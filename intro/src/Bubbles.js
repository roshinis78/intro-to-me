import React from "react";

class Bubbles extends React.Component {
  render() {
    // randomly generate bubbles (watercolor doodles by me) for the page background
    let bubbles = [];
    const bubbleCount = 7;

    for (let i = 0; i < bubbleCount; i++) {
      let style = {
        left: Math.floor(i * (100 / bubbleCount)).toString() + "%",
        animationDelay: Math.floor(Math.random() * 10).toString() + "s",
        animationDuration:
          (Math.floor(Math.random() * 10) + 10).toString() + "s",
        height: (Math.floor(Math.random() * 30) + 10).toString() + "%"
      };

      let whichImage = Math.floor(Math.random() * 2);
      let src = require("./images/intro-bg-" + whichImage + ".png");

      bubbles.push(<img alt="bubble" key={"bubble" + i} className="bubble" src={src} style={style}></img>);
    }

    return <div>{bubbles}</div>;
  }
}

export default Bubbles;
