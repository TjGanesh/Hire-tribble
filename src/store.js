import { configureStore } from "@reduxjs/toolkit";
import taskPanel from "./store/task-panel.slice";

export const store = configureStore({
  reducer: { taskPanel },
});
