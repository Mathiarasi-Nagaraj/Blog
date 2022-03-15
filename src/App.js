import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";

import Error from "./Components/Error";
import Navbar from "./Components/Navbar";
import SingleBlog from "./Components/SingleBlog";
import Write from "./Components/Write";

import Home from './Pages/Home';

function App() {
  return (
  <div>
   <BrowserRouter>
   <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Write />} />
      <Route path="/about" element={<About></About>} />
      <Route path="/Contact" element={<Contact></Contact>} />
      <Route path="/post/:postId" element={<SingleBlog></SingleBlog>}>
  
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
