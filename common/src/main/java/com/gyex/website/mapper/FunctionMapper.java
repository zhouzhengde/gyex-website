package com.gyex.website.mapper;

import com.gyex.website.entity.Function;

public interface FunctionMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Function record);

    int insertSelective(Function record);

    Function selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Function record);

    int updateByPrimaryKey(Function record);
}