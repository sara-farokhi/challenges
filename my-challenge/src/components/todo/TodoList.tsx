import { useState } from "react";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomCheckbox from "../ui/CustomCheckbox";
import { useTodoStore } from "../../store/useTodoStore";
import ConfirmationDialog from "../ui/ConfirmationDialog";

const TodoList = () => {
  const { todos, toggleTodo, removeTodo } = useTodoStore();
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState<number | null>(null);

  const handleDeleteClick = (todoId: number) => {
    setSelectedTodoId(todoId);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleConfirmDelete = () => {
    if (selectedTodoId !== null) {
      removeTodo(selectedTodoId);
      setOpenDialog(false);
    }
  };

  return (
    <>
      <List>
        {todos.map((todo) => (
          <ListItem
            key={todo.id}
            secondaryAction={
              <IconButton edge="end" onClick={() => handleDeleteClick(todo.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <CustomCheckbox
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              checkedColor="#ff9800"
              uncheckedColor="#9e9e9e"
            />
            <ListItemText
              primary={todo.title}
              sx={{ textDecoration: todo.completed ? "line-through" : "none" }}
            />
          </ListItem>
        ))}
      </List>

      <ConfirmationDialog
        open={openDialog}
        onClose={handleCloseDialog}
        onConfirm={handleConfirmDelete}
        dialogTitle={"حذف کار"}
        dialogContent={"آیا از حذف این مورد مطمئن هستید؟"}
      />
    </>
  );
};

export default TodoList;
