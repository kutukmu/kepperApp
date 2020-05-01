import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [areaclick, setclick] = useState(false)
  const [rowNumber, setRow]  =  useState(1)

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }


function changeSize(){
  setRow(3)
  setclick(true)
}
  return (
    <div>
      <form className="create-note">
       {areaclick && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> } 
        <textarea
          onClick={changeSize}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={rowNumber}
        />
        <Zoom in={areaclick && true}>
        <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
