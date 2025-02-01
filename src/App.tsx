/** @format */

import { Container } from "@mui/material";
import "./App.scss";
import Footer from "./components/footer";
import Header from "./components/header";
import TodoList from "./components/todoList";

function App() {
  return (
    <div>
      <Header />
      <Container className='container'>
        <Container className='first'></Container>
        <Container className='second'>
          <TodoList />
        </Container>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
