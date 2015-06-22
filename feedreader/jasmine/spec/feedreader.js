var container;
/* feedreader.js
 * This contains all of the tests that will be run against the application.
*/
$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.length).not.toBe(0);
            });
            // Confirm url and contents
            it('should have a URL', function() {
                allFeeds.forEach(function(feed) {
                    expect(feed.url).toBeDefined();
                    expect(feed.url.length).not.toBe(0);
                });
            });
            // Confirm Name and contents
            it('should have a name', function() {
                allFeeds.forEach(function(feed) {
                    expect(feed.name).toBeDefined();
                    expect(feed.name.length).not.toBe(0);
                });
            });
        });

        describe('The menu', function() {
            var body = $('body');
            //  Test if menu is hidden by default
            it('should be hidden by default', function() {
                expect(body.attr("class")).toBe("menu-hidden");
            });
            //Test if menu changes visibility on click
            it('should change visibility when the icon is clicked', function() {
                var icon = document.getElementById('menuId');
                icon.click();
                expect(body.attr("class")).not.toBe("menu-hidden");
                icon.click();
                expect(body.attr("class")).toBe("menu-hidden");
            });
        });
    });

    describe('Initial Entries', function() {
        // Async Testing
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        // Confirm at least 1 entry
        it('have at least a feed', function(done) {
            var entry = $('.feed a').children('.entry');
            expect(entry.length).toBeGreaterThan(0);
            done();
        });
    });
    describe('New Feed Selection', function() {
        var first, second;

        // Call Loadfead

        beforeEach(function(done) {

            loadFeed(0, function() {
                first = $('.feed').html();
                loadFeed(1, done);
            });
        });
        // Confirm Change
        it('the content changes when a new feed is loaded', function() {
            expect(first).not.toEqual(second);
        });
        //reset to orginal feed
        afterAll(function() {
            loadFeed(0);
        });
    });
});
