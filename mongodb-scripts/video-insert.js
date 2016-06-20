use eliana-gonzalez-website;

db.videos.drop();

db.videos.insert({
					url: "assets/videos/dontTellMama.mp4", 
					type: "video/mp4",
					title: "Don't tell momma!",
					description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
					airdate:new Date("2012-01-05"),
					producer: "OWT True TV",
					thumbUrl:"assets/video-thumbs/dontTellMomma.png"
					
});
		
db.videos.insert({
					url: "assets/videos/musicHall.mp4", 
					type: "video/mp4",
					title: "Maybe this time",
					description: "Music hall.",
					airdate:new Date("2014-07-15"),
					producer: "Telefe",
					thumbUrl:"assets/video-thumbs/maybeThisTime.png"
					
});

db.videos.insert({
					url: "assets/videos/musicHall.mp4", 
					type: "video/mp4",
					title: "Maybe this time 2",
					description: "Music hall.",
					airdate:new Date("2014-11-15"),
					producer: "Telefe",
					thumbUrl:"assets/video-thumbs/maybeThisTime.png"
					
});
		
