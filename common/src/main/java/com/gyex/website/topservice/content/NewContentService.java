package com.gyex.website.topservice.content;

import com.gyex.website.entity.Content;
import com.lscsoft.jfa.commons.exception.ServiceException;

/**
 * @author Created by Admin on 2016/7/6.
 * @copyright ${copyright}
 */
public interface NewContentService {

    Integer add(Content content) throws ServiceException;
}
