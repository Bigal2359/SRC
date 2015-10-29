var numImages = 6;
    var currentImage = 0;
    //var sizeArray = [];
    
    $(document).ready(function() {
        resizeImages();
        
        for(var i = 0; i < numImages; i++)
        {
            //sizeArray.push({'width':$('#image_'+i).width(), 'height':$('#image_'+i).height()});
            $('#image_'+i).hide();
        }
        
        $('#image_0').fadeIn(2000); // start off
        var rotateImages = setInterval(rotateImages_fn, 5000);
    });
    
    $(window).resize(function() {
        resizeImages();
    });

    rotateImages_fn = function()
    {           
        var nextImage = currentImage;
        if(nextImage+1 < numImages) { nextImage++ }
        else { nextImage = 0; }
        
        $('#image_'+(currentImage)).css('zIndex', 0);
        $('#image_'+(nextImage)).css('zIndex', 10);
        
        $('#image_'+(nextImage)).fadeIn(2000, function() {
            $('#image_'+(currentImage)).hide();
            currentImage = nextImage;
        });
    }
    
    resizeImages = function()
    {
        var wHeight = $(window).height();
        var wWidth = $(window).width();
        
        for(var i = 0; i < numImages; i++)
        {
            if(wWidth > wHeight) // Images are wider than they are tall.
            {
                var iHeight = $('#image_'+i).height();
                var iWidth = $('#image_'+i).width();
                var ratio = iHeight/iWidth;

                $('#image_'+i).width(wWidth);
                $('#image_'+i).height(wWidth*ratio);
                
                if($('#image_'+i).height() < $(window).height()) {
                    var ratio = iWidth/iHeight;
                    $('#image_'+i).height(wHeight);
                    $('#image_'+i).width(wHeight*ratio);
                }
            }
            else
            {
                var iHeight = $('#image_'+i).height();
                var iWidth = $('#image_'+i).width();
                var ratio = iWidth/iHeight;
                
                $('#image_'+i).height(wHeight);
                $('#image_'+i).width(wHeight*ratio);
                
                if($('#image_'+i).width() < $(window).width()){
                    var ratio = iHeight/iWidth;
                    $('#image_'+i).width(wWidth);
                    $('#image_'+i).height(wWidth*ratio);
                }
            }
            //console.log($('#image_'+i).height());
            $('#image_'+i).offset({top: ($(window).height()-$('#image_'+i).height)/2, left: ($(window).width()-$('#image_'+i).width)/2});
        }
    }