import React from "react";
import "./DynamicForm.css";
import { useState } from "react";

const DynamicForm = () => {
  const [fields, setFields] = useState([{ id: 1, value: "" }]);

  const handleChange = (id, value) => {
    const updatedFields = fields.map((field) =>
      field.id === id ? { ...field, value } : field
    );
    setFields(updatedFields);
  };

  const handleAddField = () => {
    const newField = { id: fields.length + 1, value: "" };
    setFields([...fields, newField]);
  };

  const handleRemoveField = (id) => {
    const updatedFields = fields.filter((field) => field.id !== id);
    setFields(updatedFields);
  };

  return (
    <div className="dynamic-form-fields-container">
      <form>
        {fields.map((field) => (
          <div key={field.id} className="form-field">
            <input
              type="text"
              placeholder="Nhap gia tri"
              value={field.value}
              onChange={(e) => handleChange(field.id, e.target.value)}
            />
            <button
              type="button"
              onClick={() => handleRemoveField(field.id)}
              disabled={fields.length === 1}
            >
              Xoa
            </button>
          </div>
        ))}
      </form>
      <button type="button" onClick={handleAddField}>
        Them truong
      </button>
    </div>
  );
};

export default DynamicForm;
