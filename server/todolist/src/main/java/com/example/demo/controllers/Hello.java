package com.example.demo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class Hello {

    @GetMapping("/ola")
    public String retornaOi() {
        return "Oi, tudo bem?";
    }

    @GetMapping("/xau")
    public String retornaXau() {
        return "Xau";
    }
}
