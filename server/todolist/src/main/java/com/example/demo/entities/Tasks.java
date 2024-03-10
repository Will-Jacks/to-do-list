package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
    @Column(name = "task_name")
    private String taskName;
    @Column(name = "task_type")
    private String taskType;
    @Column(name = "created_at")
    private Date created_at;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private Users user;

    @PrePersist
    protected void onCreate() {
        this.created_at = new Date();
    }
    //Cria a data do sistema e salva automaticamente
}
