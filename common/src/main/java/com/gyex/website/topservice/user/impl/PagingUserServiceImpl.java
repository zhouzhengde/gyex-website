package com.gyex.website.topservice.user.impl;

import com.gyex.website.entity.Pager;
import com.gyex.website.entity.User;
import com.gyex.website.service.UserService;
import com.gyex.website.topservice.user.PagingUserService;
import com.gyex.website.util.$;
import com.lscsoft.jfa.commons.exception.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Created by Admin on 2016/7/6.
 * @copyright ${copyright}
 */
@Service("pagingUserService")
public class PagingUserServiceImpl implements PagingUserService {

    @Autowired
    private UserService userService;

    public Pager<User> paging(Pager<User> pager) throws ServiceException {

        // 条件对象不能为空
        if ($.isNull(pager.getCondition())) {
            pager.setCondition(new User());
        }

        // 禁止密码列表查询，防止
        pager.getCondition().setPassword(null);

        int total = userService.count(pager.getCondition());

        return pager.pagingQuery(total, new Pager.Callback<User>() {

            public List<User> query(User user) throws ServiceException {
                return userService.find(user);
            }
        });
    }
}
