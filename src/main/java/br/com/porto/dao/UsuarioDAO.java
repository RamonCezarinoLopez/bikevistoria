package br.com.porto.dao;

import br.com.porto.model.Usuario;
import br.com.porto.to.UsuarioTO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UsuarioDAO {

    private Connection conexao;

    public UsuarioDAO(Connection conexao) {
        this.conexao = conexao;
    }

    public UsuarioTO criar(Usuario usuario) throws SQLException {
        PreparedStatement comandoSql = null;
        UsuarioTO usuarioTO = null;
        String sql = "INSERT INTO usuario (id, primeiro_nome, sobre_nome, email, cpf, senha, tipo) VALUES (?, ?, ?, ?, ?, ?, ?)";

        try {
            comandoSql = conexao.prepareStatement(sql);
            comandoSql.setLong(1, usuario.getId());
            comandoSql.setString(2, usuario.getPrimeiroNome());
            comandoSql.setString(3, usuario.getSobreNome());
            comandoSql.setString(4, usuario.getEmail());
            comandoSql.setString(5, usuario.getCpf());
            comandoSql.setString(6, usuario.getSenha());
            comandoSql.setString(7, usuario.getTipo());
            comandoSql.executeUpdate();

            usuarioTO = new UsuarioTO(usuario);

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

        return usuarioTO;
    }

    public UsuarioTO entrar(String email, String senha) throws SQLException {
        PreparedStatement comandoSql = null;
        ResultSet rs = null;
        UsuarioTO usuarioTO = null;
        String sql = "SELECT id, primeiro_nome, sobre_nome, email, cpf, tipo FROM usuario WHERE email = ? AND senha = ?";

        try {
            comandoSql = conexao.prepareStatement(sql);
            comandoSql.setString(1, email);
            comandoSql.setString(2, senha);
            rs = comandoSql.executeQuery();

            if (rs.next()) {
                usuarioTO = new UsuarioTO(
                        rs.getLong(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getString(4),
                        rs.getString(5),
                        rs.getString(6)
                );
            }

        } finally {
            try {
                if (rs != null) {
                    rs.close();
                }
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

        return usuarioTO;
    }

    public boolean mudarSenha(String senha, String cpf) throws SQLException{
        PreparedStatement comandoSql = null;
        boolean resultado = false;
        String sql = "UPDATE usuario SET senha = ? WHERE cpf = ?";

        try {
            comandoSql = conexao.prepareStatement(sql);
            comandoSql.setString(1, senha);
            comandoSql.setString(2, cpf);
            resultado = comandoSql.executeUpdate() == 1;

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

        return resultado;
    }

    public UsuarioTO consultar(String cpf) throws SQLException{
        PreparedStatement comandoSql = null;
        ResultSet rs = null;
        UsuarioTO usuarioTO = null;
        String sql = "SELECT * FROM usuario WHERE cpf = ?";

        try {
            comandoSql = conexao.prepareStatement(sql);
            comandoSql.setString(1, cpf);
            rs = comandoSql.executeQuery();

            if (rs.next()) {
                usuarioTO = new UsuarioTO(
                        rs.getLong(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getString(4),
                        rs.getString(5),
                        rs.getString(6)
                );
            }

        } finally {
            try {
                if (rs != null) {
                    rs.close();
                }
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

        return usuarioTO;
    }

}
