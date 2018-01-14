var app = angular.module("ogcs", ["ngRoute","firebase"]);


app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "dashboard.html",
        activetab:"dashboard",
        controller:"dashboardController"
    })
    .when("/addUser", {
        templateUrl : "addUser.html",
        activetab:"addUser",
        controller:"adduserController"

    })
    .when("/chat", {
        templateUrl : "chat.html",
        activetab:"chat",
        controller:"chatController"

    })
    .when("/classNB", {
        templateUrl : "classNB.html",
        activetab:"classNB",
        controller:"classNBController"

    })
     .when("/instituteNB", {
        templateUrl : "instituteNB.html",
        activetab:"instituteNB",
        controller:"instituteNBController"

    })
     .otherwise({
       redirectTo: "/",
        activetab:"dashboard"

    });
});
   app.run(function ($rootScope, $route) {
    $rootScope.$route = $route;
});


/************dashboard controller**************************/

app.controller("dashboardController",function($scope,$firebaseArray) {
    
    var ref=firebase.database().ref("admin").child("institutePost");
    ref.on("value", function(snapshot) {
      // console.log("There are "+snapshot.numChildren()+" messages");
    $scope.numberOfInstituteMessage=snapshot.numChildren();
    });


    var ref=firebase.database().ref("admin").child("classPost");
    ref.on("value", function(snapshot) {
      // console.log("There are "+snapshot.numChildren()+" messages");
    $scope.numberOfClassMessage=snapshot.numChildren();
    });



    var ref=firebase.database().ref("messages");
    ref.on("value", function(snapshot) {
      // console.log("There are "+snapshot.numChildren()+" messages");
    $scope.numberOfChat=snapshot.numChildren();
    });

});


app.controller("adduserController",function($scope,$http,base_url,parent_id) {
   
   /******for teacher json*************/
   $http.get("https://ogcswebapp.firebaseio.com/users/Teacher.json").then(function(response) {
    $scope.teacherDatas=response.data;
  });

   /******for parent json****************/
    $http.get("https://ogcswebapp.firebaseio.com/users/Parent.json").then(function(response) {
    $scope.parentDatas=response.data;
  });

});


/*chat controller used here */

app.controller("chatController",function($scope,$firebaseObject,$http) {

  $http.get("https://ogcswebapp.firebaseio.com/messages.json").then(function(response) {
  $scope.datas=response.data;
  });

});



/*institute message cntroller*/

app.controller("instituteNBController",function($scope,$firebaseArray,$firebaseObject) {
 
 $scope.admin="Admin";

    var ref=firebase.database().ref("admin/institutePost");
    // console.log($firebaseArray(ref));
    $scope.instituteMessages=$firebaseArray(ref);



    $scope.postMessage="";


    $scope.postInstituteMessage=function() {
      
        ref.push({
            post:$scope.postMessage,
            timeStamp:new Date().getTime(),
            postedBy:$scope.admin
        });

         $scope.postMessage="";
 
    }  

      $scope.selectPost = function(post){
      $scope.clickedPost = post; 

      var ref=firebase.database().ref().child("admin/institutePost/"+post);
      $scope.editPostData=$firebaseObject(ref);

     };

      $scope.editPost=function(event) {

        var ref=firebase.database().ref().child("admin/institutePost/"+event);
        ref.update({
          post:$scope.editPostData.post
        }).then(function(ref) {
          console.log(ref);
        },function(err) {
          console.log(err);
        });
     }

      /*delete instiute post here */ 
      
      $scope.deletePost = function(event){

        $scope.deletedPost=event;
        console.log(event)
      };

      $scope.deletePostConfirm=function(deletedPost) {
        
        $scope.instituteMessages.$remove(deletedPost);
        console.log(deletedPost);
        $("#myModalDelete").hide();
    };


 

});


/* classNBController start here*/

app.controller("classNBController",function($scope,$http,$firebaseArray,$firebaseObject) {
 


    //   $http.get("https://ogcswebapp.firebaseio.com/admin/classPost.json").then(function(response) {
    //    $scope.classMessages=response.data;

    //      app.filter('reverse', function() {
    //   return function(items) {
    //     return items.slice().reverse();
    //   };
    // });
    // });
     // $scope.admin="Admin";
        var ref=firebase.database().ref("admin/classPost");
        $scope.classMessages=$firebaseObject(ref);
        // $scope.datas=$firebaseArray(ref);
        console.log($firebaseObject(ref));


        // $scope.postClassMessage=function() {
        
        // ref.push({
        //     post:$scope.postMessage,
        //     timeStamp:new Date().getTime(),
        //     postedBy:$scope.admin
        // });

        //  $scope.postMessage="";

       // }  

    //   $scope.selectPost = function(post){
    //   // $scope.clickedPost = post; 

    //   var ref=firebase.database().ref().child("admin/classPost/"+post);
    //   $scope.editPostData=$firebaseObject(ref);

    //  };

    //   $scope.editPost=function(event) {

    //     var ref=firebase.database().ref().child("admin/classPost/"+event);
    //     ref.update({
    //       post:$scope.editPostData.post
    //     }).then(function(ref) {
    //       console.log(ref);
    //     },function(err) {
    //       console.log(err);
    //     });
    //  }

    //     /*delete instiute post here */


    $scope.deletePost = function(event){

      $scope.deletedPost=event;
      console.log(event);
    };

    $scope.deletePostConfirm=function(deletedPost) {
      
     ref.child(deletedPost.post).remove();
      console.log(deletedPost);
      $("#myModalDelete").hide();
    };



 

});

  /******for latest post display first************/
    app.filter('reverse', function() {
      return function(items) {
        return items.slice().reverse();
      };
    });


