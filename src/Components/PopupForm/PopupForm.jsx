import React from "react";
import "./PopupForm.css";
import { useState, useContext } from "react";
import noteContext from "../../Context/NoteContext";

function PopupForm(props) {
  const [updateNote, setUpdateNote] = useState(props.currentNote);

  const notesData = useContext(noteContext);

  function onChangeHandler(e) {
    setUpdateNote({ ...updateNote, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();

    notesData.updateNotesInfo(updateNote);
    props.setToggle("false");
  }

  return props.toggle === "true" ? (
    <div>
      <div className="container popup">
        <div className="popup-text">
          <form onSubmit={submit}>
            <div className="text-container-area">
              <input
                type="text"
                defaultValue={updateNote[0].title}
                onChange={(e) => onChangeHandler(e)}
                name="title"
                placeholder="Title here"
                className="input-area-textbox"
                id="title"
              />
            </div>

            <div className="typeArea">
              <textarea
                type="text"
                defaultValue={updateNote[0].description}
                onChange={(e) => onChangeHandler(e)}
                name="descripton"
                placeholder="Add Note here ..."
                className="input-area-textbox"
                id="Notes"
              />
            </div>
            <button type="submit" className="btn-submit-task">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopupForm;
