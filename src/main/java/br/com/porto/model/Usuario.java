package br.com.porto.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Usuario {

    private Long id;
    private String primeiroNome;
    private String sobreNome;
    private String email;
    private String cpf;
    private String senha;
    private String tipo;

}