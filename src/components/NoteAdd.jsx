import React, {useState} from "react";
import {toast} from 'react-toastify';

const toastId1 = 'toast-1';
const toastId2 = 'toast-2';
const toastId3 = 'toast-3';

const NoteAdd = ({addNewNote, closeModal}) => {
    const [formData, setFormData] = useState({
        title: '',
        note: '',
        titleLength: 0
    });

    const onTitleChange = (event) => {
        event.preventDefault();
        if (event.target.value.length <= 50) {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value,
                titleLength: event.target.value.length
            })
        } else {
            toast.error('Max length for note title is 50', {toastId: toastId1});
        }
    }

    const onBodyChange = (event) => {
        event.preventDefault();
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })

    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        if (formData.title === '') {
            toast.error('Title cannot be empty!', {toastId: toastId2});
        } else if (formData.note === '') {
            toast.error('Note cannot be empty!', {toastId: toastId3});
        } else {
            const newData = {
                id: +new Date(),
                title: formData.title,
                body: formData.note,
                archived: false,
                createdAt: new Date().toISOString(),
            }
            const result = addNewNote(newData);
            if (!result.error) {
                toast.success('New note saved successfully');
                setFormData({
                    ...formData,
                    title: '',
                    note: '',
                    titleLength: 0
                })
                closeModal();
            } else {
                toast.error('New note failed to save');
            }
        }
    }

    return (
        <div className="note-input">
            <h2>New Note</h2>
            <form>
                <p className="note-input__title__char-limit">Character left: {50 - formData.titleLength}</p>
                <input
                    className="note-input__title"
                    type="text"
                    name="title"
                    placeholder="Title"
                    required
                    value={formData.title}
                    onChange={onTitleChange}
                />
                <textarea
                    className="note-input__body"
                    type="text"
                    name="note"
                    placeholder="Note ..."
                    required
                    value={formData.note}
                    onChange={onBodyChange}
                ></textarea>
                <button type="submit" onClick={onSubmitForm}>Add note</button>
            </form>
        </div>
    )
}

export default NoteAdd;