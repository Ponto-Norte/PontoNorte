package com.pontonorte.backend.service;

import com.pontonorte.backend.model.Trilheiro;
import com.pontonorte.backend.repository.TrilheiroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TrilheiroService {

    @Autowired
    private TrilheiroRepository repository;

    public Trilheiro cadastrar(Trilheiro trilheiro) {
        return repository.save(trilheiro);
    }

    public Trilheiro logar(String email, String senha) {
        return repository.findByEmailTrilheiro(email)
                .filter(t -> t.getSenhaTrilheiro().equals(senha))
                .orElse(null);
    }
}
