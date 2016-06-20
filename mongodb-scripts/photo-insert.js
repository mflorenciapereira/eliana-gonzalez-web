use eliana-gonzalez-website;


var findIdByName = function(name){
	return db.photocategories.findOne({name:name})._id;
}

// CATEGORIES
db.photocategories.drop();
db.photocategories.insert({name: "Headshots"});
db.photocategories.insert({name: "Performance"});
db.photocategories.insert({name: "Posing"});

//PHOTOS
db.photos.drop();

//Headshots
db.photos.insert({category: findIdByName("Headshots"), url: "sections/portfolio/models/photos/headshots/1.jpg"});
db.photos.insert({category: findIdByName("Headshots"), url: "sections/portfolio/models/photos/headshots/2.jpg"});
db.photos.insert({category: findIdByName("Headshots"), url: "sections/portfolio/models/photos/headshots/3.jpg"});
db.photos.insert({category: findIdByName("Headshots"), url: "sections/portfolio/models/photos/headshots/4.jpg"});
db.photos.insert({category: findIdByName("Headshots"), url: "sections/portfolio/models/photos/headshots/5.jpg"});
db.photos.insert({category: findIdByName("Headshots"), url: "sections/portfolio/models/photos/headshots/6.jpg"});
db.photos.insert({category: findIdByName("Headshots"), url: "sections/portfolio/models/photos/headshots/7.jpg"});
db.photos.insert({category: findIdByName("Headshots"), url: "sections/portfolio/models/photos/headshots/8.jpg"});
db.photos.insert({category: findIdByName("Headshots"), url: "sections/portfolio/models/photos/headshots/9.jpg"});
db.photos.insert({category: findIdByName("Headshots"), url: "sections/portfolio/models/photos/headshots/10.jpg"});
db.photos.insert({category: findIdByName("Headshots"), url: "sections/portfolio/models/photos/headshots/11.jpg"});
db.photos.insert({category: findIdByName("Headshots"), url: "sections/portfolio/models/photos/headshots/12.jpg"});

//Performance
db.photos.insert({category: findIdByName("Performance"), url: "sections/portfolio/models/photos/performance/1.jpg"});
db.photos.insert({category: findIdByName("Performance"), url: "sections/portfolio/models/photos/performance/2.jpg"});
db.photos.insert({category: findIdByName("Performance"), url: "sections/portfolio/models/photos/performance/3.jpg"});
db.photos.insert({category: findIdByName("Performance"), url: "sections/portfolio/models/photos/performance/4.jpg"});

//Posing
db.photos.insert({category: findIdByName("Posing"), url: "sections/portfolio/models/photos/posing/1.jpg"});
db.photos.insert({category: findIdByName("Posing"), url: "sections/portfolio/models/photos/posing/2.jpg"});
db.photos.insert({category: findIdByName("Posing"), url: "sections/portfolio/models/photos/posing/3.jpg"});
db.photos.insert({category: findIdByName("Posing"), url: "sections/portfolio/models/photos/posing/4.jpg"});
db.photos.insert({category: findIdByName("Posing"), url: "sections/portfolio/models/photos/posing/5.jpg"});
db.photos.insert({category: findIdByName("Posing"), url: "sections/portfolio/models/photos/posing/6.jpg"});
db.photos.insert({category: findIdByName("Posing"), url: "sections/portfolio/models/photos/posing/7.jpg"});
db.photos.insert({category: findIdByName("Posing"), url: "sections/portfolio/models/photos/posing/8.jpg"});
db.photos.insert({category: findIdByName("Posing"), url: "sections/portfolio/models/photos/posing/9.jpg"});
			