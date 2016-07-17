package com.gyex.website.topservice.user.impl;

import com.gyex.website.entity.User;
import com.gyex.website.service.UserService;
import com.gyex.website.topservice.user.RegisterUserService;
import com.gyex.website.util.$;
import com.jfa.commons.exception.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

/**
 * @author Created by Admin on 2016/7/6.
 * @copyright ${copyright}
 */
@Service("registerUserService")
public class RegisterUserServiceImpl implements RegisterUserService {

    @Autowired
    private UserService userService;

    public Integer register(User user) throws ServiceException {

        if ($.isEmpty(user.getUsername())) {
            throw new IllegalArgumentException("用户名为空");
        }

        User tUser = new User();
        tUser.setUsername(user.getUsername());
        tUser = userService.get(tUser);

        if (!$.isNull(tUser)) {
            throw new IllegalArgumentException("用户名已经占用");
        }

        // 防止ID篡改
        user.setId(null);
        user.setCreateDate(new Date());
        return userService.save(user);
    }
}
