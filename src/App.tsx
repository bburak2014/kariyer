
import { Route, Routes } from "react-router-dom"
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Success from "./Pages/Success";
const App: React.FC = () => {
  return (
    <Routes>
       <Route path="/" element={<Login />} />
      <Route path="/uyeol" element={<Register />} />
      <Route path="/giris" element={<Login />} />
      <Route path="/success" element={<Success />} />
      {/* <Route path="*" element={<ErrorPages />} /> */}
    </Routes>
  );
};




export default App;
