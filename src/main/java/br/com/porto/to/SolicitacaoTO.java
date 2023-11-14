package br.com.porto.to;

import br.com.porto.model.Solicitacao;
import br.com.porto.model.Usuario;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class SolicitacaoTO {

    @JsonProperty("id")
    private Long id;
    @JsonProperty("donoSolicitacao")
    private Long donoSolicitacao;
    @JsonProperty("pais")
    private String pais;
    @JsonProperty("endereco")
    private String endereco;
    @JsonProperty("cidade")
    private String cidade;
    @JsonProperty("estado")
    private String estado;
    @JsonProperty("cep")
    private String cep;
    @JsonProperty("bicicleta")
    private Long bicicleta;
    @JsonProperty("aprovada")
    private byte aprovada;

    public SolicitacaoTO(Solicitacao solicitacao) {
        //TODO: implementar mapper
    }
}

