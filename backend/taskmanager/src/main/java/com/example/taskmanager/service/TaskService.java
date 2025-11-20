
package com.example.taskmanager.service;

import com.example.taskmanager.repository.AuditLogRepository;
import com.example.taskmanager.model.AuditLog;
import com.example.taskmanager.model.Task;
import com.example.taskmanager.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository repo;

    @Autowired
    private AuditLogRepository auditRepo;

    public Page<Task> list(String q, Pageable pageable) {
        if (q == null || q.isBlank()) {
            return repo.findAll(pageable);
        }
        return repo.search(q, pageable);
    }


    private void log(String action, Long taskId, String message) {
        AuditLog log = new AuditLog();
        log.setAction(action);
        log.setTaskId(taskId);
        log.setMessage(message);
        auditRepo.save(log);
    }

    public Task create(Task t) {
        Task saved = repo.save(t);
        log("CREATE", saved.getId(), "Task created: " + saved.getTitle());
        return saved;
    }

    public Task update(Long id, String title, String description) {
        Task existing = repo.findById(id).orElseThrow();
        String oldTitle = existing.getTitle();

        existing.setTitle(title);
        existing.setDescription(description);
        Task saved = repo.save(existing);

        log("UPDATE", id, "Updated title from '" + oldTitle + "' to '" + title + "'");
        return saved;
    }

    public void delete(Long id) {
        repo.deleteById(id);
        log("DELETE", id, "Task deleted");
    }
}
