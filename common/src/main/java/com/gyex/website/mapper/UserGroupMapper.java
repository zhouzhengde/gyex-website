package com.gyex.website.mapper;

import com.gyex.website.entity.UserGroup;
import com.gyex.website.entity.UserGroupKey;

public interface UserGroupMapper {
    int deleteByPrimaryKey(UserGroupKey key);

    int insert(UserGroup record);

    int insertSelective(UserGroup record);

    UserGroup selectByPrimaryKey(UserGroupKey key);

    int updateByPrimaryKeySelective(UserGroup record);

    int updateByPrimaryKey(UserGroup record);
}