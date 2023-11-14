package br.com.porto.to;

import br.com.porto.model.Usuario;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class UsuarioTO {

    @JsonProperty("id")
    private Long id;
    @JsonProperty("primeiroNome")
    private String primeiroNome;
    @JsonProperty("sobreNome")
    private String sobreNome;
    @JsonProperty("email")
    private String email;
    @JsonProperty("cpf")
    private String cpf;
    @JsonProperty("tipo")
    private String tipo;

    public UsuarioTO(Usuario usuario) {
        this.id = usuario.getId();
        this.primeiroNome = usuario.getPrimeiroNome();
        this.sobreNome = usuario.getSobreNome();
        this.email = usuario.getEmail();
        this.cpf = usuario.getCpf();
        this.tipo = usuario.getTipo();
    }
}

