var url = 'https://dry-tundra-81652.herokuapp.com/artists/time_range/short_term';

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$.getJSON(url)
    .done(function(data) {
        $.each( data.items, function( i, item ) {

            console.log(item);

           var name = item.name,
               followers = item.followers.total,
               artist_link = item.external_urls.spotify;

           var image_index = item.images.length === 3 ? 0 : 1,
               image_link = item.images[image_index].url,
               image_height = item.images[image_index].height,
               image_width = item.images[image_index].width;

           var card_div = $('<div class="card">')
               .addClass('spotify-card')
               .addClass('animated')
               .addClass('zoomIn')
               .appendTo('#spotify-artists');

            var image = $("<img>").attr('src', image_link).attr('width', 180).attr('height', 180)
                .addClass('card-img-top')
                .addClass('text-center')
                .addClass('mx-auto d-block')
                .addClass('spotify-image')
                .addClass('rounded')
                .appendTo(card_div);

           var card_data = $("<div>")
               .addClass('card-block')
               .append('<h4 class="card-title text-center">' + name + '</h4>')
               .append('<p class="card-text text-center">Followers: ' + numberWithCommas(followers) + '</p>')
               .appendTo(card_div);
        });
    });