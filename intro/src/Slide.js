import React from "react";

const dark = "#292b2c";
const light = "#ffffff";

class Slide extends React.Component {
  constructor(props) {
    super(props);

    this.state = { nightMode: false };
    this.toggleNightMode = this.toggleNightMode.bind(this);
  }

  toggleNightMode() {
    this.setState({ nightMode: !this.state.nightMode });
  }

  render() {
    let style = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: light,
      color: dark,
      padding: "1rem"
    };
    let moonClass = "fa-moon-o";
    let theme = "light";

    if (this.state.nightMode) {
      style["background"] = dark;
      style["color"] = light;
      moonClass = "fa-sun-o";
      theme = "dark";
    }

    return (
      <div
        onTouchStart={this.props.onTap}
        onClick={this.props.onTap}
        style={style}
        className={theme}
      >
        <div className="bubble-menu">
          <i
            className="fa fa-lg fa-step-backward"
            onClick={this.props.onStepBack}
          ></i>
          <i
            className={"fa fa-lg " + moonClass}
            onClick={this.toggleNightMode}
          ></i>
        </div>

        {this.props.content}
      </div>
    );
  }
}

export default Slide;
