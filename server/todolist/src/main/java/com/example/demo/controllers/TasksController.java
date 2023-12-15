package com.example.demo.controllers;

import com.example.demo.repositories.TasksRepository;
import com.example.demo.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.entities.Tasks;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TasksController {
    @Autowired
    private TaskService taskService;

    @GetMapping("/all")
    public List<Tasks> get() {
        return taskService.getAllTasks();
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<String> post(@RequestBody Tasks task) {
        return taskService.postTask(task);
    }

    @DeleteMapping("/excluir/{id}")
    public ResponseEntity<String> delete(@PathVariable Long id) {
        return taskService.deleteTask(id);
    }

}
