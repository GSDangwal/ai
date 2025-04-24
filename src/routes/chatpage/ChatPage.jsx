import "./chatPage.css";
import NewPrompt from "../../components/newPrompt/NewPrompt";

const ChatPage = () => {
  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message">Message from AI</div>
          <div className="message user">Message from user</div>
          <div className="message">Message from AI</div>
          <div className="message user">Message from user</div>
          <div className="message">Message from AI</div>
          <div className="message user">Message from user</div>
          <div className="message">Message from AI</div>
          <div className="message user">Message from user</div>
          <div className="message">Message from AI</div>
          <div className="message user">Message from user</div>
          <div className="message">Message from AI</div>
          <div className="message user">Message from user</div>
          <div className="message">Message from AI</div>
          <div className="message user">Message from user</div>
          <div className="message">Message from AI</div>
          <div className="message user">Message from user</div>

          <NewPrompt />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
