/* imgsizer (flexible images for fluid sites) */
var imgSizer={Config:{imgCache:[],spacer:"/path/to/your/spacer.gif"},collate:function(aScope){var isOldIE=(document.all&&!window.opera&&!window.XDomainRequest)?1:0;if(isOldIE&&document.getElementsByTagName){var c=imgSizer;var imgCache=c.Config.imgCache;var images=(aScope&&aScope.length)?aScope:document.getElementsByTagName("img");for(var i=0;i<images.length;i++){images[i].origWidth=images[i].offsetWidth;images[i].origHeight=images[i].offsetHeight;imgCache.push(images[i]);c.ieAlpha(images[i]);images[i].style.width="100%";}
if(imgCache.length){c.resize(function(){for(var i=0;i<imgCache.length;i++){var ratio=(imgCache[i].offsetWidth/imgCache[i].origWidth);imgCache[i].style.height=(imgCache[i].origHeight*ratio)+"px";}});}}},ieAlpha:function(img){var c=imgSizer;if(img.oldSrc){img.src=img.oldSrc;}
var src=img.src;img.style.width=img.offsetWidth+"px";img.style.height=img.offsetHeight+"px";img.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+src+"', sizingMethod='scale')"
img.oldSrc=src;img.src=c.Config.spacer;},resize:function(func){var oldonresize=window.onresize;if(typeof window.onresize!='function'){window.onresize=func;}else{window.onresize=function(){if(oldonresize){oldonresize();}
func();}}}}


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

$(document).ready(function () {
            $('.entry-title').waypoint('sticky', {
              offset: 55 // Apply "stuck" when element 30px from top
        });
 });

// BANNER FADE
$(window).scroll(function(){
    var percent = $(document).scrollTop() / ($(document).height() - $(window).height());    
            $('#banner').css('opacity', 1 - (percent * 2.2));
});



$(window).on('load', function () {
	if ( $(window).width() > 767 ){

		// Content Fade out
		$('#entry-content').waypoint(function(direction) {
	        if(direction == 'down'){
	            $(this).fadeTo( 1000 , 0.3);
	        }
	        else if(direction == 'up')
	            $(this).fadeTo( 1000 , 1.0);
		}, { offset: 100 });
		
		// Background color fade
		$('.contain').waypoint(function(direction) {
		    if(direction == 'down'){
		        $(this).animate({
		                  backgroundColor: "#222"
		              }, 1000 );
		          
		    }
		    else if(direction == 'up')
		        $(this).animate({
		                      backgroundColor: "#661D25"
		                  }, 1000 );
		}, { offset: 100 });
		
		$('.entry-title').waypoint(function(direction) {
		    if(direction == 'down'){
		        $(this).animate({
		                  backgroundColor: "#661D25" , color: "#eee" 
		              }, 1000 );
		          
		    }
		    else if(direction == 'up')
		        $(this).animate({
		                      backgroundColor: "#222" , color: "#e07a0f"
		                  }, 1000 );
		}, { offset: 400 });
		
		// Masonry Fade In
		$('.masonFade').waypoint(function(direction) {
		    if(direction == 'down'){
		        $(this).fadeTo( "slow" , 1.0);
		    }
		    else if(direction == 'up')
		        $(this).fadeTo( "slow" , 0.0);
		}, { offset: '90%' });
		}
	
	else {
	$('.contain').css({
	              backgroundColor: "#661D25"
	          });
	$('#entry-content').css({
	              opacity: "1"
	          });
	$('.masonFade').css({
	              opacity: "1"
	          });
	}
	
	if ( $(window).width() > 769 ){
		$('#seeMore').waypoint(function(direction) {
	        if(direction == 'down'){
	            $(this).fadeTo( 200 , 0.0);
	        }
	        else if(direction == 'up')
	            $(this).fadeTo( "slow" , 1.0);
		}, { offset: 600 });
	}
	else {
		$('#seeMore').hide();
	}

});