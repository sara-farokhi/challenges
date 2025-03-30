import { Container, Typography, Paper } from "@mui/material";
import AddTodoForm from "./components/todo/AddTodoForm";
import TodoList from "./components/todo/TodoList";

function App() {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          لیست کارها
        </Typography>
        <AddTodoForm />
        <TodoList />
      </Paper>
    </Container>
  );
}

export default App;
