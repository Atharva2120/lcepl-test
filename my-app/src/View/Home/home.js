import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Main">
      <div className="container">
        <div className="row">
          <Link to="/Login" className="btn btn-primary">Login</Link>
        </div>
        <div className="row">
          <Link to="/Register" className="btn btn-primary">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
