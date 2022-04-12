import "./App.css";
import Main from "./components/Main";
import AddProduct from "./components/AddProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" caseSensitive={false} element={<Main />} />
          <Route
            path="/addproduct"
            caseSensitive={false}
            element={<AddProduct />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
