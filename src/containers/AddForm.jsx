import React, { useState, useRef, useEffect } from "react";
import { AddFormBase } from "../components/AddFormBase";

export const AddForm = ({
  columnIndex,
  onAddCard,
  onAddColumn,
  isEmptyColumn,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [showForm]);

  const onAdd = () => {
    if (isEmptyColumn) {
      onAddColumn(value);
    } else {
      onAddCard(columnIndex, value);
    }
    setValue("");
    setShowForm(false);
  };

  return (
    <AddFormBase
      onAdd={onAdd}
      showForm={showForm}
      setShowForm={setShowForm}
      value={value}
      setValue={setValue}
      textareaRef={textareaRef}
    />
  );
};
