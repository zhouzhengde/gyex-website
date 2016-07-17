/*
 * Copyright (c) 2016. Bond(China), java freestyle app
 */

package com.gyex.website.entity;

import java.io.Serializable;
import java.util.Date;

/**
 * Base Entity for commonly attributes
 */
public class BaseEntity implements Serializable {

    private int startIndex;

    /*private int endIndex;*/

    private int pageSize;

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public int getStartIndex() {
        return startIndex;
    }

    public void setStartIndex(int startIndex) {
        this.startIndex = startIndex;
    }

    /*public int getEndIndex() {
        return endIndex;
    }

    public void setEndIndex(int endIndex) {
        this.endIndex = endIndex;
    }*/
}
