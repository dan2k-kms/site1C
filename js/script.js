$(document).ready(function(){
    $('.trigger').click(function() {
        $('.introduce').slideUp();
        $('.content').delay(400).slideDown(700);
    });

    $('#info').click(function(){
        $('.content').slideUp();
        $('.info').delay(400).slideDown(700);
    });

    $('#mmb').click(function(){
        $('.content').slideUp();
        $('.mb').delay(400).slideDown(700);
        $('.wrap').css('overflow-y','visible');
    });

    $('#mp').click(function(){
        $('.content').slideUp();
        $('.mp').delay(400).slideDown(700);
        $('.wrap').css('overflow-y','visible');
    });

    $('.back').click(function(){
        if($('.mp').css('display')!=='none')
        {
            $('.mp').fadeOut(600);
        }
        if($('.mb').css('display')!=='none')
        {
            $('.mb').fadeOut(600);
        }
        if($('.info').css('display')!=='none')
        {
            $('.info').fadeOut(600);
        }
        $('.content').delay(700).slideDown();
    });

	$(window).scroll(function(){
		if($(this).scrollTop() > 100) {
			$('#toTop').css({'transition':'none'});
            $('#toTop').fadeIn(200);
		} else {
			$('#toTop').fadeOut(200);
		}
	});
 
	$('#toTop').click(function(){
		$('html,body').animate(
            {
                scrollTop: 0
            }, 100);
		return false;
	});
});