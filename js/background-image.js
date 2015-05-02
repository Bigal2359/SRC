$(document).ready(function() {
	resizeImages();
});

$(window).resize(function() {
	resizeImages();
});

resizeImages = function()
{
	var wHeight = $(window).height();
	var wWidth = $(window).width();
	
	
		if(wWidth > wHeight) // Images are wider than they are tall.
		{
			var iHeight = $('#triquibackimg').height();
			var iWidth = $('#triquibackimg').width();
			var ratio = iHeight/iWidth;

			$('#triquibackimg').width(wWidth);
			$('#triquibackimg').height(wWidth*ratio);
			
			if($('#triquibackimg').height() < $(window).height()) {
				var ratio = iWidth/iHeight;
				$('#triquibackimg').height(wHeight);
				$('#triquibackimg').width(wHeight*ratio);
			}
		}
		else
		{
			var iHeight = $('#triquibackimg').height();
			var iWidth = $('#triquibackimg').width();
			var ratio = iWidth/iHeight;
			
			$('#triquibackimg').height(wHeight);
			$('#triquibackimg').width(wHeight*ratio);
			
			if($('#triquibackimg').width() < $(window).width()){
				var ratio = iHeight/iWidth;
				$('#triquibackimg').width(wWidth);
				$('#triquibackimg').height(wWidth*ratio);
			}
		}
		//console.log($('#image_'+i).height());
		$('#triquibackimg').offset({top: ($(window).height()-$('#triquibackimg').height)/2, left: ($(window).width()-$('#triquibackimg').width)/2});
}