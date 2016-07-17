define(['jquery',
    'underscore',
    'angular',
    'treeview',
    '../.md',
    'text!ui/listmenu/tpl.html'
], function ($, _, ng, treeView, md, html) {

    md.directive('listMenu', function () {

        return {
            replace: false,
            restrict: 'AE',
            scope: {
                listMenuConf: '='
            },
            controller: function ($scope) {

                $scope.doHref = function (href) {
                    location.href = href;
                };
            },

            link: function (scope, ele) {

                var defaultConf = {
                    animateTime: 400,
                    onNodeSelected: function (e, node) {
                        //console.log("default event!");
                    },
                    onUnNodeSelected: function (e, node) {
                        //console.log("default event!");
                    }
                };

                ObjectUtils.merge(scope.listMenuConf, defaultConf);

                var root = function (data) {
                    var $ul = $(html);
                    var li = $ul.html().toString();
                    for (var i = 0; i < data.length; i++) {
                        var item = data[i];
                        var href = item.href || '#';
                        var $li = $(li.replace("#href", (href)).replace("#text", item.text)).appendTo($ul);
                        if (item.nodes && item.nodes.length > 0) {
                            $li.append(root(item.nodes)).children("p").on('click', function (e) {
                                if ($(this).hasClass("active")) {
                                    $(this).siblings().slideUp(scope.listMenuConf['animateTime']);
                                    scope.listMenuConf.onUnNodeSelected(e, item);
                                } else {
                                    $(this).siblings().slideDown(scope.listMenuConf['animateTime']);
                                    scope.listMenuConf.onNodeSelected(e, item);
                                }
                                $(this).toggleClass("active");
                            });
                        } else {
                            $li.addClass("leaf").find("span:last-child").removeClass("menu-arrow").addClass("menu-leaf");
                            $li.children("p").on('click', function (e) {
                                //if (!$(this).hasClass("active")) {
                                var $all = $(this).parents('.menu').find(".menu-item");
                                for (var i = 0; i < $all.length; i++) {
                                    if ($all.eq(i).has(this).length == 0) {
                                        $all.eq(i).children('p').removeClass("active").siblings("ul").slideUp(scope.listMenuConf['animateTime']);
                                    } else {
                                        var $p = $all.eq(i).children('p').eq(0);
                                        if (!$p.hasClass("active") && !$all.eq(i).hasClass("leaf")) {
                                            $p.trigger("click");
                                        }
                                    }
                                }
                                $(this).addClass("active");
                                /*没有返回值使用默认跳转*/
                                if (!scope.listMenuConf.onNodeSelected(e, item)) {
                                    location.href = $(this).find('span[class=text]').attr("data-href");
                                }
                                /*} else {
                                 $(this).removeClass("active").trigger("click");
                                 scope.listMenuConf.onUnNodeSelected(e, item);
                                 }*/
                            });
                        }
                    }
                    $ul.children("li").eq(0).remove();
                    return $ul;
                };

                var path = function (path) {
                    ele.find("span[data-href=\'" + path + "\']").eq(0).parent().trigger("click");
                };

                if (scope.listMenuConf && scope.listMenuConf.data) {
                    ele.append(root(scope.listMenuConf.data));
                    var mod = window.location.hash || "#/welcome";
                    mod = mod.substring(0, mod.indexOf("?") > 0 ? mod.indexOf("?") : mod.length);
                    path(mod);

                    if ($.isFunction(scope.listMenuConf['init'])) {
                        scope.listMenuConf.init({
                            "$root": ele,
                            "$path": path
                        });
                    }
                }
            }
        };
    });
});