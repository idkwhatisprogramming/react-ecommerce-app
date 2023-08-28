import CategoryContainer from "./components/categories/categoreis-container/categoriesContainer";
import Contact from "./components/contactus/contactus";
import About from "./aboutus/aboutus";
import { Routes, Route } from "react-router";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CategoryContainer />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
