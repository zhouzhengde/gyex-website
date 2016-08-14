package com.gyex.website.topservice.user.impl;

import com.gyex.website.ApplicationRunner;
import com.gyex.website.entity.Pager;
import com.gyex.website.entity.User;
import com.gyex.website.topservice.user.PagingUserService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 * @author Created by Admin on 2016/7/6.
 * @copyright ${copyright}
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = ApplicationRunner.class)
public class PagingUserServiceImplTest {

    @Autowired
    private PagingUserService pagingUserService;

    @Test
    public void testPaging() throws Exception {


        Pager<User> pager = new Pager<User>();

        pager.setPageSize(2);

        pager = pagingUserService.paging(pager);

        Assert.assertNotNull(pager.getResult());

        Assert.assertEquals(2, pager.getResult().size());

    }
}