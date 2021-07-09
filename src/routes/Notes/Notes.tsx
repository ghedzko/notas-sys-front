import React, { useState } from "react"
import "./Notes.scss"
import { NoteCreator } from "../../components/NoteCreator"
import { Button } from "../../components/Button"

export interface NotesProps { }

export const Notes: React.FC<NotesProps> = () => {
    const [isAnIncomingNote, setIsAnIncomingNote] = useState(false)
    const [dataNote, setDataNote] = useState({})

    const handleChangeType = () => {
        setIsAnIncomingNote(!isAnIncomingNote)
    }

    const handleSubmitForm = () => {
        console.log({ dataNote })
    }

    return (
        <div className="container">
            <Button label="Tipo de nota" onClick={handleChangeType} />

            <div className="container__notes">
                <div className="container__notes__in">
                    {
                        isAnIncomingNote ?
                            <h2>Notas de Entrada</h2> :
                            <h2>Notas de Salida</h2>
                    }
                    <NoteCreator isAnIncomingNote={isAnIncomingNote} setDataNote={setDataNote} />
                </div>
            </div>

            <Button label="Guardar" onClick={handleSubmitForm} />
        </div>
    )
}
