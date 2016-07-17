package com.gyex.website.util;

import org.apache.commons.codec.binary.Base64;

import java.nio.charset.Charset;

/**
 * @author Created by Admin on 2016/7/6.
 * @copyright ${copyright}
 */
public final class PasswordCoder {

    /**
     * 默认密钥
     */
    private static final String DEFAULT_KEY = "Cxo3IhxN0+IP3sX9qULbcQ==";

    private PasswordCoder() {
    }

    /**
     * 加密
     *
     * @param password
     * @return
     */
    public static String encrypt(String password) {

        byte[] bts = AESCoder.encrypt(Base64.decodeBase64(password), DEFAULT_KEY);
        // 考虑到密码安全性，做完对称加密，需要进一步摘要处理，将其变为不可逆
        return AESCoder.shaHex(Base64.encodeBase64String(bts).getBytes());
    }

}
