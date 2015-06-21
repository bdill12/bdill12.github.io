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
            var body = document.getElementById('body');
            //  Test if menu is hidden by default
            it('should be hidden by default', function() {
                expect(body.classList.contains("menu-hidden")).toBe(true);
            });
            //Test if menu changes visibility on click
            it('should change visibility when the icon is clicked', function() {
                var icon = document.getElementById('menuId');
                icon.click();
                expect(body.classList.contains('menu-hidden')).toBe(false);
                icon.click();
                expect(body.classList.contains('menu-hidden')).toBe(true);
            });
        });
    });

    describe('Initial Entries', function() {
        // Async Testing
        beforeEach(function(done) {
            setTimeout(function() {
                loadFeed(0, done);
            }, 1000);

        });
        // Confirm at least 1 entry
        it('have at least a feed', function(done) {
            var entry = $('.feed a').children('.entry');
            expect(entry.length).toBeGreaterThan(0);
            done();
        });
    });
    describe('New Feed Selection', function() {
        var entry;
        var entryAfterchange;
        // Async Testing, save entry variable
        beforeEach(function(done) {
            setTimeout(function() {
                entry = $('.entry')[0].innerText;
                loadFeed(1, done);
            }, 1000);
        });
        // Confirm Change
        it('the content changes when a new feed is loaded', function(done) {
            // Saving after change, comparing
            entryAfterchange = $('.entry')[0].innerText;
            expect(entry).not.toBe(entryAfterchange);
            done();
        });

        afterEach(function(done) {
            loadFeed(0, done);
        });
    });
});
