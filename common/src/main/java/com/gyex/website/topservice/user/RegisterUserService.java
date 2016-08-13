package com.gyex.website.topservice.user;

import com.gyex.website.entity.User;
import com.lscsoft.jfa.commons.exception.ServiceException;

/**
 * @author Created by Admin on 2016/7/6.
 * @copyright ${copyright}
 */
public interface RegisterUserService {

    Integer register(User user) throws ServiceException;
}
