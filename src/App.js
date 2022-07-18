import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./App.css";
import { logoutUser } from "./auth/firebase";
import { useNavigate } from "react-router-dom";

function App() {
  const navi = useNavigate();

  const buttonLogoutHandler = async () => {
    await logoutUser();
    navi("/login");
  };

  return (
    <div className="App">
      <h1>Halo ini Home</h1>
      <Link to={"/login"}>Menuju Login</Link>
      <Button onClick={buttonLogoutHandler}>Logout</Button>
    </div>
  );
}

export default App;
