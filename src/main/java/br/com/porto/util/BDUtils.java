package br.com.porto.util;

import com.fasterxml.jackson.core.JsonProcessingException;

import java.util.UUID;

public class BDUtils {

    private BDUtils() {}

    public static Long gerarID()  {
        return Math.abs(UUID.randomUUID().getMostSignificantBits());
    }

}
