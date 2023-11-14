package br.com.porto.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Bicicleta {

    private Long id;
    private String notaFiscal;
    private String marca;
    private String modelo;
    private String tamanhoQuadro;
    private String numeroSerie;
    private String tipo;
    private String cor;
    private String acessorios;
    //foto;

}
