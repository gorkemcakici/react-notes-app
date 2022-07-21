import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const notesAdapter = createEntityAdapter();

export const noteSelectors = notesAdapter.getSelectors((state) => state.notes);

const noteSlice = createSlice({
  name: "notes",
  initialState: notesAdapter.getInitialState({
    searchText: "",
    modalStatus: false,
    activeEdit:""
  }),
  reducers: {
    addNote: notesAdapter.addOne,
    addNotes: notesAdapter.addMany,
    updateNote : notesAdapter.updateOne,
    removeNote : notesAdapter.removeOne,
    setSearchText(state, action) {
      state.searchText = action.payload;
    },
    setModalStatus(state, action) {
      state.modalStatus = action.payload;
    },
    setActiveEdit(state, action) {
      state.activeEdit = action.payload;
    },
  },
});

export const {
  addNote,
  addNotes,
  updateNote,
  removeNote,
  setSearchText,
  setModalStatus,
  setActiveEdit,
} = noteSlice.actions;

export default noteSlice.reducer;
