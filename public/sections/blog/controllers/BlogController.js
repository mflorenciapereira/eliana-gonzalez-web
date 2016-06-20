angular.module('ElianaGonzalesWebsite.Blog')
    .controller('BlogCtrl', ['BlogService',
        function (BlogService) {
            blog = this;		
			
			blog.selectedTag='All';
			blog.selectedFrom = '';
			blog.selectedTo = new Date();
			blog.limit = 2;
			blog.page=1;
			blog.showNext=false;
			blog.showPrevious=false;
			blog.totalCurrentQuery;
			
			
			
			blog.tags = [];      
				
			
			blog.filteredPosts = [];
			
			blog.convertDate = function(date){
				var month = date.getMonth() + 1;
				return date.getFullYear()+"-"+month+"-"+date.getDate()
			}
			
			
			blog.filterMyQuery = function(){
				
				var from ;
				if(blog.selectedFrom){
					from =blog.convertDate(blog.selectedFrom);
				};
				var to;
				
				if(blog.selectedTo){
					to =blog.convertDate(blog.selectedTo);
				}
				
				BlogService.filter(blog.limit, blog.page,blog.selectedTag,from, to).then(function(result){
					blog.filteredPosts = [];
					result.posts.forEach(function(post){
						post.date = moment(post.date).format('DD/MM/YYYY');
						blog.filteredPosts.push(post);
					})
					console.log("fecha es:"+moment(result.posts[0].date));
					blog.totalCurrentQuery=result.total;
					blog.updateNavigation();
					console.log(result);
					
				});
				
				
				
			};
			
			
			blog.filterTag = function(myTag){
				blog.selectedTag=myTag;
				blog.page=1;
				blog.filterMyQuery();
				console.log("filtrando");
				
			};

			blog.submitDate = function(){
				blog.selectedTag='All';	
				blog.page=1;
				blog.filterMyQuery();				
			}
			
			blog.clearDate = function(){
				blog.selectedFrom='';
				blog.selectedTo=new Date();
				blog.selectedTag='All';	
				
			}
			
			blog.next = function(){				
				blog.page++;
				blog.filterMyQuery();	
			}
			
			blog.previous = function(){
				blog.page--;
				blog.filterMyQuery();	
			}
			
			blog.updateNavigation = function(totalPages){
				if(blog.page==1){
					blog.showPrevious=false;					
				}else{
					blog.showPrevious=true;
				}
				var lastPage =Math.ceil(blog.totalCurrentQuery/blog.limit);
				console.log("lastpasge"+lastPage+ "dsds" +blog.page);
				if(blog.page==lastPage || lastPage==0){
					console.log("showing");
					blog.showNext=false;
				}else{
					blog.showNext=true;
				}
				
			}
			
			blog.getAllTags = function(){
				BlogService.findAllTags().then(function(result){
					blog.tags = result;
					blog.tags.unshift('All');
				})
			}

			blog.getAllTags();
			blog.filterMyQuery();
			
				
				
        }
		
		]			
    );