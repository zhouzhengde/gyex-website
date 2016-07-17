package com.gyex.website.util;

import org.apache.commons.lang.StringUtils;

/**
 * @author Created by Admin on 2016/7/6.
 * @copyright ${copyright}
 */
public final class $ {

    private $() {
    }

    /**
     * 判断是否为空
     *
     * @param object
     * @return
     */
    public static boolean isNull(Object object) {
        return object == null;
    }

    /**
     * 判断是否为空
     *
     * @param object
     * @return
     */
    public static boolean isEmpty(String object) {
        return StringUtils.isEmpty(object);
    }

    /**
     * 是否相等
     *
     * @param v1
     * @param v2
     * @return
     */
    public static boolean isEqual(Integer v1, Integer v2) {

        if (isNull(v1) || isNull(v2)) {
            return false;
        }
        return v1 == v2;
    }

    /**
     * 是否相等
     *
     * @param v1
     * @param v2
     * @return
     */
    public static boolean isEqual(Long v1, Long v2) {

        if (isNull(v1) || isNull(v2)) {
            return false;
        }
        return v1 == v2;
    }

    /**
     * 是否相等
     *
     * @param v1
     * @param v2
     * @return
     */
    public static boolean isEqual(String v1, String v2) {

        if (isNull(v1) || isNull(v2)) {
            return false;
        }
        return v1.equals(v2);
    }
}
