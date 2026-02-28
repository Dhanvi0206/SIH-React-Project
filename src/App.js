import Login from "./pages/login";
import Application from "./pages/Application";
import Confirmation from "./pages/Confirmation";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

return (

<BrowserRouter>

<Routes>

<Route path="/" element={<Login />} />

<Route path="/apply" element={<Application />} />

<Route path="/confirmation" element={<Confirmation />} />

</Routes>

</BrowserRouter>

);

}

export default App;