package com.gyex.website.service;

import com.gyex.website.entity.User;
import com.jfa.commons.exception.ServiceException;

import java.util.List;

/**
 * @author Created by Bond(China) on 2016/7/5.
 * @copyright ${copyright}
 */
public interface UserService {

    /**
     * 保存用户信息
     *
     * @param user
     * @param isCover true：不管理是有值，均插入，会以NULL值覆盖默认
     * @return
     * @throws ServiceException
     */
    Integer save(User user, boolean isCover) throws ServiceException;

    /**
     * 保存用户信息, 不插入NULL，不会覆盖默认值
     *
     * @param user
     * @return
     * @throws ServiceException
     */
    Integer save(User user) throws ServiceException;

    /**
     * 查询用户信息，主要可以根据id, username, password
     *
     * @param user
     * @return
     * @throws ServiceException
     */
    User get(User user) throws ServiceException;

    /**
     * 非物理删除用户
     *
     * @param user
     * @return
     * @throws ServiceException
     */
    Integer delete(User user) throws ServiceException;

    /**
     * 删除用户
     *
     * @param user
     * @param isReal 是否为物理删除
     * @return
     * @throws ServiceException
     */
    Integer delete(User user, boolean isReal) throws ServiceException;

    /**
     * 更新用户信息, 对NULL值不做操作，不以NULL值覆盖
     *
     * @param user
     * @return
     * @throws ServiceException
     */
    Integer update(User user) throws ServiceException;

    /**
     * 更新用户信息,
     *
     * @param user
     * @param isCover true：不管理是有值，均插入，会以NULL值覆盖默认
     * @return
     * @throws ServiceException
     */
    Integer update(User user, boolean isCover) throws ServiceException;

    /**
     * @param user
     * @return
     * @throws ServiceException
     */
    List<User> find(User user) throws ServiceException;

    /**
     * 根据查询条件做统计
     * @param user
     * @return
     * @throws ServiceException
     */
    Integer count(User user) throws  ServiceException;

}
