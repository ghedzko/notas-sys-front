import React, { ChangeEvent, Dispatch, SetStateAction, useState, useEffect } from "react";
import moment from "moment";

import { Input } from "../Input";
import { Dropdown } from "../Dropdown";
import { Datepicker } from "../Datepicker";

import "./NoteCreator.scss";

export interface NoteCreatorProps {
  isAnIncomingNote: boolean;
  setDataNote: Dispatch<SetStateAction<{}>>
}

const FAKE_CONTACTS = [
  {
    value: "-1",
    label: "Seleccione Contacto",
  },
  {
    value: "0",
    label: "Contacto 1",
  },
  {
    value: "1",
    label: "Contacto 2",
  },
  {
    value: "2",
    label: "Contacto 3",
  },
];

const DATE_FORMAT = "YYYY-MM-DD";

export const NoteCreator: React.FC<NoteCreatorProps> = ({
  isAnIncomingNote,
  setDataNote
}) => {
  const [noteNumber, setNoteNumber] = useState("");
  const [sender, setSender] = useState("-1");
  const [addressee, setAddressee] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [date, setDate] = useState(moment().format(DATE_FORMAT));

  useEffect(() => {
    setDataNote({
      noteNumber,
      sender,
      addressee,
      description,
      file,
      date,
    })
  }, [
    setDataNote,
    noteNumber,
    sender,
    addressee,
    description,
    file,
    date,
  ])


  const handlerNoteNumberChange = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    setNoteNumber(target.value);
  };
  const handlerDescriptionChange = ({
    target,
  }: ChangeEvent<HTMLInputElement>) => {
    setDescription(target.value);
  };

  const handleChangeDate = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setDate(target.value);
  };

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
          label="Número de Nota"
          id="noteNumber"
          autofocus
          value={noteNumber}
          onChange={handlerNoteNumberChange}
        />
        <Input
          label="Descripcion"
          id="description"
          autofocus
          value={description}
          onChange={handlerDescriptionChange}
        />
        <Input
          label="Subir Nota"
          id="fileName"
          type="file"
          autofocus
          value={file}
          onChange={setFile}
        />
        <Datepicker
          label="Fecha de Creacion"
          id="date"
          value={date}
          onChange={handleChangeDate}
        />
      </form>
    </div>
  );
};

export default NoteCreator;
