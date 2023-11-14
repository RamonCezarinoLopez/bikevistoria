package br.com.porto.vo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class LoginRequestVO {

    @JsonProperty("email")
    private String email;
    @JsonProperty("senha")
    private String senha;

}
