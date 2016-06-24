/*
 * Copyright (c) 2015. Bond(China), java freestyle app
 */

define(['jquery'], function ($) {

        var Ratio = {
            record: function () {
                window.upRatio = window.devicePixelRatio;
            },

            isUp: function () {
                return window.devicePixelRatio >= window.upRatio
            }
        };

        $(window).bind('resize', function () {
            adjust();
        });

        $(function () {
            Ratio.record();
            adjust();
        });

        function adjust() {
            west_center_east_height();
        }

        function west_center_east_height() {
            setTimeout(function () {
                var content = getChildrensHeight('.ui-layout-west');
                var temp = getChildrensHeight('.ui-layout-center');
                content = content > temp ? content : temp;
                temp = getChildrensHeight('.ui-layout-east');
                content = content > temp ? content : temp;

                var doc_height = $(document).height() - getSiblingsHeight('.ui-layout-west', ['ui-layout-center', 'ui-layout-east']);
                var west = $(".ui-layout-west").height();
                var center = $(".ui-layout-center").height();
                var east = $(".ui-layout-east").height();

                var max = west > center ? west : center;
                max = max > east ? max : east;
                max = max > doc_height ? max : doc_height;

                if (document.documentElement.clientHeight < document.documentElement.offsetHeight) {
                    max = content;
                }

                if (max) {
                    $(".ui-layout-west").css({height: max + 'px'});
                    $(".ui-layout-center").css({height: max + 'px'});
                    $(".ui-layout-east").css({height: max + 'px'});
                    $(".ui-layout-west").parent().css({height: max + 'px'});
                }
            }, 2);
        }

        function isExcl(dom, excludes) {
            if (excludes) {
                for (var i = 0; i < excludes.length; i++) {
                    if (dom.hasClass(excludes[i])) {
                        return true;
                    }
                }
            }
            return false;
        }

        function getSiblingsHeight(selector, excludes) {

            var sub_h = 0;
            var sibs = $(selector).siblings();
            for (var i = 0; i < sibs.length; i++) {
                var sib = sibs.eq(i);
                if (sib.css("display") != 'none' && !isExcl(sib, excludes))
                    sub_h += sib.outerHeight();
            }
            return sub_h;
        }

        function getChildrensHeight(selector, excludes) {
            var sub_h = 0;
            var sibs = $(selector).children();
            for (var i = 0; i < sibs.length; i++) {
                var sib = sibs.eq(i);
                if (sib.css("display") != 'none' && !isExcl(sib, excludes))
                    sub_h += sib.outerHeight();
            }
            return sub_h;
        }
    }
);