package com.example.taskmanager.controller;

import com.example.taskmanager.model.AuditLog;
import com.example.taskmanager.repository.AuditLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/logs")
@CrossOrigin(origins = "http://localhost:5173")
public class AuditLogController {

    @Autowired
    private AuditLogRepository repo;

    @GetMapping()
    public List<AuditLog> getAllLogs() {
        return repo.findAllByOrderByTimestampDesc();
    }
}
