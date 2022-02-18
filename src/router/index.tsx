import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignIn from "../components/signIn/SignIn";
import StickyAdd from "../components/StickyAdd/StickyAdd";
import StickyList from "../components/StickyList/StickyList";
const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/stickyList" element={<StickyList />} />
          <Route path="/stickyAdd" element={<StickyAdd />} />
          <Route path="/stickyAdd/:id" element={<StickyAdd />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Router;
