package com.gyex.website;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;

/**
 * @author Created by Admin on 2016/7/5.
 * @copyright ${copyright}
 */

@SpringBootApplication
@ComponentScan(
        basePackages = {"com.gyex.website"}
)
public class ApplicationRunner extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(ApplicationRunner.class, args);
    }
}