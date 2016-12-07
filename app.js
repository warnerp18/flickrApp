(function (place, test, apiSig){
  console.log('phoot');
  console.log(test)

  function Flickr(place, test, apiSig){
    this.init(place,test, apiSig);
  }
  Flickr.prototype = {
    init: function(place, test, apiSig) {
    console.log(place);
    console.log();
      this.key = "1a56d279a88a12572362be86e002b99b",
      this.Secret = "15a8ecb093fa0fd7",
      this.getJSON(place, test, apiSig);
    },
    getJSON: function(place, test, apiSig){
      const Key = "1a56d279a88a12572362be86e002b99b"
      const photoSetKey = "c9deaa7c24dc04a72c26b486333db809"
      const Secret = "15a8ecb093fa0fd7"
      console.log(test);
     // const src = `https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=${Key}&user_id=149595845@N07&format=json&per_page=20&nojsoncallback=1`;
        var src = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${photoSetKey}&photoset_id=${test}&user_id=149595845%40N07&format=json&nojsoncallback=1&auth_token=72157677413636586-9036f2397496d8a7&api_sig=${apiSig}`
        return $.getJSON(src)
      .then(function(data){
        var imgSrc;
        console.log(data);
//        for( photo in data.photos.photo){
        for( photo in data.photoset.photo){
         // console.log(data.photoset.photo[photo]);
          imgSrc = data.photoset.photo[photo];
          var img = 'https://farm' + imgSrc.farm + '.staticflickr.com/' + imgSrc.server + '/' + imgSrc.id + '_' + imgSrc.secret + '_b.jpg';
          $('#flickr').append(`<div class='images'><img src=${img} /></div>`)


          //imgSrc = data.photos.photo[photo];
          //var img = 'https://farm' + imgSrc.farm + '.staticflickr.com/' + imgSrc.server +
          //'/' + imgSrc.id + '_' + imgSrc.secret + '_b.jpg';
          //$('#flickr').append(`<img src=${img} />`)
        }
      })
    },

  }
//  document.addEventListener( "DOMContentLoaded", function() {
  const iceland = document.querySelector('.iceland');
  const nepal = document.querySelector('.nepal');

  iceland.addEventListener( "click", function() {
    let className = this.className;
    let photoSetId = '72157673604746003';
    let api_sig = '128de85ee199da264ff9fc1bf30e69af';
    let flickrFeed = new Flickr(className, photoSetId, api_sig);

  });

  nepal.addEventListener( "click", function() {
    let className = this.className;
    let photoSetId = '72157675794815032';
    let api_sig = '8be0737cf79ad320ac3b8fc0a34c698a';

    console.log(photoSetId)
    let flickrFeed = new Flickr(className, photoSetId, api_sig);

  });
})();
