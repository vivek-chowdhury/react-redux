import React from "react";
import "./About.css";

function About(props) {
  return (
    <div className="aboutContainer">
      <h2>Dummy text copied from React Offical site</h2>
      <span className="topicHeading">Declarative</span>
      <p className="discriptionSection">
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application, and React will efficiently update
        and render just the right components when your data changes. Declarative
        views make your code more predictable and easier to debug.
      </p>

      <span className="topicHeading">Component-Based</span>
      <p className="discriptionSection">
        Build encapsulated components that manage their own state, then compose
        them to make complex UIs. Since component logic is written in JavaScript
        instead of templates, you can easily pass rich data through your app and
        keep state out of the DOM.
      </p>

      <span className="topicHeading">Learn Once, Write Anywhere</span>
      <p className="discriptionSection">
        We don’t make assumptions about the rest of your technology stack, so
        you can develop new features in React without rewriting existing code.
        React can also render on the server using Node and power mobile apps
        using React Native.
      </p>
    </div>
  );
}

export default About;
