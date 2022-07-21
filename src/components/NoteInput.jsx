import { useState } from "react";
import { CheckIcon } from "@heroicons/react/solid";
import AddButton from "./AddButton";
const NoteInput = () => {
  const [note, setNote] = useState("");
  const [color, setColor] = useState("pink");
  return (
    <>
      <div className="w-full relative">
        <textarea
          className=" resize-none border border-1 border-gray-400 outline-none rounded-md p-3 w-full h-40"
          placeholder="Enter your note here..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>

        <div className="absolute left-4 bottom-4 flex gap-x-2">
          <label htmlFor="pink" className="bg-pink-500 w-5 h-5 rounded-full">
            <input
              className="hidden "
              type="radio"
              id="pink"
              name="color"
              value="pink"
              onChange={(e) => setColor(e.target.value)}
            />
            {color === "pink" && <CheckIcon className="w-5 h-5 text-white" />}
          </label>

          <label
            htmlFor="purple"
            className="bg-purple-500 w-5 h-5 rounded-full"
          >
            <input
              className="hidden"
              type="radio"
              id="purple"
              name="color"
              value="purple"
              onChange={(e) => setColor(e.target.value)}
            />
            {color === "purple" && <CheckIcon className="w-5 h-5 text-white" />}
          </label>

          <label
            htmlFor="yellow"
            className="bg-yellow-500 w-5 h-5 rounded-full"
          >
            <input
              className="hidden"
              type="radio"
              id="yellow"
              name="color"
              value="yellow"
              onChange={(e) => setColor(e.target.value)}
            />
            {color === "yellow" && <CheckIcon className="w-5 h-5 text-white" />}
          </label>

          <label htmlFor="blue" className="bg-blue-500 w-5 h-5 rounded-full">
            <input
              className="hidden"
              type="radio"
              id="blue"
              name="color"
              value="blue"
              onChange={(e) => setColor(e.target.value)}
            />
            {color === "blue" && <CheckIcon className="w-5 h-5 text-white" />}
          </label>

          <label htmlFor="green" className="bg-green-500 w-5 h-5 rounded-full">
            <input
              className="hidden"
              type="radio"
              id="green"
              name="color"
              value="green"
              onChange={(e) => setColor(e.target.value)}
            />
            {color === "green" && <CheckIcon className="w-5 h-5 text-white" />}
          </label>
        </div>
        <div className="absolute right-4 bottom-4 flex gap-x-2">
                  <AddButton note={note} color={color} setNote={ setNote} />
        </div>
      </div>
    </>
  );
};

export default NoteInput;
