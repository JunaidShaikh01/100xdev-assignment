import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
// import Dashboard from "./Components/Dashboard";
// import Landing from "./Components/Landing";
import { Suspense, lazy } from "react";

const Dashboard = lazy(() => import("./Components/Dashboard"));
const Landing = lazy(() => import("./Components/Landing"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"loading..."}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={"loading..."}>
                <Landing />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );

  function AppBar() {
    const navigate = useNavigate();
    return (
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Landing Page
        </button>
        <button
          onClick={() => {
            // window.location.href = "/";
            navigate("/dashboard");
          }}
        >
          Router Page
        </button>
      </div>
    );
  }
}

export default App;
