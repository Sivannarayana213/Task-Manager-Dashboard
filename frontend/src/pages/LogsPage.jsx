import React, { useEffect, useState } from "react";
import { getLogs } from "../api/api";
import "./logs.css";

export default function LogsPage() {
  const [logs, setLogs] = useState([]);
  const [page, setPage] = useState(0);
  const pageSize = 3; // same as PDF sample
  const total = logs.length;

  useEffect(() => {
    getLogs().then((res) => {
      setLogs(res.data || []);
    });
  }, []);

  const pageLogs = logs.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <div className="logs-page">
      <h1 className="logs-title">Audit Logs</h1>

      <div className="logs-table-container">
        <table className="logs-table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Action</th>
              <th>Task ID</th>
              <th>Updated Content</th>
              <th>Notes</th>
            </tr>
          </thead>

          <tbody>
            {pageLogs.map((log, index) => (
              <tr key={index}>
                <td>{new Date(log.timestamp).toLocaleString()}</td>

                <td>
                  <span className={`log-pill ${log.action.toLowerCase()}`}>
                    {log.action}
                  </span>
                </td>

                <td>{log.taskId}</td>

                <td>
                  {log.updatedContent ? (
                    <div className="pill-box">
                      {Object.entries(log.updatedContent).map(([key, value]) => (
                        <span className="content-pill" key={key}>
                          {key}: "{value}"
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="empty">—</span>
                  )}
                </td>

                <td className="empty">—</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Footer */}
        <div className="logs-footer">
          <span>
            Showing {pageLogs.length} of {total} logs
          </span>

          <div className="pagination">
            <button
              disabled={page === 0}
              onClick={() => setPage(page - 1)}
              className="page-btn"
            >
              Prev
            </button>

            <span className="page-number">Page {page + 1}</span>

            <button
              disabled={(page + 1) * pageSize >= total}
              onClick={() => setPage(page + 1)}
              className="page-btn"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
