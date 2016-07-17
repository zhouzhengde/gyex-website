package com.gyex.website.topservice.user.impl;

import com.gyex.website.ApplicationRunner;
import com.gyex.website.entity.User;
import com.gyex.website.service.UserService;
import com.gyex.website.topservice.user.RegisterUserService;
import com.jfa.commons.util.DateUtils;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;

/**
 * @author Created by Admin on 2016/7/6.
 * @copyright ${copyright}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = ApplicationRunner.class)
public class RegisterUserServiceImplTest {

    @Resource
    private UserService userService;

    @Resource
    private RegisterUserService registerUserService;


    @Test(expected = IllegalArgumentException.class)
    public void testRegister() throws Exception {

        User user = new User();
        user.setId(44);
        user.setUsername("ba23434343");
        user.setRealname("Bond");
        user.setBirthday(DateUtils.parse("1989-08-12", "yyyy-MM-dd"));
        user.setGender(0);
        user.setPassword("000000");

        registerUserService.register(user);

        user = new User();
        user.setId(44);
        user.setUsername("ba23434343");
        user.setRealname("Bond");
        user.setBirthday(DateUtils.parse("1989-08-12", "yyyy-MM-dd"));
        user.setGender(0);
        user.setPassword("000000");

        registerUserService.register(user);
    }
}