import React, { ChangeEvent, useState } from "react";
import "./NoteCreator.scss";
import { Input } from "../Input";

export interface NoteCreatorProps {
  isAnIncomingNote: boolean;
}

export const NoteCreator: React.FC<NoteCreatorProps> = ({
  isAnIncomingNote,
}) => {
  const [noteNumber, setNoteNumber] = useState("");
  const [sender, setSender] = useState("");
  const [addressee, setAddressee] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState([""]);

  const handlerDescriptionChange = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    setDescription(target.value);
  };
  const handlerIsAnIncomingNote = () => {
    if (isAnIncomingNote) {
      return (
        <>
          <label htmlFor="addressee">Destinatario</label>
          <select name="addressee" id="" value={addressee}>
            Destinatario
          </select>
        </>
      );
    } else {
      return (
        <>
          <label htmlFor="sender">Remitente</label>
          <select name="sender" id="" value={sender}>
            Remitente
          </select>
        </>
      );
    }
  };

  return (
    <div className="form-wrap">
      <form action="#">
        {handlerIsAnIncomingNote()}
        <Input
          label="description"
          id="description"
          autofocus
          value={description}
          onChange={handlerDescriptionChange}
        />
      </form>
    </div>
  );
};

export default NoteCreator;
