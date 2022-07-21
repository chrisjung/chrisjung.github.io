$(document).ready(function() {
    $('.navbar a').on('click', function() {
        event.preventDefault();
        var link = this;
        $.smoothScroll({
            scrollTarget: link.hash
        });
    });
});


