package com.pontonorte.backend.model;


import jakarta.persistence.*;

@Entity
@Table(name = "dados_bancarios_guia")
public class DadosBancariosGuia {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "dados_bancarios_guia_pk")
    private Long id;

    @Column(name = "instituicao_bancaria")
    private String instituicaoBancaria;

    @Column(name = "numero_conta_guia")
    private String numeroContaGuia;

    @Column(name = "agencia_bancaria_guia")
    private String agenciaBancariaGuia;

    @Column(name = "codigo_banco_guia")
    private String codigoBancoGuia;

    @OneToOne
    @JoinColumn(name = "guia_id") // pode ser diferente se quiser outro nome
    private Guia guia;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getInstituicaoBancaria() {
        return instituicaoBancaria;
    }

    public void setInstituicaoBancaria(String instituicaoBancaria) {
        this.instituicaoBancaria = instituicaoBancaria;
    }

    public String getNumeroContaGuia() {
        return numeroContaGuia;
    }

    public void setNumeroContaGuia(String numeroContaGuia) {
        this.numeroContaGuia = numeroContaGuia;
    }

    public String getAgenciaBancariaGuia() {
        return agenciaBancariaGuia;
    }

    public void setAgenciaBancariaGuia(String agenciaBancariaGuia) {
        this.agenciaBancariaGuia = agenciaBancariaGuia;
    }

    public String getCodigoBancoGuia() {
        return codigoBancoGuia;
    }

    public void setCodigoBancoGuia(String codigoBancoGuia) {
        this.codigoBancoGuia = codigoBancoGuia;
    }

    public Guia getGuia() {
        return guia;
    }

    public void setGuia(Guia guia) {
        this.guia = guia;
    }

    
}
