import { useSelector } from "react-redux";
import NoteItem from "./NoteItem";
import { noteSelectors } from "../store/note";
const Notes = () => {
  const notes = useSelector(noteSelectors.selectAll);
  const noteList = useSelector((state) => {
    if (state.notes.searchText === "") {
      return notes;
    }
    return notes.filter((note) =>
      note.title.toLowerCase().includes(state.notes.searchText)
    );
  });

  return (
    <div className="flex gap-3 flex-wrap justify-center w-full">
      {noteList.map((note) => (
        <NoteItem note={note} key={note.id} />
      ))}
    </div>
  );
};

export default Notes;
