import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import useAuth from "./context/Auth/hook/useAuth";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

const Private = ({ children, redirectTo }: {
  children: JSX.Element,
  redirectTo: string
}) => {
  const { isLoaded } = useAuth();

  return isLoaded() ? children : <Navigate to={redirectTo} />
}

const Router = () => {
  return <>
    <BrowserRouter>
      <Routes>

        <Route path="*" element={<Auth />} />

        <Route path="/home" element={
          <Private redirectTo="/" >
            <Home />
          </Private>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default Router;