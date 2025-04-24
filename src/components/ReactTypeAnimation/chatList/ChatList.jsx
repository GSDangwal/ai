import { Link } from "react-router-dom";
import "./chatList.css";

const ChatList = () => {
  return (
    <div className="chatList">
      <span className="tittle">DASHBOARD</span>
      <Link to={"/dashboard"}>Create a new Chat</Link>
      <Link to={"/"}>Explore AI</Link>
      <Link to={"/"}>Contact</Link>
      <hr />
      <span className="tittle">RECENT CHAT</span>

      <div className="list">
        <Link to={"/"}>My Tittle</Link>
        <Link to={"/"}>My Tittle</Link>
        <Link to={"/"}>My Tittle</Link>
        <Link to={"/"}>My Tittle</Link>
        <Link to={"/"}>My Tittle</Link>
        <Link to={"/"}>My Tittle</Link>
        <Link to={"/"}>My Tittle</Link>
        <Link to={"/"}>My Tittle</Link>
        <Link to={"/"}>My Tittle</Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" width={50} height={50} />
        <div className="texts">
          <span>Upgrade to AI Pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
