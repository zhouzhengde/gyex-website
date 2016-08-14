package com.gyex.website.mapper;

import com.gyex.website.entity.RoleResourceFunc;
import com.gyex.website.entity.RoleResourceFuncKey;

public interface RoleResourceFuncMapper {
    int deleteByPrimaryKey(RoleResourceFuncKey key);

    int insert(RoleResourceFunc record);

    int insertSelective(RoleResourceFunc record);

    RoleResourceFunc selectByPrimaryKey(RoleResourceFuncKey key);

    int updateByPrimaryKeySelective(RoleResourceFunc record);

    int updateByPrimaryKey(RoleResourceFunc record);
}