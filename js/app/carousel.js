"use strict";$("#featured .item img").each(function(){var a=$(this).attr("src");$(this).parent().css({"background-image":"url("+a+")"}),$(this).remove()}),$(window).resize(function(){var a=$(window).height();$(".fullheight").css("height",a)}),$(".carousel").carousel({pause:!1});