package com.pontonorte.backend.controller;

import com.pontonorte.backend.model.Trilheiro;
import com.pontonorte.backend.service.TrilheiroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/trilheiros")
@CrossOrigin(origins = "http://localhost:5173")
public class TrilheiroController {

    @Autowired
    private TrilheiroService service;

    @PostMapping("/cadastro")
    public Trilheiro cadastrar(@RequestBody Trilheiro trilheiro) {
        return service.cadastrar(trilheiro);
    }

    @PostMapping("/login")
    public Trilheiro logar(@RequestBody Trilheiro trilheiro) {
        return service.logar(trilheiro.getEmailTrilheiro(), trilheiro.getSenhaTrilheiro());
    }
}
