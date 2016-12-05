function outerVideo(params) {


    var videos = [];
    var assets = params.assets;
    for (var x = 0; x < assets.length; x++) {
        if (assets[x]['type'] === 'video') {
            videos.push({
                index: x + 1,
                asset: assets[x]
            });
        }
    }

    if (videos.length < 0) {
        return;
    }

    var $button;

    if (params.externalVideo) {
        $button = $('.video-button');
        $button.off('click');
    }

    else {
        $button = $('<input type="button" class="video-button" value="Play video" />');
        $('#amp-container').prepend($button);
    }

    var isPlayed = false;

    var $videoTag = null;


    for (var i = 0; i < params.tags.length; i++) {
        if (params.tags[i].alias === 'videoContainer') {
            $videoTag = params.tags[i].$tag;
            break;
        }
    }

    $button.on('click', function (e) {

        params.navContainerList.ampCarousel('goTo', videos[0].index);
        params.navContainerList.ampCarousel('select', videos[0].index);


        if (!isPlayed) {
            $button.val('Pause video');
            $videoTag.ampVideo('play');
        }

        else {
            $button.val('Play video');
            $videoTag.ampVideo('pause');
        }
        isPlayed = !isPlayed;

    });

}