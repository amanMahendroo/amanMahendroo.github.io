let img = [
'https://bit.ly/2YNfdL1', 'https://bit.ly/2AkJjLC', 'https://bit.ly/3dzCMuO', 'https://bit.ly/2zr6uDE', 'https://bit.ly/2zr6weK',
'https://bit.ly/2YNfdL1', 'https://bit.ly/2AkJjLC', 'https://bit.ly/3dzCMuO', 'https://bit.ly/2zr6uDE', 'https://bit.ly/2zr6weK',
'https://bit.ly/2YNfdL1', 'https://bit.ly/2AkJjLC', 'https://bit.ly/3dzCMuO', 'https://bit.ly/2zr6uDE', 'https://bit.ly/2zr6weK',
'https://bit.ly/2YNfdL1', 'https://bit.ly/2AkJjLC', 'https://bit.ly/3dzCMuO', 'https://bit.ly/2zr6uDE', 'https://bit.ly/2zr6weK',
]

let col1 = [], col2 = [], col3 = [], courses1 = [], courses2 = [], features = [], current

for (var i = 0; i < img.length; i += 3) { 
	col1.push(img[i]) 
}
for (var i = 1; i < img.length; i += 3) { 
	col2.push(img[i]) 
}
for (var i = 2; i < img.length; i += 3) { 
	col3.push(img[i]) 
}

angular.module('myApp', []).controller('myCtrl', function($scope) {
    $scope.col1 = col1;
    $scope.col2 = col2;
    $scope.col3 = col3;
    
    $scope.courses1 = courses1;
    $scope.courses2 = courses2;

    $scope.current = current;

    $scope.features = features;
});