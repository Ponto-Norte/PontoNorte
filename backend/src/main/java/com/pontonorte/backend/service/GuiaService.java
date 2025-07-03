package com.pontonorte.backend.service;

import com.pontonorte.backend.model.DadosBancariosGuia;
import com.pontonorte.backend.model.EnderecoGuia;
import com.pontonorte.backend.model.Guia;
import com.pontonorte.backend.repository.DadosBancariosGuiaRepository;
import com.pontonorte.backend.repository.EnderecoGuiaRepository;
import com.pontonorte.backend.repository.GuiaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GuiaService {

    @Autowired
    private GuiaRepository guiaRepository;

    @Autowired
    private EnderecoGuiaRepository enderecoGuiaRepository;

    // Cadastro inicial do Guia (tela 1)
    public Guia cadastrar(Guia guia) {
        return guiaRepository.save(guia);
    }

    // Login do guia (já existente)
    public Guia login(String email, String senha) {
        return guiaRepository.findByEmailGuia(email)
                .filter(g -> g.getSenhaGuia().equals(senha))
                .orElse(null);
    }

    // Cadastro do endereço (tela 2) + associação com o guia
    public EnderecoGuia cadastrarEnderecoParaGuia(Long idGuia, EnderecoGuia enderecoGuia) {
        EnderecoGuia enderecoSalvo = enderecoGuiaRepository.save(enderecoGuia);

        Guia guia = guiaRepository.findById(idGuia)
                .orElseThrow(() -> new RuntimeException("Guia não encontrado com ID: " + idGuia));

        guia.setEnderecoGuia(enderecoSalvo); // faz o vínculo
        guiaRepository.save(guia);

        return enderecoSalvo;
    }

    @Autowired
    private DadosBancariosGuiaRepository dadosBancariosGuiaRepository;

    public Guia buscarPorId(Long idGuia) {
        return guiaRepository.findById(idGuia).orElse(null);
    }

    public DadosBancariosGuia salvarDadosBancarios(Long idGuia, DadosBancariosGuia dados) {
        Guia guia = guiaRepository.findById(idGuia).orElseThrow();
        dados.setGuia(guia);
        return dadosBancariosGuiaRepository.save(dados);
    }

}
