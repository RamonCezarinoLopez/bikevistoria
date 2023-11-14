package br.com.porto.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JSONUtils {

    private static final ObjectMapper mapper = new ObjectMapper();

    private JSONUtils() {}

    public static String paraJSON(Object obj) throws JsonProcessingException {
        return mapper.writeValueAsString(obj);
    }

    public static Object stringJsonParaObjeto(String json, Class<?> classe) throws JsonProcessingException {
        return mapper.readValue(json, classe);
    }
}
