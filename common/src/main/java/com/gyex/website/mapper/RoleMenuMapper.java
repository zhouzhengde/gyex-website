package com.gyex.website.mapper;

import com.gyex.website.entity.RoleMenu;
import com.gyex.website.entity.RoleMenuKey;

public interface RoleMenuMapper {
    int deleteByPrimaryKey(RoleMenuKey key);

    int insert(RoleMenu record);

    int insertSelective(RoleMenu record);

    RoleMenu selectByPrimaryKey(RoleMenuKey key);

    int updateByPrimaryKeySelective(RoleMenu record);

    int updateByPrimaryKey(RoleMenu record);
}