import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Counter from "./pages/Counter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
