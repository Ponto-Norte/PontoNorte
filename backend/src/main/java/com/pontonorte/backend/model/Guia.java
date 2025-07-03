package com.pontonorte.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "guia")
public class Guia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_guia")
    private Long idGuia;

    @Column(name = "nome_guia", nullable = false)
    private String nomeGuia;

    @Column(name = "sobrenome_guia", nullable = false)
    private String sobrenomeGuia;

    @Column(name = "cpf_guia", nullable = false)
    private String cpfGuia;

    @Column(name = "email_guia", nullable = false)
    private String emailGuia;

    @Column(name = "telefone_guia", nullable = false)
    private String telefoneGuia;

    @Column(name = "senha_guia", nullable = false)
    private String senhaGuia;

    @ManyToOne
    @JoinColumn(name = "fk_endereco_guia_pk")
    private EnderecoGuia enderecoGuia;

    @OneToOne(mappedBy = "guia")
    private DadosBancariosGuia dadosBancariosGuia;

    public Guia() {
    }

    // Getters e setters de todos os campos, inclusive o novo:
    public EnderecoGuia getEnderecoGuia() {
        return enderecoGuia;
    }

    public void setEnderecoGuia(EnderecoGuia enderecoGuia) {
        this.enderecoGuia = enderecoGuia;
    }

    public Long getIdGuia() {
        return idGuia;
    }

    public void setIdGuia(Long idGuia) {
        this.idGuia = idGuia;
    }

    public String getNomeGuia() {
        return nomeGuia;
    }

    public void setNomeGuia(String nomeGuia) {
        this.nomeGuia = nomeGuia;
    }

    public String getSobrenomeGuia() {
        return sobrenomeGuia;
    }

    public void setSobrenomeGuia(String sobrenomeGuia) {
        this.sobrenomeGuia = sobrenomeGuia;
    }

    public String getCpfGuia() {
        return cpfGuia;
    }

    public void setCpfGuia(String cpfGuia) {
        this.cpfGuia = cpfGuia;
    }

    public String getEmailGuia() {
        return emailGuia;
    }

    public void setEmailGuia(String emailGuia) {
        this.emailGuia = emailGuia;
    }

    public String getTelefoneGuia() {
        return telefoneGuia;
    }

    public void setTelefoneGuia(String telefoneGuia) {
        this.telefoneGuia = telefoneGuia;
    }

    public String getSenhaGuia() {
        return senhaGuia;
    }

    public void setSenhaGuia(String senhaGuia) {
        this.senhaGuia = senhaGuia;
    }
}
