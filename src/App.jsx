import { Route, Routes } from "react-router-dom"
import Home from "./views/Home"
import Contact from "./views/Contact"
import NotFound from "./views/NotFound"
import Navigation from "./components/Navigation"

const App = () => {
  return (
<>
   <Navigation />
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contacto" element={<Contact />} />
    <Route path="*" element={<NotFound />} />
   </Routes>
</>

  )
}

export default App
