

angular
    .module('cpa.widgets.widget_template', [])
    .directive("cpaWidgetTemplate", function() 
    { 

        return {

            restrict: 'E',
            template: "<div ng-repeat='item in items'><div class='item'>{{ item.name }}</div></div>",
            scope: 
            {
                lang: '@',
                items: '=', 
                clickItem: '&' 
            },
            link: function ($scope, $element, $attrs)
            {
                $scope.$watch("items.length", function ()
                {
                    // do stuff when items change
                });
            }
        }
    });