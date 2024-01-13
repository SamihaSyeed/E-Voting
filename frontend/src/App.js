import { Routes, Route } from "react-router-dom";
import "./index.css"
import Home from '../src/Routes/Home'
import Vote from '../src/Routes/Vote'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vote/:id" element={<Vote />} />
      </Routes>
    </div>
  );
}

export default App;
