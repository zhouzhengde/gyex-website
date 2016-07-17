define([
    '../.md',
    'angular',
    'jquery',
    'underscore'
], function (md, ng, $, _) {

    md.controller('AddUserCtrl', ['$scope', '$uibModalInstance', 'UserService', '$refresh', '$reopen', function ($scope, $uibModalInstance, userService, $refresh, $reopen) {

        $scope.user = {
            gender: 0
        }


        /**
         * 保存
         */
        $scope.save = function () {

            userService.add($scope.user, function (data) {


                if (data.status == 200) {

                    $scope.close();
                    var conf = $.messager.model;
                    $('<div> 添加用户成功！是否继续添加？</div>').dialog({
                        title: "提示",
                        onClose: function () {
                            $(this).dialog("destroy");
                        },
                        buttons: [
                            {
                                text: conf.ok.text,
                                classed: conf.ok.classed || "btn-success",
                                click: function () {

                                    $(this).dialog("destroy");
                                    $reopen.apply();
                                    $refresh.apply();
                                }
                            }, {
                                text: conf.cancel.text,
                                classed: conf.cancel.classed || "btn-danger",
                                click: function () {

                                    $(this).dialog("destroy");
                                    $refresh.apply();
                                }
                            }
                        ]
                    });
                } else {
                    $.messager.popup(data.message || "系统错误");
                }
            });
        };

        /**
         * 关闭对话框
         */
        $scope.close = function () {

            $uibModalInstance.close();
        };

    }]);
});