
var app= angular.module("myapp",["ngMaterial","firebase"])
app.service("ref",function(){
    var ref = new Firebase("https://tododbassignment.firebaseio.com/");
    return ref;
 /*   var todoArray = [];
    this._saveItemInTodo = function(todoObj){
        todoArray.push(todoObj)
    };
    this.getAllTodo = function(){
        return todoArray
    }*/
});
app.controller("myctrl1",function($scope,ref,$firebaseArray){

    var b = ref.child("Todos");
    $scope.c = $firebaseArray(b);
    $scope.Savetodo = function(){
        $scope.c.$add({
            name : $scope.Todo_item
        });
        console.log($scope.c);
       /* var todoObj = {
            name : $scope.Todo_item
        };
        myservice._saveItemInTodo(todoObj);
        $scope.Todo_item = "";
*/
    };
    $scope.AllDelete = function(){
        //myservice.getAllTodo().length = 0
        b.remove();
    };
    $scope.remove = function(t){
        console.log(t);
              $scope.c.$remove(t);
       // });
    }


});
//app.controller("ctrl2",function($scope,ref){
//    $scope.alltodo = ref.getAllTodo()
//    $scope.remove = function(index){
//        $scope.alltodo.splice(index,1)
//    }
//
//    $scope.alltodos = ref.getAllTodo();
//});
