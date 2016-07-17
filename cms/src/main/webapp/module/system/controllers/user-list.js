define([
    '../.md',
    'angular',
    'jquery',
    'underscore',
    '../controllers/user-add'
], function (md, ng, $, _) {

    md.controller('UserListCtrl', ['$scope', '$uibModal', 'UserService', '$pager', function ($scope, $uibModal, userService, $pager) {

        /**
         *  初始化分页对象
         */
        $scope.pager = $pager;

        /**
         * 加载列表数据
         */
        $scope.reload = function (pager, pageIndex) {
            if (!pager) {
                pager = $scope.pager;
            }
            pager = ng.copy(pager);
            pager.result = [];
            if (pageIndex) {
                pager.pageIndex = pageIndex;
            }
            userService.list(pager, function (data) {

                if (data.status == 200) {
                    $scope.pager = data.result;
                } else {
                    $.messager.popup("系统错误!");
                }
            });
        }
        $scope.reload();

        /**
         * 显示添加用户Dialog
         */
        $scope.doAddUserDialog = function () {

            $uibModal.open({
                controller: 'AddUserCtrl',
                templateUrl: "/module/system/views/user-add.html",
                size: 'md',
                resolve: {
                    /**
                     * 刷新列表
                     */
                    $refresh: function () {
                        return $scope.reload;
                    },
                    /**
                     * 重新打开
                     */
                    $reopen: function () {
                        return $scope.doAddUserDialog;
                    }
                }
            });
        };

        /**
         * 删除
         */
        $scope.doDel = function (user) {

            $.messager.confirm($.messager.model.title.info, "确定要删除用户【" + user.username + "】吗？", function () {

                userService.delete(user, function (data) {

                    if (data.status == 200) {
                        $.messager.popup("删除成功");
                        $scope.reload();
                    } else {
                        $.messager.popup("系统错误");
                    }
                });
            });
        };


        /**
         * 选择所有或取消全选
         */
        $scope.globalChecked = false;
        $scope.doCheckAll = function () {
            $scope.globalChecked = !$scope.globalChecked;
            _.each($scope.pager.result, function (user) {
                user.checked = $scope.globalChecked;
            });
        };

        /**
         * 批量删除
         */
        $scope.doBatchDel = function () {

            $.messager.confirm($.messager.model.title.info, "确定要批量删除用户吗？", function () {

                _.each($scope.pager.result, function (user) {
                    if (user.checked) {
                        userService.delete(user, function (data) {

                            if (data.status == 200) {
                                $.messager.popup("删除成功");
                                $scope.reload();
                                $scope.globalChecked = false;
                            } else {
                                $.messager.popup("系统错误");
                            }
                        });
                    }
                });
            });
        };
    }]);
});