define(['jquery', 'underscore', 'angular', 'treeview', '../.md'], function ($, _, ng, treeView, md) {

    md.directive('treeView', function () {

        return {
            template: '<ul></ul>',
            replace: false,
            restrict: 'AE',
            scope: {
                treeConf: '='
            },
            controller: function ($scope, $location) {

                $scope.doHref = function (href) {
                    location.href = href;
                };
            },

            link: function (scope, ele) {

                var treeView = {
                    data: [{
                        text: 'Default Parent',
                        selectable: false,
                        nodes: [
                            {
                                text: 'Default Child',
                                href: '#/'
                            },
                        ]
                    }],
                    onNodeSelected: function (e, node) {
                        if (node['href']) {
                            scope.doHref(node['href']);
                        }
                    }
                };

                ng.extend(treeView, scope.treeConf);

                var tree = $(ele).treeview(scope.treeConf);

                if ($.isFunction(scope.treeConf.init)) {
                    scope.treeConf.init(tree);
                }
            }
        };
    });
});