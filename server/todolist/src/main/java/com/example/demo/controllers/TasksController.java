package com.example.demo.controllers;

import com.example.demo.repositories.TasksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entities.Tasks;

import java.util.List;

@RestController
@RequestMapping("/controller")
public class TasksController {
    @Autowired
    private TasksRepository tasksRepository;

    @GetMapping("/tasks")
    public List<Tasks> getAllTasks() {
        return tasksRepository.findAll();
    }
}
