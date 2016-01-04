/**
 * Created by Muhammad Ali Mughal on 6/13/2015.
 */
var app= angular.module("myapp",["ngMaterial"])
app.service("myservice",function(){
    var todoArray = [];
    this._saveItemInTodo = function(todoObj){
        todoArray.push(todoObj)
    };
    this.getAllTodo = function(){
        return todoArray
    }
});
app.controller("myctrl1",function($scope,myservice){
    $scope.Savetodo = function(){
        var todoObj = {
            name : $scope.Todo_item
        };
        myservice._saveItemInTodo(todoObj);
        $scope.Todo_item = "";

    };
    $scope.AllDelete = function(){
        myservice.getAllTodo().length = 0
    }


});
app.controller("ctrl2",function($scope,myservice){
    $scope.alltodo = myservice.getAllTodo()
    $scope.remove = function(index){
        $scope.alltodo.splice(index,1)
    }

    $scope.alltodos = myservice.getAllTodo();
});
