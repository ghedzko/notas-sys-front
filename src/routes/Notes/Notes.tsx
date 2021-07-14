import React, { useState } from "react";
import "./Notes.scss";
import AddNoteForm from "../../components/AddNoteForm/AddNoteForm";
import Button from "../../components/Button/Button";

export interface NotesProps {}

export const Notes: React.FC<NotesProps> = () => {
  const [isAnIncomingNote, setIsAnIncomingNote] = useState(false);

  const handleChangeType = () => {
    setIsAnIncomingNote(!isAnIncomingNote);
  };

  return (
    <div className="container">
      <Button label="Tipo de nota" onClick={handleChangeType} />

      <div className="container__notes">
        <div className="container__notes__in">
          {isAnIncomingNote ? (
            <h2>Notas de Entrada</h2>
          ) : (
            <h2>Notas de Salida</h2>
          )}
          <AddNoteForm isAnIncomingNote={isAnIncomingNote} />
        </div>
      </div>
    </div>
  );
};
