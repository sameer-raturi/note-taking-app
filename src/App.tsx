import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<h1>Home Screen</h1>} />
        <Route path="/new" element={<h1>New Note</h1>} />
        <Route path="/:id">
          <Route index element={<h1>id</h1>} />
          <Route path="edit" element={<h1>editing note</h1>} />
        </Route>
        <Route path="*" element={<Navigate to={'/'}/>}/>
      </Routes>
    </Container>
  );
}

export default App;
