import "../App.css";
import { useNavigate } from "react-router-dom";

import {
  finishes,
  coverages,
  occasions,
  ingredientFilters,
} from "../data/products";

function Preferences({ userData, setUserData }) {
const navigate = useNavigate();
  
  return (
    <div className="container">
      <h1>Desired Look & Preferences</h1>

      <form>

  <div className="form-group">
    <label>Desired Finish</label><br />

    <select
     value={userData.finish}
      onChange={(e) =>
  setUserData({
    ...userData,
    finish: e.target.value,
  })
}
    >
      <option value="">Select Finish</option>

      {finishes.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  </div>

  <br />

  <div className="form-group">
    <label>Desired Coverage</label><br />

    <select
      value={userData.coverage}
      onChange={(e) =>
  setUserData({
    ...userData,
    coverage: e.target.value,
  })
}
    >
      <option value="">Select Coverage</option>

      {coverages.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  </div>

  <br />

  <div className="form-group">
    <label>Occasion</label><br />

    <select
      value={userData.occasion}
      onChange={(e) =>
  setUserData({
    ...userData,
    occasion: e.target.value,
  })
}
    >
      <option value="">Select Occasion</option>

      {occasions.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  </div>

  <br />

  <div className="form-group">
    <label>Ingredient Preferences</label><br />

    {ingredientFilters.map((item) => (
      <div key={item}>
        <input
  type="checkbox"
  checked={userData.ingredientPreferences.includes(item)}
  onChange={(e) => {
    if (e.target.checked) {
      setUserData({
        ...userData,
        ingredientPreferences: [
          ...userData.ingredientPreferences,
          item,
        ],
      });
    } else {
      setUserData({
        ...userData,
        ingredientPreferences:
          userData.ingredientPreferences.filter(
            (pref) => pref !== item
          ),
      });
    }
  }}
/>
        <label> {item}</label>
      </div>
    ))}
  </div>

  <br />

  <button
  type="button"
  onClick={() => navigate("/result")}
>
  Analyze Compatibility
</button>

</form>
    </div>
  );
}

export default Preferences;