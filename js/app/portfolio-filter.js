"use strict";$(document).ready(function(){function a(a,b){$("."+a).click(function(){var a=$(this);a.hasClass("active-filter")?setTimeout(function(){$(".portfolio").css("min-height","1px"),a.removeClass("active-filter"),$(".portfolio--project").fadeIn("fast")},200):setTimeout(function(){var c=$(".portfolio").css("height");$(".portfolio").css("min-height",c),$(".filter").removeClass("active-filter"),a.addClass("active-filter"),$(".portfolio--project").fadeOut("fast"),setTimeout(function(){$("."+b).fadeIn("fast")},200)},100)})}a("All-project","All"),a("UX-project","UXP"),a("Startup-project","Startup"),a("Misc-project","Misc"),a("WD-project","WD")});