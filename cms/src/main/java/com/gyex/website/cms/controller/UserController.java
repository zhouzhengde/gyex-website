package com.gyex.website.cms.controller;

import com.gyex.website.entity.Pager;
import com.gyex.website.entity.User;
import com.gyex.website.service.UserService;
import com.gyex.website.topservice.user.PagingUserService;
import com.gyex.website.topservice.user.RegisterUserService;
import com.gyex.website.util.$;
import com.jfa.commons.common.BaseController;
import com.jfa.commons.exception.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

/**
 * @author Created by Bond(China) on 2016/7/5.
 * @copyright ${copyright}
 */
@RestController
@RequestMapping("user")
public class UserController extends BaseController {

    @Autowired
    private UserService userService;

    @Autowired
    private PagingUserService pagingUserService;

    @Autowired
    private RegisterUserService registerUserService;

    @RequestMapping(method = RequestMethod.POST)
    public Map<String, Object> save(@RequestBody User user) throws ServiceException {

        return success(registerUserService.register(user));
    }

    @RequestMapping(value = "{id}", method = RequestMethod.GET)
    public Map<String, Object> get(@PathVariable Integer id) throws ServiceException {

        if ($.isNull(id)) {
            return failure("参数不正确", new IllegalArgumentException());
        }

        User user = new User();
        user.setId(id);
        return success(userService.get(user));
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public Map<String, Object> delete(@PathVariable Integer id) throws ServiceException {

        if ($.isNull(id)) {
            return failure("参数不正确", new IllegalArgumentException());
        }

        User user = new User();
        user.setId(id);
        return success(userService.delete(user));
    }

    @RequestMapping(value = "list", method = RequestMethod.POST)
    public Map<String, Object> list(@RequestBody Pager<User> pager) throws ServiceException {

        return success(pagingUserService.paging(pager));
    }
}
