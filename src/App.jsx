import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import DetailNote from "./pages/DetailNote";
import Repositories from "./pages/Repositories";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/note" element={<Notes />} />
            <Route path="/note/:id" element={<DetailNote />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/repository" element={<Repositories />} />
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
