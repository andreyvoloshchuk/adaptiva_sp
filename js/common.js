$(document).ready(function(){
	$('.menu').on('click',function(){
		$('.menu').toggleClass('active')
	})
});

function adapt(){
	var el = '';

if($(window).width() < 1247 && !$('button').is('.viewall')){
	$('.newspost_7, .newspost_8').css("display", "none");
	el = '<button class="viewall">View all</button>'
	$('.container').append(el);
}
else if($(window).width() > 1247 && $('button').is('.viewall')) {
	$('.newspost_7, .newspost_8').css("display", "block")
	$('.viewall').remove();
};




};
$('.main_menu').css("height", $(document).height())
adapt();
$(window).resize(function(){
	adapt();
	$('.main_menu').css("height", $(document).height())
});
	

$('.viewall').on('click', function(){
	$('.newspost_4, .newspost_5, .newspost_6, .newspost_7, .newspost_8').css("display", "block");
	$('.viewall').remove();

})