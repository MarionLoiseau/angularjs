var externe = angular.module('angularjsFichierExterne', []);

      externe.directive('laDirectiveExterne', function(){
        return {
          restrict: 'C',
          template: '<h5>Le NEW titre du h5</h5>'
        }
      })

