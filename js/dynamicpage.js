$(function() {

    var newHash      = "",
        $mainContent = $("#main-content"),
        $pageWrap    = $("#page-wrap"),
		$pageNav    = $("#page-nav"),
        baseHeight   = 0,
        $el;
	    
    $pageWrap.height($pageWrap.height());
    baseHeight = $pageWrap.height() - $mainContent.height();
    
    $($pageNav).delegate("a", "click", function() {
        window.location.hash = $(this).attr("href");
        return false;
    });
    
    $(window).bind('hashchange', function(){
    
        newHash = window.location.hash.substring(1);
        
        if (newHash) {
			$pageNav
				.find("#pagination")
				.fadeOut(200, function() {
					$pageNav.load(newHash + " #pagination", function() {
                        $pageNav.fadeIn(200);
					});
				});
			$mainContent
                .find("#guts")
                .fadeOut(200, function() {
                    $mainContent.hide().load(newHash + " #guts", function() {
                        $mainContent.fadeIn(200, function() {
                            $pageWrap.animate({
                                height: baseHeight + $mainContent.height() + "px"
                            });
                        });
                    });
                });
        };
        
    });
    $(window).trigger('hashchange');

});