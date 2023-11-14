package br.com.porto.resources;

import br.com.porto.dao.UsuarioDAO;
import br.com.porto.factory.ConexaoBDFactory;
import br.com.porto.model.Usuario;
import br.com.porto.util.BDUtils;
import br.com.porto.util.JSONUtils;
import br.com.porto.util.RequisicaoUtils;
import br.com.porto.vo.CadastroRequestVO;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/cadastro")
public class CadastroResource {

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response cadastrar(@Context ContainerRequestContext req) {

        try {
            String reqJson = RequisicaoUtils.extrairCorpoDaRequisicao(req.getEntityStream());
            CadastroRequestVO cadastroRequestVO = (CadastroRequestVO) JSONUtils.stringJsonParaObjeto(reqJson, CadastroRequestVO.class);
            Usuario usuario = new Usuario(
                    BDUtils.gerarID(),
                    cadastroRequestVO.getPrimeiroNome(),
                    cadastroRequestVO.getSobreNome(),
                    cadastroRequestVO.getEmail(),
                    cadastroRequestVO.getCpf(),
                    cadastroRequestVO.getSenha(),
                    "cliente"
            );

            UsuarioDAO usuarioDAO = new UsuarioDAO(ConexaoBDFactory.getConnection());
            usuarioDAO.criar(usuario);

        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity("{'message':'Erro ao criar usuario.'}").build();
        }

        return Response.ok("{'message':'Usuario criado com sucesso.'}").build();
    }
}
