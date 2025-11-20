package com.example.taskmanager.controller;

import java.util.List;

import com.example.taskmanager.dto.TaskDTO;
import com.example.taskmanager.model.Task;
import com.example.taskmanager.service.TaskService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "http://localhost:5173")
public class TaskController {

    @Autowired
    private TaskService service;

    @GetMapping
    public Page<Task> getAll(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(required = false) String q)
    {
        Pageable pageable = PageRequest.of(page, 5);
        return service.list(q, pageable);
    }



    @PostMapping
    public ResponseEntity<Task> create(@Valid @RequestBody TaskDTO dto) {
        Task task = new Task(dto.getTitle(), dto.getDescription());
        Task saved = service.create(task);
        return ResponseEntity.ok(saved);
    }

    @PutMapping("/{id}")
    public Task update(
            @PathVariable Long id,
            @RequestBody TaskDTO dto
    ) {
        return service.update(id, dto.getTitle(), dto.getDescription());
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.ok(Map.of("status", "deleted"));
    }
}
