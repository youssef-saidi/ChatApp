import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";



function App() {
  return (
    <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Chat />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/register" element={<Register />} />



                </Routes >
            </Router>
        </>
  );
}

export default App;
