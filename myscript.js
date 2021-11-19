// Check Page title
window.onload = function() {
    if (document.title.indexOf("Yahoo | Mail, Weather, Search, Politics, News, Finance, Sports & Videos") != -1) {
        var articles = document.getElementsByClassName("js-content-viewer rapidnofollow D(b) Td(n) Td(n):f C($c-fuji-grey-m) C($streamBrandHoverClass):h wafer-destroyed");
        var i;

        for(i=0; i < articles.length; i++) {
            console.log(articles[i].outerText)
        }
    }
}
