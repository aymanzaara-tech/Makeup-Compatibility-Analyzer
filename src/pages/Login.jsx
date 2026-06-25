import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/welcome");
  };

  return (
    <div>
      <h1>Create Your Profile</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <br />
          <input type="text" placeholder="Enter Name" />
        </div>

        <br />

        <div>
          <label>Email</label>
          <br />
          <input type="email" placeholder="Enter Email" />
        </div>

        <br />

        <div>
          <label>Password</label>
          <br />
          <input type="password" placeholder="Enter Password" />
        </div>

        <br />

        <button type="submit">
          Create Profile
        </button>
      </form>
    </div>
  );
}

export default Login;