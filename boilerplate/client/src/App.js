import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import withAuth from "./hoc/auth";

const LandingPageWithAuth = withAuth(LandingPage, null);
const LoginPageWithAuth = withAuth(LoginPage, false);
const RegisterPageWithAuth = withAuth(RegisterPage, false);

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPageWithAuth />} />
          <Route exact path="/login" element={<LoginPageWithAuth />} />
          <Route exact path="/register" element={<RegisterPageWithAuth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
