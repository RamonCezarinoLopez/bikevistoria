package br.com.porto.resources;

import br.com.porto.dao.UsuarioDAO;
import br.com.porto.factory.ConexaoBDFactory;
import br.com.porto.to.UsuarioTO;
import br.com.porto.util.JSONUtils;
import br.com.porto.vo.LoginRequestVO;
import com.fasterxml.jackson.core.JsonProcessingException;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

@Path("/login")
public class LoginResource {

    @POST
    @Consumes("application/json")
    public Response entrar(LoginRequestVO loginRequestVO) {
        UsuarioTO usuarioTO = null;
        String json = null;

        try {
            usuarioTO = new UsuarioDAO(ConexaoBDFactory.getConnection()).entrar(loginRequestVO.getEmail(), loginRequestVO.getSenha());
            json = JSONUtils.paraJSON(usuarioTO);
            System.out.println(json);
        } catch (Exception e) {
            e.printStackTrace();
            return Response.status(Response.Status.BAD_REQUEST).entity("{'message':'Erro ao efetuar login.'}").build();
        }
        return Response.ok(json).build();
    }

}
