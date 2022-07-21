import { XIcon, PencilIcon } from "@heroicons/react/solid";
import { setModalStatus, setActiveEdit, removeNote } from "../store/note";
import { useDispatch } from "react-redux";
const NoteItem = ({ note }) => {
  const dispatch = useDispatch();

  const openEditModal = (id) => {
    dispatch(setModalStatus(true));

    dispatch(setActiveEdit(id));
  };
  const removeItem = (id) => {
    if (confirm("Are you sure you want to delete this note?")) {
      dispatch(removeNote(id));
      const noteList = JSON.parse(localStorage.getItem("notes"));
      const newList = noteList.filter((note) => note.id != id);
      localStorage.setItem("notes", JSON.stringify(newList));
    }
  };
  return (
    <div
      className={`bg-${note.color}-500 p-3 rounded-md flex justify-between md:flex-[25%] lg:flex-[20%] w-full text-white`}
    >
      <p className="break-all">{note.title}</p>
      <div className="flex gap-x-2">
        <button onClick={() => openEditModal(note.id)}>
          <PencilIcon className="w-5 h-5" />
        </button>
        <button onClick={() => removeItem(note.id)}>
          <XIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
