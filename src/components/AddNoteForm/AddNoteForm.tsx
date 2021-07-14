import React, {
  ChangeEvent,
  // Dispatch,
  // SetStateAction,
  useState,
  useEffect,
  useCallback,
} from "react";

import moment from "moment";
import axios, { AxiosResponse } from "axios";
import { Input } from "../Input";
import { Dropdown, DropdownOptionProps } from "../Dropdown";
import { Datepicker } from "../Datepicker";
import Button from "../Button/Button";
import "./AddNoteForm.scss";

// import { stringTypeAnnotation } from "@babel/types";
// import { string } from "yargs";

export interface NoteCreatorProps {
  isAnIncomingNote: boolean;
}

interface contactInterface {
  _id: string;
  name: string;
  office: string;
  email: string;
  phone: string;
}
const DATE_FORMAT = "YYYY-MM-DD";

const AddNoteForm: React.FC<NoteCreatorProps> = ({ isAnIncomingNote }) => {
  const [noteNumber, setNoteNumber] = useState("");
  const [sender, setSender] = useState("");
  const [addressee, setAddressee] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [date, setDate] = useState(moment().format(DATE_FORMAT));
  const [contacts, setContacts] = useState<[contactInterface]>([
    { _id: "", name: "", office: "", email: "", phone: "" },
  ]);
  const [options, setOptions] = useState<DropdownOptionProps[]>([
    {
      value: "-1",
      label: "Seleccione Contacto",
    },
  ]);

  const fetchContactsData = useCallback(() => {
    axios("http://127.0.0.1:5000/contacts")
      .then((contactsData: AxiosResponse) => setContacts(contactsData.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log("EFFECT de CONTACTS");
    // const optionsTMP = options.filter((opt) => opt.label !== "");
    contacts.map((contact) => {
      setOptions((prevData) => {
        return contact.name !== ""
          ? [...prevData, { value: contact._id, label: contact.name }]
          : [...prevData];
      });
    });
    console.log(options);
  }, [contacts]);

  useEffect(() => {
    fetchContactsData();
    console.log("actualizo los contactos");
    console.log(contacts);
    console.log(options);
  }, [fetchContactsData]);

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
  const handleSubmitForm = () => {
    // e.preventDefaul();
    console.log(contacts);
    console.log(options);
    const newNote = {
      noteNumber: parseInt(noteNumber),
      sender: sender.length > 0 ? sender : "60ef48a8912783b155f825af",
      addressee: addressee.length > 0 ? addressee : "60ef48a8912783b155f825af",
      date: date,
      description: description,
      tag: ["prueba", "Guille", "update", "saraza"],
    };
    console.log(newNote);
    axios
      .post("http://localhost:5000/notes", newNote)
      .then((response: AxiosResponse) => console.log(response))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="form-wrap">
      <form action="#">
        <Dropdown
          name={isAnIncomingNote ? "sender" : "addressee"}
          handleOnChange={isAnIncomingNote ? setSender : setAddressee}
          value={isAnIncomingNote ? sender : addressee}
          label={isAnIncomingNote ? "Remitente" : "Destinatario"}
          options={options}
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
        <Button label="Guardar" onClick={handleSubmitForm} />
      </form>
      {contacts.length > 0 &&
        contacts.map((contact) => {
          return (
            <p
              key={contact._id}
            >{`nombre : ${contact.name} oficina:  ${contact.office} email: ${contact.email}`}</p>
          );
        })}
    </div>
  );
};

export default AddNoteForm;
