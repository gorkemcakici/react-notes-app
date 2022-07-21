import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addNote } from "../store/note";
import { noteSelectors } from "../store/note";

const AddButton = ({ note, color, setNote }) => {
  const notes = useSelector(noteSelectors.selectAll);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (note) {
      const data = {
        id: nanoid(),
        title: note,
        color: color,
      };
      dispatch(addNote(data));
      const noteList = [...notes, data];
      localStorage.setItem("notes", JSON.stringify(noteList));
      setNote("");
    } else {
        alert("Note must be filled out");
    }
  };
  return (
    <button
      className="bg-green-600 p-2 rounded-lg text-white"
      onClick={handleSubmit}
    >
      ADD
    </button>
  );
};

export default AddButton;
