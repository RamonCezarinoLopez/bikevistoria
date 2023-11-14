package br.com.porto.dao;

import br.com.porto.model.Bicicleta;
import br.com.porto.to.BicicletaTO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class BicicletaDAO {

    private Connection conexao;

    public BicicletaDAO(Connection conexao) {
        this.conexao = conexao;
    }

    public BicicletaTO criar(Bicicleta bicicleta) throws SQLException{

        PreparedStatement comandoSql = null;
        String sql = "INSERT INTO bicicleta (id, nota_fiscal, marca, modelo, tamanho_quadro, numero_serie, tipo, cor, acessorios) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try {
            comandoSql = conexao.prepareStatement(sql);
            comandoSql.setLong(1, bicicleta.getId());
            comandoSql.setString(2, bicicleta.getNotaFiscal());
            comandoSql.setString(3, bicicleta.getMarca());
            comandoSql.setString(4, bicicleta.getModelo());
            comandoSql.setString(5, bicicleta.getTamanhoQuadro());
            comandoSql.setString(6, bicicleta.getNumeroSerie());
            comandoSql.setString(7, bicicleta.getTipo());
            comandoSql.setString(8, bicicleta.getCor());
            comandoSql.setString(9, bicicleta.getAcessorios());
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

        return new BicicletaTO(bicicleta);
    }

    public boolean deletar(Long id) {

        PreparedStatement comandoSql = null;
        Boolean resultado = false;
        String sql = "DELETE FROM bicicleta WHERE id = ?";

        try {
            comandoSql = conexao.prepareStatement(sql);
            comandoSql.setLong(1, id);
            resultado = comandoSql.executeUpdate() == 1;

        } catch(SQLException e){
            e.printStackTrace();

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

            return resultado;
        }
    }

    //TODO: implementar atualização de observação
    public void atualizarObservacoes() {

    }

    public BicicletaTO consultarBicicleta(Long id) throws SQLException{
        PreparedStatement comandoSql = null;
        ResultSet rs = null;
        BicicletaTO bicicleta = null;
        String sql = "SELECT * FROM bicicleta WHERE id = ?";

        try {
            comandoSql = conexao.prepareStatement(sql);
            comandoSql.setLong(1, id);
            rs = comandoSql.executeQuery();

            if (rs.next()) {
                bicicleta = new BicicletaTO(
                        rs.getLong(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getString(4),
                        rs.getString(5),
                        rs.getString(6),
                        rs.getString(7),
                        rs.getString(8),
                        rs.getString(9)
                );
            }

            return bicicleta;

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
    }

}
