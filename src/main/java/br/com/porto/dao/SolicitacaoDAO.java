package br.com.porto.dao;

import br.com.porto.model.Solicitacao;
import br.com.porto.to.SolicitacaoTO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class SolicitacaoDAO {

    private Connection conexao;

    public SolicitacaoDAO(Connection conexao) {
        this.conexao = conexao;
    }

    public SolicitacaoTO criar(Solicitacao solicitacao) throws SQLException{

        PreparedStatement comandoSql = null;
        String sql = "INSERT INTO solicitacao (id, dono_solicitacao, pais, endereco, cidade, estado, cep, bicicleta, aprovada) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try {
            comandoSql = conexao.prepareStatement(sql);
            comandoSql.setLong(1, solicitacao.getId());
            comandoSql.setLong(2, solicitacao.getDonoSolicitacao());
            comandoSql.setString(3, solicitacao.getPais());
            comandoSql.setString(4, solicitacao.getEndereco());
            comandoSql.setString(5, solicitacao.getCidade());
            comandoSql.setString(6, solicitacao.getEstado());
            comandoSql.setString(7, solicitacao.getCep());
            comandoSql.setLong(8, solicitacao.getBicicleta());
            comandoSql.setByte(9, solicitacao.getAprovada());
            comandoSql.executeUpdate();

        } finally {
            try {
                if (comandoSql != null) {
                    comandoSql.close();
                }
                if (conexao != null) {
                    conexao.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }

        return new SolicitacaoTO(solicitacao);
    }

    //TODO: implementar atualização de observação
    public void atualizarObservacoes() {

    }

}
