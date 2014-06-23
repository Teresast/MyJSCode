describe("jasmin_add_delete.Fixtures", function() {
    beforeEach(function () {
       jasmine.getFixtures().clearCache();

    });

    describe("default initial config values", function () {
        it("should have inputMessage", function () {
            jasmine.getFixtures().fixturesPath = '/Users/tshen/Documents/js/';
            loadFixtures('jquery_add_delete.html');
            console.log(jasmine.getFixtures());
           expect(jasmine.getFixtures().containerId).toEqual('inputMessage');
        });
    });
} );