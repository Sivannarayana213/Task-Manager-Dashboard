import React, { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../api/api";
import TaskModal from "../components/TaskModal";
import "./tasks.css";

export default function TasksPage() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);
  const [data, setData] = useState(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);

  const [openModal, setOpenModal] = useState(false);

  const load = () => {
    getTasks(page, query).then((res) => setData(res.data));
  };

  // Load data when page changes
  useEffect(() => {
    load();
  }, [page]);

  // Auto-search with delay
  useEffect(() => {
    const delay = setTimeout(() => {
      setPage(0);
      load();
    }, 400);

    return () => clearTimeout(delay);
  }, [query]);

  const save = () => {
    const payload = { title, description };

    if (editingId) {
      updateTask(editingId, payload).then(() => {
        resetForm();
        load();
      });
    } else {
      createTask(payload).then(() => {
        resetForm();
        load();
      });
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setEditingId(null);
  };

  const startEdit = (task) => {
    setEditingId(task.id);
    setTitle(task.title);
    setDescription(task.description);
    setOpenModal(true);
  };

  return (
    <div className="page">
      <div className="container-box">

        {/* SEARCH BAR */}
        <div className="search-bar-wrapper">
          <input
            type="text"
            placeholder="Search by title or description..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />

          <button className="btn-create" onClick={() => setOpenModal(true)}>
            + Create Task
          </button>
        </div>

        {/* PAGE TITLE */}
        <h1 className="page-title">Tasks</h1>

        {/* TASK TABLE */}
        <div className="table-box">
          <table className="dark-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {data?.content?.map((t) => (
                <tr key={t.id}>
                  <td>{t.id}</td>
                  <td>{t.title}</td>
                  <td>{t.description}</td>
                  <td>{new Date(t.createdAt).toLocaleString()}</td>
                  <td>
                    <button className="btn-edit" onClick={() => startEdit(t)}>
                      update
                    </button>
                    <button
                      className="btn-delete"
                      onClick={() => deleteTask(t.id).then(load)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* PAGINATION */}
          {data && (
            <div className="pagination-row">
              <button
                className="pagination-btn"
                disabled={data.first}
                onClick={() => setPage(page - 1)}
              >
                Prev
              </button>

              <span className="page-info">
                Page {data.number + 1} / {data.totalPages}
              </span>

              <button
                className="pagination-btn"
                disabled={data.last}
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            </div>
          )}
        </div>

        {/* MODAL */}
        <TaskModal
          open={openModal}
          onClose={() => {
            setOpenModal(false);
            resetForm();
          }}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          onSave={() => {
            save();
            setOpenModal(false);
          }}
          isEdit={editingId != null}
        />
      </div>
    </div>
  );
}
