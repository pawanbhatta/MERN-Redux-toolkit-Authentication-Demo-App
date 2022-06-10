import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const queryClient = new QueryClient();

function App() {
  let token = localStorage.getItem("token");

  useEffect(() => {
    token = localStorage.getItem("token");
  }, [token]);
  console.log("tooooken app", token);
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={token ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
    </QueryClientProvider>
  );
}
export default App;
