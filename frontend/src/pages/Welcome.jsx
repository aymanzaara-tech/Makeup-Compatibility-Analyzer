import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome, Zaara 👋</h1>

      <p>Ready to analyze your makeup look?</p>

      <button onClick={() => navigate("/skin-profile")}>
        Start Analysis
      </button>
    </div>
  );
}

export default Welcome;