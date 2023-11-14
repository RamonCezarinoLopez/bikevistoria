package br.com.porto.to;

import br.com.porto.model.Bicicleta;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;

@AllArgsConstructor
public class BicicletaTO {

    @JsonProperty("id")
    private Long id;
    @JsonProperty("notaFiscal")
    private String notaFiscal;
    @JsonProperty("marca")
    private String marca;
    @JsonProperty("modelo")
    private String modelo;
    @JsonProperty("tamanhoQuadro")
    private String tamanhoQuadro;
    @JsonProperty("numeroSerie")
    private String numeroSerie;
    @JsonProperty("tipo")
    private String tipo;
    @JsonProperty("cor")
    private String cor;
    @JsonProperty("acessorios")
    private String acessorios;

    public BicicletaTO(Bicicleta bicicleta) {
        this.id = bicicleta.getId();
        this.notaFiscal = bicicleta.getNotaFiscal();
        this.marca = bicicleta.getMarca();
        this.modelo = bicicleta.getModelo();
        this.tamanhoQuadro = bicicleta.getTamanhoQuadro();
        this.numeroSerie = bicicleta.getNumeroSerie();
        this.tipo = bicicleta.getTipo();
        this.cor = bicicleta.getCor();
        this.acessorios = bicicleta.getAcessorios();
    }
}

