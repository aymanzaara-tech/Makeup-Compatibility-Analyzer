import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  skinTones,
  skinUndertones,
  skinTypes,
  skinConcerns,
  occasions,
  finishes,
  coverages,
  foundations,
  concealers,
  blushes,
  lipsticks,
  ingredientFilters,
} from "../data/products";
function Analyzer() {
  const [skinTone, setSkinTone] = useState("");
  const [skinUndertone, setSkinUndertone] = useState("");
  const [skinType, setSkinType] = useState("");
  const [skinConcern, setSkinConcern] = useState("");
  const [occasion, setOccasion] = useState("");
  const [finish, setFinish] = useState("");
  const [coverage, setCoverage] = useState("");
  const [foundation, setFoundation] = useState("");
  const [concealer, setConcealer] = useState("");
  const [blush, setBlush] = useState("");
  const [lipstick, setLipstick] = useState("");
  const navigate = useNavigate();
  const handleAnalyze = () => {
  if (
    !skinTone ||
    !skinUndertone ||
    !skinType ||
    !skinConcern ||
    !occasion ||
    !finish ||
    !coverage ||
    !foundation ||
    !concealer ||
    !blush ||
    !lipstick
  ) {
    alert("Please fill in all fields before continuing.");
    return;
  }

  navigate("/result");
};
  return (
    <div className="container">
      <h1>Makeup Compatibility Analyzer</h1>

      <form>

        <div className="form-group">
          <label>Skin Tone</label><br />
          <select
  value={skinTone}
  onChange={(e) => setSkinTone(e.target.value)}
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
          <select value={skinUndertone}

onChange={(e) => setSkinUndertone(e.target.value)}>

<option value="">Select Skin Undertone</option>

{skinUndertones.map((item) => (

<option key={item} value={item}>{item}</option>

))}

</select>
        </div>

        <br />

        <div className="form-group">
          <label>Skin Type</label><br />
          <select value={skinType}

onChange={(e) => setSkinType(e.target.value)}>

<option value="">Select Skin Type</option>

{skinTypes.map((item) => (

<option key={item} value={item}>{item}</option>

))}

</select>
        </div>

        <br />

        <div className="form-group">
          <label>Skin Concerns</label><br />
          <select value={skinConcern}

onChange={(e) => setSkinConcern(e.target.value)}>

<option value="">Select Skin Concern</option>

{skinConcerns.map((item) => (

<option key={item} value={item}>{item}</option>

))}

</select>
        </div>

        <br />

        <div className="form-group">
          <label>Occasion</label><br />
          <select value={occasion}

onChange={(e) => setOccasion(e.target.value)}>

<option value="">Select Occasion</option>

{occasions.map((item) => (

<option key={item} value={item}>{item}</option>

))}

</select>
        </div>

        <br />

        <div className="form-group">
          <label>Desired Finish</label><br />
         <select value={finish}

onChange={(e) => setFinish(e.target.value)}>

<option value="">Select Finish</option>

{finishes.map((item) => (

<option key={item} value={item}>{item}</option>

))}

</select>
        </div>

        <br />

       <div className="form-group">
          <label>Coverage</label><br />
          <select value={coverage}

onChange={(e) => setCoverage(e.target.value)}>

<option value="">Select Coverage</option>

{coverages.map((item) => (

<option key={item} value={item}>{item}</option>

))}

</select>
        </div>

        <br />

        <div className="form-group">
          <div className="form-group">
  <label>Foundation</label>

  <input
    type="text"
    placeholder="Search foundation..."
  />
</div>
        </div>

        <br />

        <div className="form-group">
          <label>Concealer</label><br />
          <select value={concealer}

onChange={(e) => setConcealer(e.target.value)}>

<option value="">Select Concealer</option>

{concealers.map((item) => (

<option key={item} value={item}>{item}</option>

))}

</select>
        </div>

        <br />

       <div className="form-group">
          <label>Blush</label><br />
          <select value={blush}

onChange={(e) => setBlush(e.target.value)}>

<option value="">Select Blush</option>

{blushes.map((item) => (

<option key={item} value={item}>{item}</option>

))}

</select>
        </div>

        <br />

        <div className="form-group">
          <label>Lipstick</label><br />
          <select value={lipstick}

onChange={(e) => setLipstick(e.target.value)}>

<option value="">Select Lipstick</option>

{lipsticks.map((item) => (

<option key={item} value={item}>{item}</option>

))}

</select>
        </div>

        <br />

        <div className="form-group">
          <label>Ingredient Filters</label><br />

          <input type="checkbox" />
          <label> Cruelty-Free</label>

          <br />

          <input type="checkbox" />
          <label> Fragrance-Free</label>

          <br />

          <input type="checkbox" />
          <label> Clean Beauty</label>
        </div>

        <br />

        <button type="button" onClick={handleAnalyze}>
        Analyze Compatibility
       </button>

      </form>
    </div>
  );
}

export default Analyzer;