

describe('Testing widget template', function ()
{
    var $compile;
    var $rootScope;
    var $element;


    // Load the module, which contains the directive
    beforeEach(module('cpa.widgets.widget_template')); 


    // Store references to $rootScope and $compile
    // so they are available to all tests in this describe block
    beforeEach(inject(function (_$compile_, _$rootScope_) 
    {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $compile = _$compile_;
        $rootScope = _$rootScope_; 
    }));


    // method run before each test
    beforeEach(function () 
    {
        // dummy data
        $rootScope.items =
        [
            { name: "Item A" },
            { name: "Item B" },
            { name: "Item C" }
        ];


        // Compile a piece of HTML containing the directive
        $element = $compile("<cpa-widget-template items='items'></cpa-widget-template>")($rootScope);
       

        // fire all the watches, so the scope expression {{1 + 1}} will be evaluated
        $rootScope.$digest();
    });


    it('Instantiates the directive', function ()
    { 
        expect($element).not.toBe(null);
    });


    it('Has items', function ()
    {
        expect($element.find(".item").length).toBeGreaterThan(0);
    });
});