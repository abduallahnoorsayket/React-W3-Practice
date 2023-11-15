import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
// import Comp1 from "./pages/Comp1";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="context" element={<Comp1 />} /> */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
