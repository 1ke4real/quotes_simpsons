import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Login from "./views/Login.tsx";
import Quotes from "./views/Quotes.tsx";
import PrivateRoutes from "./views/PrivateRoutes.tsx";
import Details from "./views/Details.tsx";

function App() {

  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar/>}>
                <Route path="/" index element={<Login/>}/>
                <Route  element={<PrivateRoutes/>}>
                    <Route path="/list" element={<Quotes/>}/>
                    <Route path="/details" element={<Details/>}/>
                </Route>
            </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
