import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import LogsPage from "./pages/LogsPage";
import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/logs" element={<LogsPage />} />
          <Route path="*" element={<TasksPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
