"use strict";$("#nav").affix({offset:{top:$("header").height()-$("#nav").height()}}),$("body").scrollspy({target:"#nav"}),$(".scroll-top").click(function(){$("body,html").animate({scrollTop:0},1e3)}),$("#nav .navbar-nav li>a").click(function(){var a=$(this).attr("href"),b=$(a).offset().top;$("body,html").animate({scrollTop:b},700)}),jQuery(function(a){a(window).scroll(function(){a(window).scrollTop()>100?a(".navbar-fixed-top").addClass("past-main"):a(".navbar-fixed-top").removeClass("past-main")}),a(function(){var b=70,c=a("#featured .item").length,d=a(window).height(),e=Math.floor(Math.random()*c);a("#featured .item").eq(e).addClass("active"),a(".fullheight").css("height",d),a(document).ready(function(){a("body").scrollspy({target:"#navbar",offset:b})});var f=a(this).find("li.active a").attr("href");"#featured"!==f?a("header nav").addClass("inbody"):a("header nav").removeClass("inbody"),a(".navbar-fixed-top").on("activate.bs.scrollspy",function(){var b=a(this).find("li.active a").attr("href");"#featured"!==b?a("header nav").addClass("inbody"):a("header nav").removeClass("inbody")}),a(".navbar a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var c=a(this.hash);if(c=c.length?c:a("[name="+this.hash.slice(1)+"]"),c.length)return a("html,body").animate({scrollTop:c.offset().top-b+2},500),!1}})})});