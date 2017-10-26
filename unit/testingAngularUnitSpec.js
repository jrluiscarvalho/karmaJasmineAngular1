describe('Testing angular js', function(){
    
    beforeEach(module('testingAngularApp'));
    
    describe('testing controller', function(){
        var scope, ctrl;
        beforeEach(inject(function($controller, $rootScope){
            scope = $rootScope.$new();
            ctrl = $controller('TestingAngularCtrl',{$scope:scope});
        }));

        it('should initialize the title in the scope', function(){
            expect(scope.title).toBeDefined();
            expect(scope.title).toBe('Testing Angular JS');
            
        });

        it('should add destinations to the destinations list', function(){
            expect(scope.destinations).toBeDefined();
            expect(scope.destinations.length).toBe(0);
            
            scope.newDestination = {
                city:"London",
                country:"England"
            };

            scope.addDestination();

            expect(scope.destinations.length).toBe(1);
            expect(scope.destinations[0].city).toBe("London");
            expect(scope.destinations[0].country).toBe("England");

            scope.newDestination.city = "Frankfurt";
            scope.newDestination.country = "Germany";

            scope.addDestination();

            expect(scope.destinations.length).toBe(2);
            expect(scope.destinations[1].city).toBe("Frankfurt");
            expect(scope.destinations[1].country).toBe("Germany");
            expect(scope.destinations[0].city).toBe("London");
            expect(scope.destinations[0].country).toBe("England");
        });

        it('should add destinations to the destinations list', function(){
            scope.destinations = [
                {
                    city:"Paris",
                    country:"France"
                },
                {
                    city:"Warsan",
                    country:"Poland"
                }
                
            ];
            expect(scope.destinations.length).toBe(2);

            scope.removeDestination(0);

            expect(scope.destinations.length).toBe(1);
            expect(scope.destinations[0].city).toBe("Warsan");
        });
    });
});