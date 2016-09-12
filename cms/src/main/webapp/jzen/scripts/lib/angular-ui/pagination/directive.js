
define(['jquery',
    'underscore',
    'angular',
    '../.md',
    'text!ui/pagination/tpl.html'
], function ($, _, ng, md, html) {

    md.directive('pagination', function () {

        return {
            template: html,
            replace: false,
            restrict: 'AE',
            scope: {
                ngPager: '=',
                ngCallback: '&'
            },
            controller: function ($scope, $pager) {

                $scope.ngPager = $scope.ngPager || $pager;
                /**
                 * 数字块数
                 * @type {number}
                 */
                $scope.blockNum = 5;

                /**
                 * 绑定页
                 * @type {number|*}
                 */
                $scope.inputIndex = $scope.ngPager.pageIndex;

                /**
                 * 跳转页数
                 * @param index
                 */
                $scope.doGo = function (index) {

                    index = index || $scope.inputIndex;
                    if (/^\d+$/.test(index)) {

                        if (index > $scope.ngPager.last) {
                            index = $scope.ngPager.last;
                        }

                        $scope.ngPager.pageIndex = index;
                        $scope.inputIndex = index;
                        $scope.calcPages(parseInt(index));

                        if ($.isFunction($scope.ngCallback)) {
                            $scope.ngCallback.apply(this, [$scope.ngPager]);
                        } else {
                            $.messager.alert($.messager.model.title.info || "提示", "系统错误");
                        }
                    } else {
                        $.messager.alert($.messager.model.title.info || "提示", "请输入整数值");
                    }
                };

                /**
                 * 设置可显示页数,至多不超过5
                 */
                $scope.pages = [];
                $scope.calcPages = function (index) {

                    var i = parseInt(index / $scope.blockNum) * $scope.blockNum;

                    i = index % $scope.blockNum == 0 ? i - $scope.blockNum + 1 : i + 1;

                    $scope.pages = [];
                    for (var j = 0; i <= $scope.ngPager.last; i++) {

                        if (j >= $scope.blockNum) {
                            break;
                        }

                        if (i > 0) {
                            $scope.pages.push(i);
                            j++;
                        }
                    }
                };
                $scope.calcPages($scope.ngPager.pageIndex);

                /**
                 *  监控Pager对象改变
                 */
                $scope.$watch('ngPager', function (oldVal, newVal) {

                    $scope.calcPages($scope.ngPager.pageIndex);
                    $scope.inputIndex = $scope.ngPager.pageIndex;
                });
            },

            link: function (scope, ele) {
                // Todo
            }
        };
    });
});