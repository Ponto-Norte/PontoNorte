package com.pontonorte.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "endereco_guia")
public class EnderecoGuia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "endereco_guia_pk")
    private Long enderecoGuiaPk;

    @Column(name = "rua_endereco_guia")
    private String ruaEnderecoGuia;

    @Column(name = "numero_endereco_guia")
    private Integer numeroEnderecoGuia;

    @Column(name = "bairro_endereco_guia")
    private String bairroEnderecoGuia;

    @Column(name = "cidade_endereco_guia")
    private String cidadeEnderecoGuia;

    @Column(name = "estado_endereco_guia")
    private String estadoEnderecoGuia;

    @Column(name = "cep_endereco_guia")
    private String cepEnderecoGuia;

    @Column(name = "pontoref_endereco_guia")
    private String pontorefEnderecoGuia;

    public Long getEnderecoGuiaPk() {
        return enderecoGuiaPk;
    }

    public void setEnderecoGuiaPk(Long enderecoGuiaPk) {
        this.enderecoGuiaPk = enderecoGuiaPk;
    }

    public String getRuaEnderecoGuia() {
        return ruaEnderecoGuia;
    }

    public void setRuaEnderecoGuia(String ruaEnderecoGuia) {
        this.ruaEnderecoGuia = ruaEnderecoGuia;
    }

    public Integer getNumeroEnderecoGuia() {
        return numeroEnderecoGuia;
    }

    public void setNumeroEnderecoGuia(Integer numeroEnderecoGuia) {
        this.numeroEnderecoGuia = numeroEnderecoGuia;
    }

    public String getBairroEnderecoGuia() {
        return bairroEnderecoGuia;
    }

    public void setBairroEnderecoGuia(String bairroEnderecoGuia) {
        this.bairroEnderecoGuia = bairroEnderecoGuia;
    }

    public String getCidadeEnderecoGuia() {
        return cidadeEnderecoGuia;
    }

    public void setCidadeEnderecoGuia(String cidadeEnderecoGuia) {
        this.cidadeEnderecoGuia = cidadeEnderecoGuia;
    }

    public String getEstadoEnderecoGuia() {
        return estadoEnderecoGuia;
    }

    public void setEstadoEnderecoGuia(String estadoEnderecoGuia) {
        this.estadoEnderecoGuia = estadoEnderecoGuia;
    }

    public String getCepEnderecoGuia() {
        return cepEnderecoGuia;
    }

    public void setCepEnderecoGuia(String cepEnderecoGuia) {
        this.cepEnderecoGuia = cepEnderecoGuia;
    }

    public String getPontorefEnderecoGuia() {
        return pontorefEnderecoGuia;
    }

    public void setPontorefEnderecoGuia(String pontorefEnderecoGuia) {
        this.pontorefEnderecoGuia = pontorefEnderecoGuia;
    }
    

}