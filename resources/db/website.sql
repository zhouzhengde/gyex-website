/*
Navicat MySQL Data Transfer

Source Server         : local 3306
Source Server Version : 50543
Source Host           : localhost:3306
Source Database       : website

Target Server Type    : MYSQL
Target Server Version : 50543
File Encoding         : 65001

Date: 2016-08-19 15:15:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for web_function
-- ----------------------------
DROP TABLE IF EXISTS `web_function`;
CREATE TABLE `web_function` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `name` varchar(64) DEFAULT NULL COMMENT '功能名，如：更新、新增、删除、查询',
  `alias` varchar(64) DEFAULT NULL COMMENT '功能别名，如：更新、新增、删除、查询',
  `method` varchar(64) DEFAULT NULL COMMENT '功能名，如：update、post、delete、get',
  `create_date` datetime DEFAULT NULL COMMENT '创建日期',
  `create_by` varchar(64) DEFAULT NULL COMMENT '创建者',
  `update_date` datetime DEFAULT NULL COMMENT '更新日期',
  `update_by` varchar(64) DEFAULT NULL COMMENT '更新者',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for web_group
-- ----------------------------
DROP TABLE IF EXISTS `web_group`;
CREATE TABLE `web_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(64) DEFAULT NULL COMMENT '组名',
  `parent_id` int(11) DEFAULT NULL COMMENT '父组ID',
  `create_date` datetime DEFAULT NULL COMMENT '创建日期',
  `create_by` varchar(64) DEFAULT NULL COMMENT '创建者',
  `update_date` datetime DEFAULT NULL COMMENT '更新日期',
  `update_by` varchar(64) DEFAULT NULL COMMENT '更新者',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for web_group_role
-- ----------------------------
DROP TABLE IF EXISTS `web_group_role`;
CREATE TABLE `web_group_role` (
  `group_id` int(11) NOT NULL COMMENT '组ID',
  `role_id` int(11) NOT NULL COMMENT '角色ID ',
  `create_date` datetime DEFAULT NULL COMMENT '创建日期',
  `create_by` varchar(64) DEFAULT NULL COMMENT '创建者',
  `update_date` datetime DEFAULT NULL COMMENT '更新日期',
  `update_by` varchar(64) DEFAULT NULL COMMENT '更新者',
  PRIMARY KEY (`role_id`,`group_id`),
  KEY `FK_WGR_GROUP_ID` (`group_id`),
  CONSTRAINT `FK_WGR_GROUP_ID` FOREIGN KEY (`group_id`) REFERENCES `web_group` (`id`),
  CONSTRAINT `FK_WGR_ROLE_ID` FOREIGN KEY (`role_id`) REFERENCES `web_role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for web_menu
-- ----------------------------
DROP TABLE IF EXISTS `web_menu`;
CREATE TABLE `web_menu` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '菜单主键',
  `name` varchar(64) DEFAULT '' COMMENT '菜单名称',
  `path` varchar(255) DEFAULT '#' COMMENT '菜单的路由PATH',
  `parent_id` int(11) DEFAULT NULL COMMENT '父菜单ID，0：为一级目录',
  `create_date` datetime DEFAULT NULL COMMENT '创建日期',
  `create_by` varchar(64) DEFAULT NULL COMMENT '创建者',
  `update_date` datetime DEFAULT NULL COMMENT '更新日期',
  `update_by` varchar(64) DEFAULT NULL COMMENT '更新者',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for web_product
-- ----------------------------
DROP TABLE IF EXISTS `web_product`;
CREATE TABLE `web_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(255) DEFAULT NULL COMMENT '产品名称',
  `images` varchar(255) DEFAULT NULL COMMENT '产品图片',
  `description` varchar(1000) DEFAULT NULL COMMENT '产品介绍',
  `create_date` datetime DEFAULT NULL COMMENT '创建日期',
  `create_by` varchar(64) DEFAULT NULL COMMENT '创建者',
  `update_date` datetime DEFAULT NULL COMMENT '更新日期',
  `update_by` varchar(64) DEFAULT NULL COMMENT '更新者',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for web_resource
-- ----------------------------
DROP TABLE IF EXISTS `web_resource`;
CREATE TABLE `web_resource` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `name` varchar(64) DEFAULT NULL COMMENT '资源名称，如：用户',
  `path` varchar(64) DEFAULT NULL COMMENT '资源根PATH，如：/user',
  `create_date` datetime DEFAULT NULL COMMENT '创建日期',
  `create_by` varchar(64) DEFAULT NULL COMMENT '创建者',
  `update_date` datetime DEFAULT NULL COMMENT '更新日期',
  `update_by` varchar(64) DEFAULT NULL COMMENT '更新者',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for web_role
-- ----------------------------
DROP TABLE IF EXISTS `web_role`;
CREATE TABLE `web_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '角色ID',
  `name` varchar(64) DEFAULT NULL COMMENT '角色名',
  `create_date` datetime DEFAULT NULL COMMENT '创建日期',
  `create_by` varchar(64) DEFAULT NULL COMMENT '创建者',
  `update_date` datetime DEFAULT NULL COMMENT '更新日期',
  `update_by` varchar(64) DEFAULT NULL COMMENT '更新者',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for web_role_menu
-- ----------------------------
DROP TABLE IF EXISTS `web_role_menu`;
CREATE TABLE `web_role_menu` (
  `role_id` int(11) NOT NULL COMMENT '角色ID',
  `menu_id` int(11) NOT NULL COMMENT '菜单ID',
  `create_date` datetime DEFAULT NULL COMMENT '创建日期',
  `create_by` varchar(64) DEFAULT NULL COMMENT '创建者',
  `update_date` datetime DEFAULT NULL COMMENT '更新日期',
  `update_by` varchar(64) DEFAULT NULL COMMENT '更新者',
  PRIMARY KEY (`role_id`,`menu_id`),
  KEY `FK_WRM_MENU_ID` (`menu_id`),
  CONSTRAINT `FK_WRM_MENU_ID` FOREIGN KEY (`menu_id`) REFERENCES `web_menu` (`id`),
  CONSTRAINT `FK_WRM_ROLE_ID` FOREIGN KEY (`role_id`) REFERENCES `web_role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for web_role_resource_func
-- ----------------------------
DROP TABLE IF EXISTS `web_role_resource_func`;
CREATE TABLE `web_role_resource_func` (
  `role_id` int(11) NOT NULL COMMENT '角色ID',
  `resource_id` int(11) NOT NULL COMMENT '资源ID',
  `function_id` int(11) NOT NULL COMMENT '操作功能ID',
  `create_date` datetime DEFAULT NULL COMMENT '创建日期',
  `create_by` varchar(64) DEFAULT NULL COMMENT '创建者',
  `update_date` datetime DEFAULT NULL COMMENT '更新日期',
  `update_by` varchar(64) DEFAULT NULL COMMENT '更新者',
  PRIMARY KEY (`role_id`,`resource_id`,`function_id`),
  KEY `FK_WRRF_RESOURCE_ID` (`resource_id`),
  KEY `FK_WRRF_FUNCTION_ID` (`function_id`),
  CONSTRAINT `FK_WRRF_FUNCTION_ID` FOREIGN KEY (`function_id`) REFERENCES `web_function` (`id`),
  CONSTRAINT `FK_WRRF_RESOURCE_ID` FOREIGN KEY (`resource_id`) REFERENCES `web_resource` (`id`),
  CONSTRAINT `FK_WRRF_ROLE_ID` FOREIGN KEY (`role_id`) REFERENCES `web_role` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for web_user
-- ----------------------------
DROP TABLE IF EXISTS `web_user`;
CREATE TABLE `web_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(64) DEFAULT NULL COMMENT '用户名',
  `realname` varchar(255) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL COMMENT '密码',
  `gender` tinyint(2) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `contact_info` text COMMENT '联系信息，JSON数据',
  `is_disabled` tinyint(2) DEFAULT NULL,
  `is_del` tinyint(1) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL COMMENT '创建日期',
  `create_by` varchar(64) DEFAULT NULL COMMENT '创建者',
  `update_date` datetime DEFAULT NULL COMMENT '更新日期',
  `update_by` varchar(64) DEFAULT NULL COMMENT '更新者',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for web_user_group
-- ----------------------------
DROP TABLE IF EXISTS `web_user_group`;
CREATE TABLE `web_user_group` (
  `user_id` int(11) NOT NULL COMMENT '用户ID',
  `group_id` int(11) NOT NULL COMMENT '组ID',
  `create_date` datetime DEFAULT NULL COMMENT '创建日期',
  `create_by` varchar(64) DEFAULT NULL COMMENT '创建者',
  `update_date` datetime DEFAULT NULL COMMENT '更新日期',
  `update_by` varchar(64) DEFAULT NULL COMMENT '更新者',
  PRIMARY KEY (`user_id`,`group_id`),
  KEY `FK_WUG_GROUP_ID` (`group_id`),
  CONSTRAINT `FK_WUG_GROUP_ID` FOREIGN KEY (`group_id`) REFERENCES `web_group` (`id`),
  CONSTRAINT `FK_WUG_USER_ID` FOREIGN KEY (`user_id`) REFERENCES `web_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
SET FOREIGN_KEY_CHECKS=1;
