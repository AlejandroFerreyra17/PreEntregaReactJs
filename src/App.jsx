import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Carousel from "./Carousel";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Banner from "./Banner";
import Footer from "./Footer";
import Error404 from "./components/Error404";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Carousel />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
      <Banner />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
