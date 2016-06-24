/*
 * Copyright (c) 2016. Bond(China), java freestyle app
 */

package com.gyex.website.entity;

import java.io.Serializable;
import java.util.Date;

/**
 * Base Entity for commonly attributes
 */
public class BaseEntity implements Serializable{

    private Date createDate;

    private Date updateDate;

    private String createBy;

    private String updateBy;

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    public String getCreateBy() {
        return createBy;
    }

    public void setCreateBy(String createBy) {
        this.createBy = createBy;
    }

    public String getUpdateBy() {
        return updateBy;
    }

    public void setUpdateBy(String updateBy) {
        this.updateBy = updateBy;
    }
}
