package com.pontonorte.backend.controller;

import com.pontonorte.backend.model.DadosBancariosGuia;
import com.pontonorte.backend.model.EnderecoGuia;
import com.pontonorte.backend.model.Guia;
import com.pontonorte.backend.service.GuiaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/guias")
@CrossOrigin(origins = "http://localhost:5173")
public class GuiaController {

    @Autowired
    private GuiaService guiaService;

    // Cadastro do guia (tela 1)
    @PostMapping("/cadastro")
    public Guia cadastrar(@RequestBody Guia guia) {
        return guiaService.cadastrar(guia);
    }

    // Login do guia
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> dadosLogin) {
        String email = dadosLogin.get("email");
        String senha = dadosLogin.get("senha");

        Guia guia = guiaService.login(email, senha);

        if (guia != null) {
            return ResponseEntity.ok(guia);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login inválido");
        }
    }

    // Cadastro do endereço (tela 2)
    @PostMapping("/{idGuia}/endereco")
    public ResponseEntity<?> cadastrarEndereco(@PathVariable Long idGuia, @RequestBody EnderecoGuia endereco) {
        try {
            EnderecoGuia enderecoSalvo = guiaService.cadastrarEnderecoParaGuia(idGuia, endereco);
            return ResponseEntity.ok(enderecoSalvo);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }


    @PostMapping("/{idGuia}/bancarios")
    public ResponseEntity<?> cadastrarDadosBancarios(@PathVariable Long idGuia,
                                                     @RequestBody DadosBancariosGuia dadosBancarios) {
        DadosBancariosGuia salvo = guiaService.salvarDadosBancarios(idGuia, dadosBancarios);
        if (salvo == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Guia não encontrado");
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(salvo);
    }
}
