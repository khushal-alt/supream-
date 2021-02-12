$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

$(document).ready(function(){
	//$('.banner-text').animate({top: '100px' , left: '50px'});
  $("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow").offset();
  return false;
});

});




$.getJSON("js/products.json", function(data){
	var html = "";
	$.each(data, function(key, value){
		html += '<div class="col-md-3">';
                    html += '<div class="thumbnail">';
                        html += '<div id="product-img" class="product-img">';
                            html += '<img src="img/products/'+value.pimg+'.jpg" alt="" class="img-responsive pimg center-block ease5">';
                            html += '<a href="order.php"><button type="button" class="btn btn-default get-quote p-btn"> Get a quote </button></a>';
                        html += '</div>';
                        html += '<h4 class="product-title">'+value.pname+'<br>';
						if(value.pid ==""){}else{
						html += '<span class="product-id">Product Id : '+value.pid+' </span></h4>';
						}
                    html += '</div>';
                html += '</div>';
	});
$('#products-container').html(html);

$('[id="product-img"]').mouseenter(function(){
			$(this).find("img").addClass("pimg-hover");
			$(this).find("button").css("opacity","1")
			
		});

		$('[id="product-img"]').mouseleave(function(){
			$(this).find("img").removeClass("pimg-hover");
			$(this).find("button").css("opacity","0")
			
		});
});





