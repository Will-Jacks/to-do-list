package com.example.demo.services;

import com.example.demo.entities.Users;
import com.example.demo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    public ResponseEntity<String> post( Users users) {
        try{
            userRepository.save(users);

            return new ResponseEntity<>("Usuário cadastrado com sucesso!", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Falha ao cadastrar usuário: "  +  e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
