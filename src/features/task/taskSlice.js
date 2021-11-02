import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  idCount: 3,
  tasks: [
    { id: 1, title: "task A", completed: false },
    { id: 2, title: "task B", completed: true },
    { id: 3, title: "task C", completed: false },
  ],
  status: "idle",
};

export const taskSlice = createSlice({
  name: "task",
  initialState,

  reducers: {
    newTask: (state, action) => {
      state.idCount++;
      const newItem = {
        id: state.idCount,
        title: action.payload,
        completed: false,
      };
      state.tasks = [newItem, ...state.tasks];
    },
    completeTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) {
        task.completed = true;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload.id);
    },
  },
});

export const { newTask, completeTask, deleteTask } = taskSlice.actions;

export const selectTasks = (state) => state.task.tasks;

export default taskSlice.reducer;
