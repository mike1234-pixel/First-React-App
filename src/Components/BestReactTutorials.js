import React from "react";
import Header from "./Header";
import Footer from "./Footer.js";
import { Spring } from "react-spring/renderprops";

class BestReactTutorials extends React.Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0 }}
      >
        {(props) => (
          <div style={props}>
            <Header />
            <p className="heading">
              Please find below a selection of some AWESOME React tutorials:
            </p>
            <iframe
              title="tutorial-one"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/DLX62G4lc44"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <iframe
              title="tutorial-two"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/91F8reC8kvo"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <iframe
              title="tutorial-three"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/2drsTBFZTQE"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <Footer />
          </div>
        )}
      </Spring>
    );
  }
}

export default BestReactTutorials;
