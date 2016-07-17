package com.gyex.website.util;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.codec.digest.DigestUtils;
import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.security.Key;
import java.security.Security;

/**
 * AES安全编码通用组件工具
 *
 * @author 周正德
 * @version 1.0
 */
public final class AESCoder {

    private static final Logger LOGGER = LoggerFactory.getLogger(AESCoder.class);

    private AESCoder() {

    }

    static {
        try {
            Security.addProvider(new BouncyCastleProvider());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 密钥算法名
     */
    public static final String KEY_ALGORITHM = "AES";

    /**
     * 加密/解密算法 / 工作模式 / 填充方式 Java 7支持PKCS5PADDEING
     */
    public static final String CIPHER_ALGORITHM = "AES/ECB/PKCS7Padding";

    /**
     * 转换密钥
     *
     * @param key 二进制密钥
     * @return Key 加密的密钥
     * @throws Exception
     */
    private static Key toKey(byte[] key) {
        SecretKey secretKey = new SecretKeySpec(key, KEY_ALGORITHM);
        return secretKey;
    }

    /**
     * 解密
     *
     * @param data 等解密数据
     * @param key  密钥
     * @return byte[] 解密的数据
     * @throws Exception
     */
    public static byte[] decrypt(byte[] data, byte[] key) {
        try {
            Key k = toKey(key);
            Cipher cipher = Cipher.getInstance(CIPHER_ALGORITHM, "BC");
            cipher.init(Cipher.DECRYPT_MODE, k);
            return cipher.doFinal(data);
        } catch (Exception e) {
            LOGGER.error("[加密/解密]", e);
            return null;
        }
    }

    /**
     * 加密
     *
     * @param data 等加密数据
     * @param key  密钥
     * @return byte[] 加密后的数据
     * @throws Exception
     */
    public static byte[] encrypt(byte[] data, byte[] key) {
        try {
            Key k = toKey(key);
            Cipher cipher = Cipher.getInstance(CIPHER_ALGORITHM);
            cipher.init(Cipher.ENCRYPT_MODE, k);
            return cipher.doFinal(data);
        } catch (Exception e) {
            LOGGER.error("[加密/解密]", e);
            return null;
        }
    }

    /**
     * 生成密钥
     *
     * @return byte[] 二进制密钥
     * @throws Exception
     */
    public static byte[] initKey() {
        try {
            KeyGenerator kg = KeyGenerator.getInstance(KEY_ALGORITHM);
            kg.init(128);
            SecretKey secretKey = kg.generateKey();
            return secretKey.getEncoded();

        } catch (Exception e) {
            LOGGER.error("[生成密钥]", e);
            return null;
        }
    }

    /**
     * 初始化密钥
     *
     * @return
     * @throws Exception
     */
    public static String initKeyString() {
        return Base64.encodeBase64String(initKey());
    }

    /**
     * 获取密钥
     *
     * @param key
     * @return
     * @throws Exception
     */
    public static byte[] getKey(String key) {
        return Base64.decodeBase64(key);
    }

    /**
     * 解密
     *
     * @param data
     * @param key
     * @return
     * @throws Exception
     */
    public static byte[] decrypt(byte[] data, String key) {
        return decrypt(data, getKey(key));
    }

    /**
     * 加密
     *
     * @param data
     * @param key
     * @return
     * @throws Exception
     */
    public static byte[] encrypt(byte[] data, String key) {
        return encrypt(data, getKey(key));
    }

    /**
     * 摘要处理
     *
     * @param data
     * @return
     */
    public static String shaHex(byte[] data) {
        return DigestUtils.md5Hex(data);
    }

    /**
     * 验证
     *
     * @param data
     * @param messageDigest
     * @return
     */
    public static boolean validate(byte[] data, String messageDigest) {
        return messageDigest.equals(shaHex(data));
    }
}
