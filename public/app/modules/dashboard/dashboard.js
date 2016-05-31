(function(){
	var myapp = angular.module('myquiz',[]);
	app.factory('DashboardFactory',function($http){
		
		return {
			getCourses : function(){
				console.log('courses');
				var courses = $http.get('../../data.json').success(function(data){
					console.log(response + "...." + data);
					 return response.data;
				});
			}
		}
	});
	
	
});