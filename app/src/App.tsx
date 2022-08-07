import { GlobaleStyled } from "./globals/styles/globalStyled";
import Auth from "./pages/Auth";
import Router from "./routes";

const App = () => {
  return <>
    <GlobaleStyled />
    <Router />
  </>
}

export default App;