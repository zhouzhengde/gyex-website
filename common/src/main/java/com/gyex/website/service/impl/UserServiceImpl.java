package com.gyex.website.service.impl;

import com.gyex.website.entity.User;
import com.gyex.website.mapper.UserMapper;
import com.gyex.website.service.UserService;
import com.gyex.website.util.$;
import com.jfa.commons.exception.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Created by Bond(China) on 2016/7/5.
 * @copyright ${copyright}
 */
@Service("userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    public Integer save(User user) throws ServiceException {
        return userMapper.insertSelective(user);
    }

    public Integer save(User user, boolean isCover) throws ServiceException {
        if (isCover) {
            return userMapper.insert(user);
        } else {
            return userMapper.insertSelective(user);
        }
    }

    public User get(User user) throws ServiceException {
        return userMapper.selectOneBy(user);
    }

    public Integer delete(User user) throws ServiceException {
        if ($.isNull(user.getId())) {
            throw new ServiceException("[user][delete] 不能NULL ID方式删除数据", new IllegalArgumentException());
        }
        return userMapper.deleteByPrimaryKey(user.getId());
    }

    public Integer delete(User user, boolean isReal) throws ServiceException {

        if ($.isNull(user.getId())) {
            throw new ServiceException("[user][delete] 不能NULL ID方式删除数据", new IllegalArgumentException());
        }

        if (isReal) {
            return userMapper.deleteRealByPrimaryKey(user.getId());
        } else {
            return userMapper.deleteByPrimaryKey(user.getId());
        }
    }

    public Integer update(User user) throws ServiceException {
        if ($.isNull(user.getId())) {
            throw new ServiceException("[user][delete] 不能NULL ID方式更新数据", new IllegalArgumentException());
        }
        return userMapper.updateByPrimaryKeySelective(user);
    }

    public Integer update(User user, boolean isCover) throws ServiceException {
        if ($.isNull(user.getId())) {
            throw new ServiceException("[user][delete] 不能NULL ID方式更新数据", new IllegalArgumentException());
        }
        if (isCover) {
            return userMapper.updateByPrimaryKey(user);
        } else {
            return userMapper.updateByPrimaryKey(user);
        }
    }

    public List<User> find(User user) throws ServiceException {
        return userMapper.selectListBy(user);
    }

    public Integer count(User user) throws ServiceException {
        return  userMapper.count(user);
    }
}
