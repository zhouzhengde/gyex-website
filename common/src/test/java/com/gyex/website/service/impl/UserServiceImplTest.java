package com.gyex.website.service.impl;

import com.gyex.website.ApplicationRunner;
import com.gyex.website.entity.User;
import com.gyex.website.service.UserService;
import com.gyex.website.util.$;
import com.lscsoft.jfa.commons.util.DateUtils;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author Created by Admin on 2016/7/5.
 * @copyright ${copyright}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = ApplicationRunner.class)
public class UserServiceImplTest {

    @Resource
    private UserService userService;

    @Test
    public void testSave() throws Exception {

        User user = new User();
        user.setId(22);
        user.setUsername("Bond Zhou");
        user.setRealname("周正德");
        user.setBirthday(DateUtils.parse("1989-08-12", "yyyy-MM-dd"));
        user.setGender(0);
        user.setPassword("000000");

        User tUser = new User();
        tUser.setId(user.getId());

        tUser = userService.get(tUser);
        if ($.isNull(tUser)) {
            // 不以NULL值覆盖插入
            userService.save(user);
        } else {
            // 物理删除用户
            userService.delete(user, true);
            userService.save(user);
        }

        user = new User();
        user.setId(23);
        user.setUsername("Bond Zhou2");
        user.setRealname("周正德");
        user.setBirthday(DateUtils.parse("1989-08-14", "yyyy-MM-dd"));
        user.setGender(0);
        user.setPassword("000000");


        tUser = new User();
        tUser.setId(user.getId());
        tUser = userService.get(tUser);
        if ($.isNull(tUser)) {
            // 以NULL覆盖插入
            userService.save(user, true);
        } else {
            // 删除
            userService.delete(user, true);
            userService.save(user, true);
        }

        user = new User();
        user.setId(22);

        user = userService.get(user);
        Assert.assertNotNull(user);
        Assert.assertEquals("周正德", user.getRealname());

        user = new User();
        user.setUsername("Bond Zhou");
        List<User> list = userService.find(user);
        Assert.assertNotNull(list);

        user = new User();
        user.setId(23);
        user.setUsername("Jake");
        user.setPassword("111111");
        // 不以NULL值覆盖更新
        userService.update(user);
        Assert.assertEquals("周正德", userService.get(user).getRealname());

        userService.update(user, true);
        Assert.assertNull(userService.get(user).getRealname());

        // 物理删除
        user.setId(23);
        userService.delete(user, true);
        user.setId(22);
        userService.delete(user, true);
    }
}