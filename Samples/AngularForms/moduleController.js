moduleApp.controller( 'moduleController', function( $scope ) {
	$scope.reset = function() {
		$scope.objStudent = {
		    	strFirstName: 'MirzaShakir',
			strMiddleName: 'Noor',
			strLastName: 'Baig'
		};
	}

	$scope.reset();
});
