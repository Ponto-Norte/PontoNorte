package com.pontonorte.backend.model;

import jakarta.persistence.*;

@Entity
public class Trilheiro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTrilheiro;

    @Column(nullable = false)
    private String nomeTrilheiro;

    @Column(nullable = false)
    private String cpfTrilheiro;

    @Column(nullable = false)
    private String emailTrilheiro;

    @Column(nullable = false)
    private String senhaTrilheiro;

    public Trilheiro() {
    }

    public Long getIdTrilheiro() {
        return idTrilheiro;
    }

    public void setIdTrilheiro(Long idTrilheiro) {
        this.idTrilheiro = idTrilheiro;
    }

    public String getNomeTrilheiro() {
        return nomeTrilheiro;
    }

    public void setNomeTrilheiro(String nomeTrilheiro) {
        this.nomeTrilheiro = nomeTrilheiro;
    }

    public String getCpfTrilheiro() {
        return cpfTrilheiro;
    }

    public void setCpfTrilheiro(String cpfTrilheiro) {
        this.cpfTrilheiro = cpfTrilheiro;
    }

    public String getEmailTrilheiro() {
        return emailTrilheiro;
    }

    public void setEmailTrilheiro(String emailTrilheiro) {
        this.emailTrilheiro = emailTrilheiro;
    }

    public String getSenhaTrilheiro() {
        return senhaTrilheiro;
    }

    public void setSenhaTrilheiro(String senhaTrilheiro) {
        this.senhaTrilheiro = senhaTrilheiro;
    }

}
