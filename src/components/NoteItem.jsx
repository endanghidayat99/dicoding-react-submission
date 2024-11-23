import React from "react";
import { showFormattedDate } from "../utils/";
import { MdDelete } from "react-icons/md";
import { MdArchive } from "react-icons/md";
import { MdUnarchive } from "react-icons/md";

const NoteItem = ({ note, onDelete, onArchive }) => {
    const onDeleteClick = () => onDelete(note.id);
    const onArchiveClick = () => onArchive(note.id);

    return (
        <div className="note-item">
            <div className="note-item__action">
                {
                    note.archived === false ?
                        <MdArchive size="2.5em" title="Archive" className="note-item__archive-button"
                                   onClick={onArchiveClick}/> :
                        <MdUnarchive size="2.5em" title="Unarchive" className="note-item__archive-button"
                                     onClick={onArchiveClick}/>
                }
                <MdDelete onClick={onDeleteClick} title="Delete" size="2.5em" className="note-item__delete-button"/>
            </div>
            <div className="note-item__content">
                <h3 className="note-item__title">{note.title}</h3>
                <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
                <p className="note-item__body">{note.body}</p>
            </div>

        </div>
    )
}

export default NoteItem;