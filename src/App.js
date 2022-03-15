import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";

import Error from "./Components/Error";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import SingleBlog from "./Components/SingleBlog";
import Write from "./Components/Write";
import { useContext } from "react";
import { Context } from "./context/Context";
import Home from './Pages/Home';
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  const { user } = useContext(Context);
  return (
  <div>
   <BrowserRouter>
   <Navbar></Navbar>
    <Routes>
      <Route path="/" element={user?<Home />:<Login></Login>} />
      <Route path="/login" element={user?<Home />:<Login></Login>} />
      <Route path="/register" element={user?<Home />:<Register></Register>} />
      <Route path="/create" element={user?<Write />:<Login></Login>} />
      <Route path="/about" element={<About></About>} />
      <Route path="/Contact" element={<Contact></Contact>} />
      <Route path="/post/:postId" element={<SingleBlog></SingleBlog>}>
  
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
    <div className="relative mt-72">
   <Footer></Footer>
   </div>
  </BrowserRouter>
    </div>
  );
}

export default App;
