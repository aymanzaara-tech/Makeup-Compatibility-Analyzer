import { useNavigate } from "react-router-dom";
import "../App.css";

function MakeupSelection({ userData, setUserData }) {
const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Select Your Makeup Products</h1>

        <form>

  <div className="form-group">
    <label>Foundation</label><br />
    <input
      type="text"
      placeholder="Search Foundation..."
      value={userData.foundation}
      onChange={(e) =>
  setUserData({
    ...userData,
    foundation: e.target.value,
  })
}
    />
  </div>

  <br />

  <div className="form-group">
    <label>Concealer</label><br />
    <input
      type="text"
      placeholder="Search Concealer..."
      value={userData.concealer}
      onChange={(e) =>
  setUserData({
    ...userData,
    concealer: e.target.value,
  })
}
    />
  </div>

  <br />

  <div className="form-group">
    <label>Blush</label><br />
    <input
      type="text"
      placeholder="Search Blush..."
      value={userData.blush}
      onChange={(e) =>
  setUserData({
    ...userData,
    blush: e.target.value,
  })
}
    />
  </div>

  <br />

  <div className="form-group">
    <label>Lipstick</label><br />
    <input
      type="text"
      placeholder="Search Lipstick..."
      value={userData.lipstick}
      onChange={(e) =>
  setUserData({
    ...userData,
    lipstick: e.target.value,
  })
}
    />
  </div>

  <br />

  <button
  type="button"
  onClick={() => navigate("/preferences")}
>
  Continue
</button>

</form>

    </div>
  );
}

export default MakeupSelection;