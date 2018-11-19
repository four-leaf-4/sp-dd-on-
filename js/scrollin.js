(jQuery)(function($) {
    $(window).scroll(function (){
        $('img[class^=pic_furi]').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
			if( scroll == 0 ){
				$(this).removeClass('scrollin');
			}
            else if (scroll > elemPos - windowHeight ){
                $(this).addClass('scrollin');
            }
        });
    });
});
