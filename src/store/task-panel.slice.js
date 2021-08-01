import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsFromBackend: [],
  columns: {},
};

export const taskPanel = createSlice({
  name: "taskPanel",
  initialState,
  reducers: {
    pushTasksList: (state, action) => {
      state.itemsFromBackend = action.payload;
    },
    pushColumns: (state, action) => {
      state.columns = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  pushTasksList,
  pushColumns,
  toggleFirstFetch,
} = taskPanel.actions;

export default taskPanel.reducer;
