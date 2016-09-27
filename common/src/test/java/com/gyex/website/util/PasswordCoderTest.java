package com.gyex.website.util;

import com.lscsoft.jfa.commons.util.PasswordCoder;
import org.junit.Assert;
import org.junit.Test;

import static org.junit.Assert.*;

/**
 * @author Created by Admin on 2016/7/6.
 * @copyright ${copyright}
 */
public class PasswordCoderTest {

    @Test
    public void testEncrypt() throws Exception {

        String key = PasswordCoder.encrypt("1111");
        Assert.assertNotNull(key);

    }
}