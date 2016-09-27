package com.gyex.website;

import org.apache.catalina.Context;
import org.apache.catalina.startup.Tomcat;
import org.apache.tomcat.jdbc.pool.DataSource;
import org.apache.tomcat.util.descriptor.web.ContextResource;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.embedded.tomcat.TomcatEmbeddedServletContainer;
import org.springframework.boot.context.embedded.tomcat.TomcatEmbeddedServletContainerFactory;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.jndi.JndiObjectFactoryBean;

import javax.enterprise.concurrent.ManagedExecutorService;
import javax.naming.NamingException;

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

    /*@Bean
    public TomcatEmbeddedServletContainerFactory tomcatFactory() {

        return new TomcatEmbeddedServletContainerFactory() {

            @Override
            protected TomcatEmbeddedServletContainer getTomcatEmbeddedServletContainer(Tomcat tomcat) {
                tomcat.enableNaming();
                return super.getTomcatEmbeddedServletContainer(tomcat);
            }

            @Override
            protected void postProcessContext(Context context) {

                ContextResource resource = new ContextResource();
                resource.setName("java:comp/env/concurrent/executor");
                resource.setType(ManagedExecutorService.class.getName());
                context.getNamingResources().addResource(resource);
            }
        };
    }

    @Bean
    public ManagedExecutorService jndiExecutor() throws IllegalArgumentException, NamingException {

        JndiObjectFactoryBean bean = new JndiObjectFactoryBean();
        bean.setJndiName("java:comp/env/concurrent/executor");
        bean.setProxyInterface(ManagedExecutorService.class);
        bean.setLookupOnStartup(true);
        //bean.afterPropertiesSet();
        return (ManagedExecutorService) bean.getObject();
    }*/
}