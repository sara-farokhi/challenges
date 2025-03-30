import { create } from "zustand";

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type TodoStore = {
  todos: Todo[];
  addTodo: (title: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
};

export const useTodoStore = create<TodoStore>((set) => ({
  todos: JSON.parse(localStorage.getItem("todos") || "[]"),

  addTodo: (title) =>
    set((state) => {
      const newTodos = [
        ...state.todos,
        { id: Date.now(), title, completed: false },
      ];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return { ...state, todos: newTodos }; // ✅ حفظ سایر پراپرتی‌های استیت
    }),

  toggleTodo: (id) =>
    set((state) => {
      const newTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return { ...state, todos: newTodos };
    }),

  removeTodo: (id) =>
    set((state) => {
      const newTodos = state.todos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return { ...state, todos: newTodos };
    }),
}));
