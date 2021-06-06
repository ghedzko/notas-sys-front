import React from "react"
import "./Notes.scss"
import { NoteCreator } from "../../components/NoteCreator"

export interface NotesProps {}

export const Notes: React.FC<NotesProps> = () => {
    return (
        <div className="container">
            <div className="container__notes">
                <div className="container__notes__in">
                    <h2>Notas de Entrada</h2>
                    <NoteCreator isAnIncomingNote />
                </div>
            </div>
            <div className="container__notes">
                <div className="container__notes__out">
                    <h2>Notas de Salida</h2>
                    <NoteCreator isAnIncomingNote={false} />
                </div>
            </div>
        </div>
    )
}
