import React from "react";
import "./modal.css";

export default function TaskModal({
  open,
  onClose,
  title,
  setTitle,
  description,
  setDescription,
  onSave,
  isEdit,
}) {
  if (!open) return null;

  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h3>{isEdit ? "Edit Task" : "Create Task"}</h3>

        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="modal-buttons">
          <button className="btn-secondary" onClick={onClose}>
            Cancel
          </button>

          <button className="btn-primary" onClick={onSave}>
            {isEdit ? "Update" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
