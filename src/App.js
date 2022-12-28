import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { logIn } from "./app/slices/logSlice";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cache from "./Storage/Storage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (Cache.get("userId")) {
      dispatch(logIn());
    }
  }, [Cache.get("userId")]);
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Chat />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
