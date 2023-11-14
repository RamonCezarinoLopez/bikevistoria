package br.com.porto.util;

import javax.ws.rs.core.Response;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

public class RequisicaoUtils {

    private RequisicaoUtils () { }

    public static String extrairCorpoDaRequisicao(InputStream is) throws IOException{

        String json = null;

        try (BufferedReader reader = new BufferedReader(new InputStreamReader(is))) {
            StringBuilder stringBuilder = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                stringBuilder.append(line);
            }

            json = stringBuilder.toString();
        }

        return json;
    }

}
