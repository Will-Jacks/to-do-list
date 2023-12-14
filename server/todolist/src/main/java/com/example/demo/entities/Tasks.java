package com.example.demo.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "tasks")
public class Tasks {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String taskName;
    private String taskType;
    private Date created_at;

    @PrePersist
    protected void onCreate() {
        this.created_at = new Date();
    }
    //Cria a data do sistema e salva automaticamente
}
