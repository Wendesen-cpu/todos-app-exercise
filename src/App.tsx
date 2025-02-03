/** @format */

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/headerComponent";
import CreateTaskPage from "./pages/createTaskPage";
import Footer from "./components/footerComponent";
import Todos from "./pages/tasksPage";
import EditTaskPage from "./pages/editTaskPage";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/todos' replace />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='/create-todo' element={<CreateTaskPage />} />
        <Route path='/edit-todo/:id' element={<EditTaskPage />} />
        <Route path='*' element={<h2>404 - Page Not Found</h2>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
