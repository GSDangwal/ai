import "./dashboardPage.css";

const DashboardPage = () => {
  return (
    <div className="dashboardPage">
      <div className="texts">
        <div className="logo">
          <img src="/logo.png" alt="logo" />
          <h1>AI</h1>
        </div>
        <div className="options">
          <div className="option">
            <img src="/logo.png" alt="" width={32} height={32} />
            <span>Create a new chat</span>
          </div>
          <div className="option">
            <img src="/logo.png" alt="" width={32} height={32} />
            <span>Analyze Images</span>
          </div>
          <div className="option">
            <img src="/logo.png" alt="" width={32} height={32} />
            <span>Help me with my code</span>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form action="">
          <input type="text" placeholder="Ask me anything" />
          <button>
            <img src="/arrow.png" alt="" width={32} height={32} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardPage;
