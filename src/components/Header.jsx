import React, {useState} from "react";
import SearchBox from "./SearchBox.jsx";
import Modal from "react-modal";
import NoteAdd from "./NoteAdd.jsx";

const modalStyle = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255,255,255,0.75)'
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'aquamarine',
        padding: '30px'
    },
};
Modal.setAppElement('#modal');

function Header({ onSearch, addNewNote }) {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }
    return (
        <div className="note-app__header">
            <h1>Notes App</h1>
            <button className="note-body__add-note-button" onClick={openModal}>Add note</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalStyle}
                contentLabel="Add Note"
                closeTimeoutMS={200}
            >
                <NoteAdd addNewNote={addNewNote} closeModal={closeModal}/>
            </Modal>
            <SearchBox onSearch={onSearch}/>
        </div>
    )
}

export default Header;