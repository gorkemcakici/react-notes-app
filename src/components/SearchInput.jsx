import { useDispatch } from "react-redux";
import { setSearchText } from "../store/note";
const SearchInput = () => {
  const dispatch = useDispatch();

    const handle = (e) => {
        dispatch(setSearchText(e.target.value));
    }
  return (
    <>
      <input
        className="w-60 md:w-80 border border-1 border-gray-400 p-1 outline-none rounded-md"
        type="text"
        placeholder="Search..."
        onChange={handle}
      />
    </>
  );
};

export default SearchInput;
