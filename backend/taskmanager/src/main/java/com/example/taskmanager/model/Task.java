package com.example.taskmanager.model;


import jakarta.persistence.*;
import java.time.LocalDateTime;

    @Entity
    public class Task {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(length = 100, nullable = false)
        private String title;

        @Column(length = 500, nullable = false)
        private String description;

        private LocalDateTime createdAt;

        public Task() {}

        public Task(String title, String description) {
            this.title = title;
            this.description = description;
            this.createdAt = LocalDateTime.now();
        }

        public Long getId() {
            return id;
        }
        public String getTitle() {
            return title;
        }
        public String getDescription() {
            return description;
        }
        public LocalDateTime getCreatedAt() {
            return createdAt;
        }

        public void setTitle(String title) {
            this.title = title;
        }
        public void setDescription(String description) {
            this.description = description;
        }
    }


