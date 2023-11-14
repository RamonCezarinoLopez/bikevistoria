package br.com.porto.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Solicitacao {

    private Long id;
    private Long donoSolicitacao;
    private String pais;
    private String endereco;
    private String cidade;
    private String estado;
    private String cep;
    private Long bicicleta;
    private byte aprovada;

}
