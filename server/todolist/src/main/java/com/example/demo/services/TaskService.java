package com.example.demo.services;

import com.example.demo.entities.Tasks;
import com.example.demo.repositories.TasksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class TaskService {
    @Autowired
    private TasksRepository tasksRepository;

    public List<Tasks> getAllTasks() {
        return tasksRepository.findAll();
    }

    public ResponseEntity<String> postTask(@RequestBody Tasks task) {
        try {
            tasksRepository.save(task);
            return new ResponseEntity<>("Cadastrado com sucecsso!", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Falha ao cadastrar tarefa!" + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public ResponseEntity<String> deleteTask(@PathVariable Long id) {
        try {
            tasksRepository.deleteById(id);
            return ResponseEntity.ok("Tarefa excluída com sucesso!");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Falha ao excluir tarefa!");
        }
    }
}
