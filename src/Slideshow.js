import React from "react";
import Slide from "./Slide.js";
import Bubbles from "./Bubbles.js";
const uuidv4 = require("uuid/v4");

class Slideshow extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentSlide: "intro1" };
    this.bubbles = <Bubbles></Bubbles>;

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);

    this.slides = {};

    this.messages = [
      "Hello",
      "My name is Roshini Saravanakumar",
      "This site will help you learn about my experience"
    ];

    this.messages.forEach(
      (message, index) =>
        (this.slides["intro" + (index + 1)] = (
          <Message
            key={uuidv4()}
            message={message}
            next={this.nextSlide}
          ></Message>
        ))
    );

    this.slides["navigation"] = (
      <Navigation
        navItems={["About", "Projects", "Work", "Hobbies"]}
        nextSlide={this.nextSlide}
      ></Navigation>
    );

    this.slides["About"] = (
      <div className="bubble-card">
        <div className="bubble-card-image-inner">
          <img alt="Roshini's Profile" src={require("./images/roshini-profile.jpg")}></img>

          <div className="bubble-card-quote">
            <blockquote style={{ margin: "0rem" }}>
              "Don’t get attached to any words. They are only stepping stones,
              to be left behind as quickly as possible."
            </blockquote>
            <footer style={{ marginTop: "0.5rem" }}>
              &mdash; Eckhart Tolle, The Power of Now
            </footer>
          </div>
        </div>

        <div className="bubble-card-inner">
          <Section
            sectionKey="about-me"
            badges={false}
            header="Roshini Saravanakumar"
            body={[
              "Creative Mind & Life-long Learner",
              "Hobbies include: Gardening, Meditation, Painting, Yoga, Reading"
            ]}
          ></Section>
          <Section
            sectionKey="about-currently"
            badges={false}
            header="Currently"
            body={[
              "📚 Reading Into the Magic Shop by James R. Doty MD",
              "🏃‍♀️ Training for a 5k in April"
            ]}
          ></Section>
          <Section
            sectionKey="about-school"
            badges={false}
            header="University of Illinois at Urbana-Champaign"
            body={[
              "Junior in Computer Engineering (2021)",
              "James Scholar Honors Program",
              "Technical GPA: 3.93"
            ]}
          ></Section>
          <Section
            sectionKey="about-courses"
            badges={true}
            header="Relevant Coursework"
            body={[
              "Database Systems",
              "Data Structures",
              "Algorithms",
              "Operating Systems",
              "Data Science"
            ]}
          ></Section>
          <Section
            sectionKey="about-skills"
            badges={true}
            header="Awesome Skills"
            body={[
              "Full Stack Web Development",
              "Organizational Leadership",
              "Data Science & Visualization"
            ]}
          ></Section>
          <Section
            sectionKey="about-honors"
            badges={false}
            header="Honors"
            body={[
              "🏅 Frank C. Mock Scholarship (2019)",
              "🏅 John Deere Foundation Scholarship (2018)",
              "🏅 Dean's List (5 consecutive semesters)"
            ]}
          ></Section>
        </div>
      </div>
    );

    this.slides["Projects"] = (
      <LinkedText
        elements={[
          {
            text: "Full Stack Web Developer",
            linkText: " @ Illini Foodies",
            link: "https://illinifoodies.xyz"
          },
          {
            text: "Visualization, Analytics & Development Lead",
            linkText: " @ XS Consumer",
            link: "https://xsconsumer.net"
          },
          {
            text: "Creator & Mastermind",
            linkText: " @ My Personal Website",
            link: "https://roshinis78.github.io/my-website"
          }
        ]}
      ></LinkedText>
    );

    this.slides["Work"] = (
      <LinkedText
        elements={[
          {
            text: "Remote Sensing Data Science Intern",
            linkText: " @ Corteva Agriscience",
            link: "https://www.corteva.com/"
          },
          {
            text: "Undergraduate Assistant",
            linkText: " @ UIUC ECE 391",
            link: "https://courses.illinois.edu/schedule/2020/spring/ECE/391"
          }
        ]}
      ></LinkedText>
    );

    this.slides["Hobbies"] = (
      <LinkedText
        elements={[
          { text: "Digital & Traditional Art" },
          { text: "Indoor Gardening" },
          { text: "Meditation, Yoga" },
          { text: "Reading" }
        ]}
      ></LinkedText>
    );
  }

  previousSlide(event) {
    event.preventDefault();
    let previousSlide = {
      intro2: "intro1",
      intro3: "intro2",
      navigation: "intro3",
      About: "navigation",
      Projects: "navigation",
      Work: "navigation",
      Hobbies: "navigation"
    }[this.state.currentSlide];

    if (previousSlide !== undefined) {
      this.setState({ currentSlide: previousSlide });
    }
  }

  nextSlide(event) {
    event.preventDefault();

    if (this.state.currentSlide === "navigation") {
      this.setState({ currentSlide: event.target.innerHTML });
    } else {
      let nextSlide = {
        intro1: "intro2",
        intro2: "intro3",
        intro3: "navigation"
      }[this.state.currentSlide];

      if (nextSlide !== undefined) {
        this.setState({ currentSlide: nextSlide });
      }
    }
  }

  render() {
    let content = (
      <div>
        {/* Render the background bubbles (watercolor doodles by me ) */}
        {this.bubbles}
        <div className="bubble-text">
          {this.slides[this.state.currentSlide]}
        </div>
      </div>
    );

    return <Slide content={content} onStepBack={this.previousSlide}></Slide>;
  }
}

class Message extends React.Component {
  render() {
    return (
      <div onClick={this.props.next}>
        <h1 className="message">{this.props.message}</h1>
        <i>tap here to continue</i>
      </div>
    );
  }
}

class Section extends React.Component {
  render() {
    let style = {};
    if (this.props.badges) {
      style["display"] = "flex";
      style["flexWrap"] = "wrap";
    }

    return (
      <div key={this.props.sectionKey}>
        <p>
          <strong>{this.props.header}</strong>
        </p>

        <div style={style}>
          {this.props.body.map(element => {
            if (this.props.badges) {
              return <span key={uuidv4()} className="badge">{element}</span>;
            } else {
              return <p key={uuidv4()}>{element}</p>;
            }
          })}
        </div>

        <br />
      </div>
    );
  }
}

class LinkedText extends React.Component {
  render() {
    return (
      <div className="bubble-list">
        {this.props.elements.map(element => (
          <h1 key={uuidv4()}>
            {element.text} <a href={element.link}>{element.linkText}</a>
          </h1>
        ))}
      </div>
    );
  }
}

class Navigation extends React.Component {
  render() {
    return (
      <div className="bubble-list">
        {this.props.navItems.map(navItemName => (
          <h1 key={uuidv4()} onClick={this.props.nextSlide}>{navItemName}</h1>
        ))}
      </div>
    );
  }
}

export default Slideshow;
