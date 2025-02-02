/** @format */

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/headerComponent";
import CreateTodoPage from "./pages/createTodoPage";
import Footer from "./components/footerComponent";
import Todos from "./pages/todosPage";
import EditTodoPage from "./pages/editTodoPage";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/todos' replace />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='/create-todo' element={<CreateTodoPage />} />
        <Route path='/edit-todo/:id' element={<EditTodoPage />} />
        <Route path='*' element={<h2>404 - Page Not Found</h2>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
