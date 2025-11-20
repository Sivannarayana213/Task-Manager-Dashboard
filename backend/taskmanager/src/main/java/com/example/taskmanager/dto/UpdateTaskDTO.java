package com.example.taskmanager.dto;

import jakarta.validation.constraints.Size;

public class UpdateTaskDTO {

    @Size(max = 100)
    private String title;

    @Size(max = 500)
    private String description;

    public String getTitle() { return title; }
    public String getDescription() { return description; }

    public void setTitle(String title) { this.title = title; }
    public void setDescription(String description) { this.description = description; }
}
