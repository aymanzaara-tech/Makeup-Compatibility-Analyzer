import { useNavigate } from "react-router-dom";
import "../App.css";
import {
  skinTones,
  skinUndertones,
  skinTypes,
  skinConcerns,
} from "../data/products";

function SkinProfile({ userData, setUserData }) {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>Tell Us About Your Skin</h1>

      <form>
        <div className="form-group">
                  <label>Skin Tone</label><br />
                  <select
        value={userData.skinTone}
         onChange={(e) =>
  setUserData({
    ...userData,
    skinTone: e.target.value,
  })
}
        >
          <option value="">Select Skin Tone</option>
        
          {skinTones.map((tone) => (
            <option key={tone} value={tone}>
              {tone}
            </option>
          ))}
        </select>
                </div>
        
                <br />
        
                <div className="form-group">
                  <label>Skin Undertone</label><br />
                  <select value={userData.skinUndertone}
        
        onChange={(e) =>
  setUserData({
    ...userData,
    skinUndertone: e.target.value,
  })
}>
        
        <option value="">Select Skin Undertone</option>
        
        {skinUndertones.map((item) => (
        
        <option key={item} value={item}>{item}</option>
        
        ))}
        
        </select>
                </div>
        
                <br />
        
                <div className="form-group">
                  <label>Skin Type</label><br />
                  <select value={userData.skinType}
        onChange={(e) =>
  setUserData({
    ...userData,
    skinType: e.target.value,
  })
}>
        
        <option value="">Select Skin Type</option>
        
        {skinTypes.map((item) => (
        
        <option key={item} value={item}>{item}</option>
        
        ))}
        
        </select>
                </div>
        
                <br />
        
                <div className="form-group">
                  <label>Skin Concerns</label><br />
                  <select value={userData.skinConcern}
        
      onChange={(e) =>
  setUserData({
    ...userData,
    skinConcern: e.target.value,
  })
}>
        
        <option value="">Select Skin Concern</option>
        
        {skinConcerns.map((item) => (
        
        <option key={item} value={item}>{item}</option>
        
        ))}
        
        </select>
                </div>
        <button
  type="button"
  onClick={() => navigate("/makeup-selection")}
>
  Continue
</button>

      </form>
    </div>
  );
}

export default SkinProfile;