import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsFromBackend: [],
};

export const taskPanel = createSlice({
  name: "taskPanel",
  initialState,
  reducers: {
    pushTasksList: (state, action) => {
      console.log(action.payload);
      state.itemsFromBackend = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { pushTasksList } = taskPanel.actions;

export default taskPanel.reducer;
