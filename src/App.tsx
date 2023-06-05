import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router";
import Home from "./Home";
import Contact from "./Contact";
import { useState } from "react";
export interface valueProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}
function App() {
  const [value, setValue] = useState<number>(0);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home value={value} setValue={setValue} />} />
        <Route
          path="/contact"
          element={<Contact value={value} setValue={setValue} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
