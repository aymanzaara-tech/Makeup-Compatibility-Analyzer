import { useNavigate } from "react-router-dom";

function Login({ userData, setUserData }) {
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
          <input
  type="text"
  placeholder="Enter Name"
  value={userData.name}
  onChange={(e) =>
    setUserData({
      ...userData,
      name: e.target.value,
    })
  }
/>
        </div>

        <br />

        <div>
          <label>Email</label>
          <br />
          <input
  type="email"
  placeholder="Enter Email"
  value={userData.email}
  onChange={(e) =>
    setUserData({
      ...userData,
      email: e.target.value,
    })
  }
/>
        </div>

        <br />

        <div>
          <label>Password</label>
          <br />
          <input
  type="password"
  placeholder="Enter Password"
  value={userData.password}
  onChange={(e) =>
    setUserData({
      ...userData,
      password: e.target.value,
    })
  }
/>
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