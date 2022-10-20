import React from "react";
import { useState, useContext } from "react";
import "./TextTypeArea.css";
import noteContext from "../../Context/NoteContext";

function TextTypeArea(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const notesData = useContext(noteContext);
  let submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or description cant be blank");
    } else {
      notesData.addNotes(title, desc);
      setDesc("");
      setTitle("");
    }
  };
  return (
    <div className="input-area">
      <form onSubmit={submit}>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="enter the title here"
          className="title input-area-textbox"
          id="title"
        />

        <textarea
          type="text"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          placeholder="enter desc here...."
          className="description input-area-textbox"
          id="Notes"
        />

        <button type="submit" className="btn-submit-task">
          Submit
        </button>
      </form>
    </div>
  );
}

export default TextTypeArea;
