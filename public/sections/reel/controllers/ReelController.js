angular.module('ElianaGonzalesWebsite.Reel')
    .controller('ReelCtrl',
        ["$sce", "$timeout", "ReelService", function ($sce, $timeout, ReelService) {
            reel = this;
            reel.state = null;
            reel.API = null;
            reel.currentVideo = 0;
			reel.thumbLimit=2;
			reel.thumbOffset=0;
			
			reel.showPrevious;
			reel.showNext;
			
			reel.videos;
			
			reel.loadVideos = function(){
				console.log("calle:"+arguments.callee.caller.toString());
				reel.videos = [];				
				
				ReelService.query().$promise.then(function(result){
					console.log("resuld de la query:"+result);
					var index = 0;
						result.forEach(function (video) {        
							console.log("un video" +video);						
							var videoForPlayer = {
								id: index,
								sources: [{src: $sce.trustAsResourceUrl(video.url), type: video.type}],
								title: video.title,
								description: video.description,
								airdate: video.airdate,
								producer: video.producer,
								thumb: video.thumbUrl
							}
							reel.videos.push(videoForPlayer); 
							index++;
						});
						reel.currentVideoSelected = reel.videos[0];
						reel.setConfiguration();
						reel.updateNavigation();
							
						 
				}, function(error){
					console.log("Error:"+error);
					
				})
			};
			
			reel.loadVideos();
			
			reel.setConfiguration = function(){
				
				reel.config = {
                preload: "none",
                autoHide: false,
                autoHideTime: 3000,
                autoPlay: false,
                sources: reel.videos[0].sources,
                theme: {
                    url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
                },
                plugins: {
                    poster: "http://www.videogular.com/assets/images/videogular.png"
                }
            };
			};


            reel.onPlayerReady = function(API) {
                reel.API = API;				
            };
			
			

            reel.onCompleteVideo = function() {
                reel.isCompleted = true;

                reel.currentVideo++;

                if (reel.currentVideo >= reel.videos.length) reel.currentVideo = 0;

                reel.setVideo(reel.currentVideo);
            };

            
            					
				

            reel.setVideo = function(index) {
				console.log("index recibido:"+index)
                reel.API.stop();
                reel.currentVideo = index;
                reel.config.sources = reel.videos[index].sources;
				reel.currentVideoSelected=reel.videos[index];
                $timeout(reel.API.play.bind(reel.API), 100);
				console.log(index);
            };
			
			reel.previousThumb = function(){
				if(reel.thumbOffset>0)
					reel.thumbOffset-=reel.thumbLimit;
				reel.updateNavigation();
			};
			
			reel.nextThumb = function(){
				if(reel.thumbOffset<reel.videos.length-reel.thumbLimit)
					reel.thumbOffset+=reel.thumbLimit;
				reel.updateNavigation();
			};
			
			reel.updateNavigation = function(){
				if(reel.thumbOffset==0){
					reel.showPrevious=false;
				}else{
					reel.showPrevious=true;
				};
				
				if(reel.thumbOffset >= (reel.videos.length-reel.thumbLimit)){
					reel.showNext=false;
				}else{
					reel.showNext=true;
					
				}
				
			}
			
			
			 
        }]
		
					
    );