package com.example.taskmanager.repository;

import com.example.taskmanager.model.Task;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TaskRepository extends JpaRepository<Task, Long> {

    // Search (no pagination)
    @Query("SELECT t FROM Task t WHERE " +
            "LOWER(t.title) LIKE LOWER(CONCAT('%', :q, '%')) OR " +
            "LOWER(t.description) LIKE LOWER(CONCAT('%', :q, '%'))")
    List<Task> search(@Param("q") String q);

    // Search (with pagination)
    @Query("SELECT t FROM Task t WHERE " +
            "LOWER(t.title) LIKE LOWER(CONCAT('%', :q, '%')) OR " +
            "LOWER(t.description) LIKE LOWER(CONCAT('%', :q, '%'))")
    Page<Task> search(@Param("q") String q, Pageable pageable);
}
