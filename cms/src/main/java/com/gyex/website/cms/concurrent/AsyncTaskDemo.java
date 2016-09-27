package com.gyex.website.cms.concurrent;

import com.lscsoft.jfa.commons.common.BaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.enterprise.concurrent.ManagedExecutorService;
import javax.naming.InitialContext;
import javax.naming.NamingException;

import java.util.Map;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;

/**
 * Created by Bond(China) on 2016/9/26.
 */
@RestController
@RequestMapping("async")
public class AsyncTaskDemo extends BaseController {

    //@Resource(lookup = "java:comp/env/concurrent/executor")
    ManagedExecutorService executorService;

    @RequestMapping(value = "/demo", method = RequestMethod.GET)
    public Map<String, Object> demo() throws NamingException {

        put(this.run());
        return success();
    }


    public Object run() throws NamingException {

        executorService = (ManagedExecutorService) new InitialContext().lookup("java:comp/env/concurrent/executor");

        Future<Integer> future = executorService.submit(new Callable<Integer>() {

            public Integer call() throws Exception {

                Thread.sleep(1000 * 60L);
                return 2;
            }

        });

        try {
            return future.get();
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        }

        return null;
    }
}
