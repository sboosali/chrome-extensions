// kill left crap
$(".side").remove();

$(".comment").css("margin-left","0");
$(".comment").css("margin-right","0");

$(".content").css("margin","0px 0px 0px 0px");

// NOTE
// to search (whose form is in the sidebar), use the url, e.g.:
/*
  https://www.reddit.com/r/haskell/search?q=some+words&restrict_sr=on
*/

// kill bottom crap
$(".footer-parent").remove();
