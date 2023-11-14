package br.com.porto.vo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CadastroRequestVO {
    private String primeiroNome;
    private String sobreNome;
    private String email;
    private String cpf;
    private String senha;
}
