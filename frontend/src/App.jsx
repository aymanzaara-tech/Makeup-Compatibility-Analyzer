import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Analyzer from "./pages/Analyzer";
import SkinProfile from "./pages/SkinProfile";
import MakeupSelection from "./pages/MakeupSelection";
import Preferences from "./pages/Preferences";
import Result from "./pages/Result";

function App() {
  const [userData, setUserData] = useState({
  // Login
  name: "",
  email: "",
  password: "",

  // Skin Profile
  skinTone: "",
  skinUndertone: "",
  skinType: "",
  skinConcern: "",

  // Makeup Selection
  foundation: "",
  concealer: "",
  blush: "",
  lipstick: "",

  // Preferences
  finish: "",
  coverage: "",
  occasion: "",
  ingredientPreferences: [],
});
  return (
    <BrowserRouter>
      <Routes>
        <Route
  path="/"
  element={
    <Login
      userData={userData}
      setUserData={setUserData}
    />
  }
/>
        <Route path="/welcome" element={<Welcome />} />
        <Route
  path="/skin-profile"
  element={
    <SkinProfile
      userData={userData}
      setUserData={setUserData}
    />
  }
/>
       <Route
  path="/makeup-selection"
  element={
    <MakeupSelection
      userData={userData}
      setUserData={setUserData}
    />
  }
/>
        <Route
  path="/preferences"
  element={
    <Preferences
      userData={userData}
      setUserData={setUserData}
    />
  }
/>
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;