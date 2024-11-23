import React from "react";
import NotesList from "./NoteList.jsx";

const AppBody = ({notes, onDelete, onArchive}) => {

    return (
        <div className="note-app__body">

            <h2>Active Notes</h2>
            <NotesList notesList={notes.filter(note => note.archived === false)} onDelete={onDelete}
                       onArchive={onArchive}/>
            <h2>Archive</h2>
            <NotesList notesList={notes.filter(note => note.archived === true)} onDelete={onDelete}
                       onArchive={onArchive}/>
        </div>
    );
}

export default AppBody;