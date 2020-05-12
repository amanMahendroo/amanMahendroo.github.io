let courses = []
const lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

function course(n, d, c, f, src) {
	this.name = n
	this.details = d || lorem
	this.courses = c
	this.fee = f || 'NA'
	this.imgSrc = src || 'https://bit.ly/3fzZm8m'
}

function fillCourses() {
	courses.push(new course("Western Dance", undefined, [
		new course("Contemporary", undefined, []),
		new course("Freestyle", undefined, []),
		new course("Hip-hop", undefined, []),
		new course("Salsa", undefined, []),
		]))
	courses.push(new course("Classical Dance", undefined, [
		new course("Bharatnatyam", undefined, []),
		new course("Kathak", undefined, []),
		]))
	courses.push(new course("Bhangra with Fitness Classes", undefined, []))
	courses.push(new course("Instrumental Music", undefined, [
		new course("Keyboard", undefined, []),
		new course("Drums", undefined, []),
		new course("Guitar", undefined, []),
		new course("Harmonium", undefined, []),
		new course("Mouth Organ", undefined, []),
		new course("Tabla", undefined, []),
		new course("Violin", undefined, []),
		]))
	courses.push(new course("Indian Classical Music", undefined, [
		new course("Vocal Music", undefined, []),
		]))
	courses.push(new course("Art and Craft", undefined, [
		new course("Drawing Classes", undefined, []),
		]))
}

(function () {
	fillCourses()
	for (var i = 0; i < courses.length; i += 2) { 
		courses1.push(courses[i]) 
	}
	for (var i = 1; i < courses.length; i += 2) { 
		courses2.push(courses[i]) 
	}
	console.log(courses)
})()

angular.module('myCourses', []).controller('Controller', function($scope) {
	$scope.courses = courses

});