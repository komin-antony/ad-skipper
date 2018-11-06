$(document).ready(function(){
    setInterval(function(){
        skipVideoAd();
        closeBannerAd();
    }, 1500);

    function closeBannerAd(){
        var adDisplay = $('.adDisplay');
        if (adDisplay.length > 0) {
            adDisplay.find('.close-padding').trigger('click');
        }
    }

    function skipVideoAd(){
        var videoAdUiSkipButton = $('.videoAdUiSkipButton');
        if (videoAdUiSkipButton.length > 0) {
            videoAdUiSkipButton.trigger('click');
        }
    }
    
});