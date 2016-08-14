package com.gyex.website.mapper;

import com.gyex.website.entity.GroupRole;
import com.gyex.website.entity.GroupRoleKey;

public interface GroupRoleMapper {
    int deleteByPrimaryKey(GroupRoleKey key);

    int insert(GroupRole record);

    int insertSelective(GroupRole record);

    GroupRole selectByPrimaryKey(GroupRoleKey key);

    int updateByPrimaryKeySelective(GroupRole record);

    int updateByPrimaryKey(GroupRole record);
}