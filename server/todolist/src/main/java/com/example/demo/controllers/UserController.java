package com.example.demo.controllers;

import com.example.demo.entities.Users;
import com.example.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/all")
    public List<Users> getUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/tasks/{id}")
    public Optional<Users> getEspecificUser(@PathVariable Long id) {

        return userRepository.findById(id);
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<String> postUser(@RequestBody Users users) {
        Users existingUser = userRepository.findByUsername(users.getUsername());

        if(existingUser != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Usuário já cadastrado no sistema");
        }
        userRepository.save(users);
        return ResponseEntity.ok("Usuário salvo com sucesso!");
    }

    @DeleteMapping("delete/{id}")
    public String deleteUser(@PathVariable Long id){
        userRepository.deleteById(id);
        return "Usuário deletado com sucesso!";
    }

}
