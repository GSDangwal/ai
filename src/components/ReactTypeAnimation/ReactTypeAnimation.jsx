import "./reactTypeAnimation.css";

import { TypeAnimation } from "react-type-animation";

const ReactTypeAnimation = () => {
  return (
    <div className="reactTypeAnimation">
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "you can search anything",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "play game",
          1000,
          "We produce food for Guinea Pigs",
          1000,
          "We produce food for Chinchillas",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
    </div>
  );
};

export default ReactTypeAnimation;
