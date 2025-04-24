import { Link } from "react-router-dom";
import "./homepage.css";
import ReactTypeAnimation from "../../components/ReactTypeAnimation/ReactTypeAnimation";

const Homepage = () => {
  return (
    <div className="homepage">
      <img src="/orbital.png" alt="orbital" className="orbital" />
      <div className="left">
        <h1>AI</h1>
        <h2>We can get anything</h2>
        <h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </h3>
        <Link to={"/dashboard"}>Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="bot" className="bot" />
          <div className="typeAnimation">
            <img src="/logo.png" alt="" />
            <ReactTypeAnimation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
