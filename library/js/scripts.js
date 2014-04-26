/* imgsizer (flexible images for fluid sites) */
var imgSizer={Config:{imgCache:[],spacer:"/path/to/your/spacer.gif"},collate:function(aScope){var isOldIE=(document.all&&!window.opera&&!window.XDomainRequest)?1:0;if(isOldIE&&document.getElementsByTagName){var c=imgSizer;var imgCache=c.Config.imgCache;var images=(aScope&&aScope.length)?aScope:document.getElementsByTagName("img");for(var i=0;i<images.length;i++){images[i].origWidth=images[i].offsetWidth;images[i].origHeight=images[i].offsetHeight;imgCache.push(images[i]);c.ieAlpha(images[i]);images[i].style.width="100%";}
if(imgCache.length){c.resize(function(){for(var i=0;i<imgCache.length;i++){var ratio=(imgCache[i].offsetWidth/imgCache[i].origWidth);imgCache[i].style.height=(imgCache[i].origHeight*ratio)+"px";}});}}},ieAlpha:function(img){var c=imgSizer;if(img.oldSrc){img.src=img.oldSrc;}
var src=img.src;img.style.width=img.offsetWidth+"px";img.style.height=img.offsetHeight+"px";img.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+src+"', sizingMethod='scale')"
img.oldSrc=src;img.src=c.Config.spacer;},resize:function(func){var oldonresize=window.onresize;if(typeof window.onresize!='function'){window.onresize=func;}else{window.onresize=function(){if(oldonresize){oldonresize();}
func();}}}}





// Waypoints fade




//STICKY NAVBAR 2
//$('[data-spy="scroll"]').each(function () {
//  var $spy = $(this).scrollspy('refresh')
//})
//
//$('#nav-wrapper').removeData('affix').removeClass('affix affix-top affix-bottom');
//
///* affix the navbar after scroll below header */
//$('#nav').affix({
//      offset: {
//        top: $('header').height()-$('#nav').height()
//      }
//});	
//
//$('#nav-wrapper').height($("#nav").height());
//
//
///* highlight the top nav as scrolling occurs */
//$('body').scrollspy({ target: '#nav' })
//
///* smooth scrolling for scroll to top */
//$('.scroll-top').click(function(){
//  $('body,html').animate({scrollTop:0},1000);
//})
//
///* smooth scrolling for nav sections */
//$('#nav .navbar-nav li>a').click(function(){
//  var link = $(this).attr('href');
//  var posi = $(link).offset().top+50;
//  $('body,html').animate({scrollTop:posi},700);
//})
// END STICKY NAVBAR



// add twitter bootstrap classes and color based on how many times tag is used
function addTwitterBSClass(thisObj) {
  var title = jQuery(thisObj).attr('title');
  if (title) {
    var titles = title.split(' ');
    if (titles[0]) {
      var num = parseInt(titles[0]);
      if (num > 0)
      	jQuery(thisObj).addClass('label label-default');
      if (num == 2)
        jQuery(thisObj).addClass('label label-info');
      if (num > 2 && num < 4)
        jQuery(thisObj).addClass('label label-success');
      if (num >= 5 && num < 10)
        jQuery(thisObj).addClass('label label-warning');
      if (num >=10)
        jQuery(thisObj).addClass('label label-important');
    }
  }
  else
  	jQuery(thisObj).addClass('label');
  return true;
}

// as the page loads, call these scripts
jQuery(document).ready(function($) {



	// modify tag cloud links to match up with twitter bootstrap
	$("#tag-cloud a").each(function() {
	    addTwitterBSClass(this);
	    return true;
	});
	
	$("p.tags a").each(function() {
		addTwitterBSClass(this);
		return true;
	});
	
	$("ol.commentlist a.comment-reply-link").each(function() {
		$(this).addClass('btn btn-success btn-mini');
		return true;
	});
	
	$('#cancel-comment-reply-link').each(function() {
		$(this).addClass('btn btn-danger btn-mini');
		return true;
	});
	
	$('article.post').hover(function(){
		$('a.edit-post').show();
	},function(){
		$('a.edit-post').hide();
	});
	
	$('#container').masonry({
	    "itemSelector": ".item",
	    "columnWidth": ".grid-sizer",
	});
	
	// Input placeholder text fix for IE
	// $('[placeholder]').focus(function() {
	//   var input = $(this);
	//   if (input.val() == input.attr('placeholder')) {
	// 	input.val('');
	// 	input.removeClass('placeholder');
	//   }
	// }).blur(function() {
	//   var input = $(this);
	//   if (input.val() == '' || input.val() == input.attr('placeholder')) {
	// 	input.addClass('placeholder');
	// 	input.val(input.attr('placeholder'));
	//   }
	// }).blur();
	
	// Prevent submission of empty form
	$('[placeholder]').parents('form').submit(function() {
	  $(this).find('[placeholder]').each(function() {
		var input = $(this);
		if (input.val() == input.attr('placeholder')) {
		  input.val('');
		}
	  })
	});
	
	// $('#s').focus(function(){
	// 	if( $(window).width() < 940 ){
	// 		$(this).animate({ width: '200px' });
	// 	}
	// });
	
	// $('#s').blur(function(){
	// 	if( $(window).width() < 940 ){
	// 		$(this).animate({ width: '100px' });
	// 	}
	// });
			
	$('.alert-message').alert();

	$('.dropdown-toggle').dropdown();
 });

// "See More" FADE
$(window).on('load', function () {
$('#seeMore').waypoint(function(direction) {
        if(direction == 'down'){
            $(this).fadeTo( "slow" , 0.0);
        }
        else if(direction == 'up')
            $(this).fadeTo( "slow" , 1.0);
            
}, { offset: 600 })
});

// BANNER FADE
$(window).scroll(function(){
    var percent = $(document).scrollTop() / ($(document).height() - $(window).height());    
            $('#banner').css('opacity', 1 - (percent * 2.2));
});


// CONTENT FADE
$(window).scroll(function(){
    var percent = $(document).scrollTop() / ($(document).height() - $(window).height());    
            $('#entry-content').css('opacity', 1 - (percent * 1.5));
});

