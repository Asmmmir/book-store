import Main from "./components/Main/Main";
import Search from "./components/Search/Search";
import Book from "./components/Books/Book";
import "./App.css";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import Description from "./components/Description/Description";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Search />
        <Routes>
          <Route path="/" Component={Main} />
          <Route path="/:bookId" Component={Description} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
