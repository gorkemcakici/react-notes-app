import NoteInput from "@/components/NoteInput";
import SearchInput from "@/components/SearchInput";
import Title from "@/components/Title";
import Notes from "@/components/Notes";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addNotes } from "@/store/note";
import EditModal from "@/components/EditModal";
function App() {
  const dispatch = useDispatch();
  const modalStatus = useSelector((state) => state.notes.modalStatus);
  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    dispatch(addNotes(notes));
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-y-5 items-center p-5 md:p-16 lg:p-20 bg-gray-300 min-h-screen">
      <Title />
      <SearchInput />
      <NoteInput />
      <Notes />
      {modalStatus && <EditModal />}
    </div>
  );
}

export default App;
