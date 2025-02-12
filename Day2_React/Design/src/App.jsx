import Cars_create from "./Cars/Cars_create";
import Cars_list from "./Cars/Cars_list";
import View_car from "./Cars/View_cars";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cars_list/>} />
          <Route path="/cars/list" element={<Cars_list />} />
          <Route path="/cars/create" element={<Cars_create/>} />
          <Route path="/cars/view" element={<View_car />} /> 
        </Routes>
      </BrowserRouter> 
    </>
  );
}
export default App;