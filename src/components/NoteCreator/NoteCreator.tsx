import React, { ChangeEvent, useState } from "react"

import { Input } from "../Input"
import { Dropdown } from "../Dropdown"

import "./NoteCreator.scss"

export interface NoteCreatorProps {
    isAnIncomingNote: boolean
}

const FAKE_CONTACTS = [
    {
        value: "-1",
        label: "Seleccione Remitente",
    },
    {
        value: "0",
        label: "Remitente 1",
    },
    {
        value: "1",
        label: "Remitente 1",
    },
    {
        value: "2",
        label: "Remitente 1",
    },
]

export const NoteCreator: React.FC<NoteCreatorProps> = ({
    isAnIncomingNote,
}) => {
    const [noteNumber, setNoteNumber] = useState("")
    const [sender, setSender] = useState("-1")
    const [addressee, setAddressee] = useState("")
    const [description, setDescription] = useState("")
    const [file, setFile] = useState("")

    const handlerDescriptionChange = ({
        target,
    }: ChangeEvent<HTMLInputElement>) => {
        setDescription(target.value)
    }

    return (
        <div className="form-wrap">
            <form action="#">
                <Dropdown
                    name={isAnIncomingNote ? "sender" : "addressee"}
                    handleOnChange={isAnIncomingNote ? setSender : setAddressee}
                    value={isAnIncomingNote ? sender : addressee}
                    label={isAnIncomingNote ? "Remitente" : "Destinatario"}
                    options={FAKE_CONTACTS}
                />
                <Input
                    label="Descripcion"
                    id="description"
                    autofocus
                    value={description}
                    onChange={handlerDescriptionChange}
                />
                <Input
                    label="Número de Nota"
                    id="noteNumber"
                    autofocus
                    value={noteNumber}
                    onChange={setNoteNumber}
                />
                <Input
                    label="Subir Nota"
                    id="fileName"
                    type="file"
                    autofocus
                    value={file}
                    onChange={setFile}
                />
            </form>
        </div>
    )
}

export default NoteCreator
