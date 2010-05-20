//REQUIRES jQuery (works fine with 1.3.2)

$(document).ready(function(){
//Google Font Chooser
	var googleFonts =  ['Cantarell','Cardo','Crimson Text','Droid Sans','Droid Sans Mono','Droid Serif','IM Fell','Inconsolata','Josefin Sans Std Light','Lobster','Molengo','Nobile','OFL Sorts Mill Goudy TT','Old Standard TT','Reenie Beanie','Tangerine','Vollkorn','Yanone Kaffeesatz'],
	headerSel = 'h1, h2, h3, h4, h5, h6',
	bodySel = 'body, input, button, textarea, select',
	$headerStyle = $('<style type="text/css"></style>'),
	$bodyStyle = $('<style type="text/css"></style>'),
	$chooser = $('<div class="google-font-chooser-wrapper" style="font-family: helvetica, sans-serif; padding: 5px; background-color: #222; color:#fff; position: fixed; bottom: 0; left: 0; border-radius: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px"><span class="chooser-title" style="-moz-transform-origin: 0% 50%;">Google Font Chooser</span><div class="google-font-chooser" style="display:none; float: left;"><h3>Header Font</h3><h4 style="font-size: .8em;">' + headerSel + '</h4><ul id="google-fonts-headers-select"></ul></div><div class="google-font-chooser" style="display:none; float: left;"><h3>Body Font</h3><h4 style="font-size: .8em;">' + bodySel + '</h4><ul id="google-fonts-body-select"></ul></div></div>');
	$.each(googleFonts,function(i,l){
		var font = l,
		fontLink = "http://fonts.googleapis.com/css?family=" + font.replace(/ /ig,'+'),
		headerLi = $('<li style="cursor:pointer;">' + font + '</li>').click(function(){
			if($('link[href=' + fontLink + ']').length === 0){
				$('link:last').after("<link href='"+ fontLink  + "' rel='stylesheet' type='text/css'/>");
			}
			$headerStyle.html(headerSel + ' { font-family: "' + font + '", arial, sans-serif; }');
			$(this).attr('style','background-color: #eee; color: #222;').siblings().attr('style','cursor:pointer;');
	
		}),
		bodyLi = $('<li style="cursor:pointer;">' + font + '</li>').click(function(){
			if($('link[href=' + fontLink + ']').length === 0){
				$('link:last').after("<link href='" + fontLink + "' rel='stylesheet' type='text/css'/>");
			}
			$bodyStyle.html(bodySel + '{ font-family: "' + font + '", Helvetica, sans-serif; }');
			$(this).attr('style','background-color: #eee; color: #222;').siblings().attr('style','cursor:pointer;');
		});
		$('#google-fonts-headers-select',$chooser).append(headerLi);
		
		$('#google-fonts-body-select',$chooser).append(bodyLi);
	});
	
	$('body').append($headerStyle).append($bodyStyle).append($chooser);
	
	$chooser.find('span.chooser-title').css('cursor','pointer').toggle(
		function(){
			$('.google-font-chooser', $chooser).show('fast');
			$(this).html('X').css( { position: 'absolute', top: '5px', right: '5px' } );
		},
		function(){
			$('.google-font-chooser', $chooser).hide('fast');
			$(this).html('Google Font Chooser').css( { position: 'static', top: 'auto', right: 'auto', left: 'auto' } );
		}
	);
});