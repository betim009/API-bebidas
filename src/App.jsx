import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import Login from "./pages/login";
import Vinho from "./pages/vinho";


export default function App() {
  return (
      <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/vinho/:id" element={<Vinho/>}/>
        <Route path="/*" element={<NotFound/>}/>

      </Routes>
      </>
  )
}