package com.example.demo.controllers;

import com.example.demo.entities.Users;
import com.example.demo.repositories.UserRepository;
import com.example.demo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/all")
    public List<Users> getUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/cadastrar")
    public String postUser(@RequestBody Users users) {
        userRepository.save(users);
        return "Salvo com sucecsso!";
    }

    @DeleteMapping("delete/{id}")
    public String deleteUser(@PathVariable Long id){
        userRepository.deleteById(id);
        return "Usuário deletado com sucesso!";
    }

}
