<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body { font-family: Arial, sans-serif !important;font-size:13px;line-height:22px; }
body::-webkit-scrollbar-track { -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.3);box-shadow: inset 0 0 2px rgba(0,0,0,0.3);background-color: #F5F5F5; }         
body::-webkit-scrollbar { width:6px;height: 6px;background-color: #F5F5F5; }        
body::-webkit-scrollbar-thumb { background-color: #000000; }
.badge { font-family: Arial, sans-serif;font-size:12px; }
.f12 { font-size:12px; }
.f16 { font-size:16px; }
.f18 { font-size:18px; }
.f24 { font-size:24px; }
.mtop3p { margin-top:3px; }
.mRight3p { margin-right:3px; }
.mbottom3p { margin-bottom:3px; }
.mtop5p { margin-top:5px; }
.mbottom5p { margin-bottom:5px; }
.mLeft5p { margin-left:5px; }
.mRight5p { margin-right:5px; }
.mtop10p { margin-top:10px; }

.bg-grey-2 { background-color:#ccc; }
.white { color:#fff; }
.black { color:#000; }
.grey-1 { color:#eee; }
.grey-3 { color:#aaa; }
.grey-8 { color:#555; }
.yellow-5 { color:#ffc107; }
.pink-5 { color:#e99393; }


/* my-resume-overview ::: START */
.resume-profilepic { width:120px;height:120px;border-radius:50%; }
.resume-title { text-transform:uppercase;color:#ddd; }
.resume-socialMedia { display:flex; }
.resume-socialMedia-icon { flex-grow:1;padding:10px; }
.resume-header-main { text-transform:uppercase;color:#fff; }
.resume-header-sub1 { text-transform:uppercase;background-color:#aaa;color:#282c34; }
.resume-card { border-color:#282c34; }
.resume-cardBody { background-color:#282c34;color:#999; }
.resume-overlay { height: 100%;width: 0;position: fixed;z-index: 3;top: 0;right: 0;background-color:#21252b;color:#999;
  overflow-x: hidden;transition: 0.6s; }
.resume-overlay { font-family: Arial, sans-serif !important;font-size:13px;line-height:22px; }
.resume-overlay::-webkit-scrollbar-track { -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.3);box-shadow: inset 0 0 2px rgba(0,0,0,0.3);background-color: #F5F5F5; }         
.resume-overlay::-webkit-scrollbar { width:6px;height: 6px;background-color: #F5F5F5; }        
.resume-overlay::-webkit-scrollbar-thumb { background-color: #000000; }
/* my-resume-overview ::: END */


/* icon ::: START */
.blog-logo-span {
 animation: shake 3s;
 animation-iteration-count: infinite;	
}
.blog-logo {
 box-shadow:1px 1px 1px 1px #ccc;color:#d5074d;margin-top:15px;
 border-radius:50%;border:2px solid #d5074d;padding-top:5px;padding-bottom:5px;padding-right:6.8px;padding-left:5px;font-size:22px;transform: rotate(-42deg);
}
@keyframes shake {
  0% { transform: translate(0.05px, 0.05px) rotate(0deg); }
  10% { transform: translate(-0.05px, -0.1px) rotate(-0.08deg); }
  20% { transform: translate(-0.15px, 0px) rotate(0.08deg); }
  30% { transform: translate(0.15px, 0.1px) rotate(0deg); }
  40% { transform: translate(0.05px, -0.05px) rotate(0.08deg); }
  50% { transform: translate(-0.05px, 0.1px) rotate(-0.08deg); }
  60% { transform: translate(-0.15px, 0.05px) rotate(0deg); }
  70% { transform: translate(0.15px, 0.05px) rotate(-0.08deg); }
  80% { transform: translate(-0.05px, -0.05px) rotate(0.08deg); }
  90% { transform: translate(0.05px, 0.1px) rotate(0deg); }
  100% { transform: translate(0.05px, -0.1px) rotate(-0.08deg); }
}
/* icon ::: END */

</style>
<script>
$(document).ready(function(){
 init();
});

let list1 = [{
		tags:['Java','Spring Boot', 'Spring Cloud'],
		title:'Building a Microservices Architecture with Spring Boot and Spring Cloud',
		desc:'Dive into the world of design patterns with a clear example distinguishing Abstract Factory and Factory Method approaches',
		keywords:["Abstract Factory","Factory Method","SOLID's Principle - Open/Closed principle"],
		createdOn:'03 January 2022',
		minRead: 5	
	},{
		tags:['Java Design Patterns'],
		title:'An Example to understand the difference between <u>Abstract Factory</u> Design Pattern and <u>Factory Method</u> Design Pattern.',
		desc:'Dive into the world of design patterns with a clear example distinguishing Abstract Factory and Factory Method approaches',
		keywords:["Abstract Factory","Factory Method","SOLID's Principle - Open/Closed principle"],
		createdOn:'03 January 2022',
		minRead: 5	
	}];

let list2 = [{
		tags:['Java','Spring Boot', 'Spring Cloud'],
		title:'Building a Microservices Architecture with Spring Boot and Spring Cloud',
		desc:'Dive into the world of design patterns with a clear example distinguishing Abstract Factory and Factory Method approaches',
		keywords:["Abstract Factory","Factory Method","SOLID's Principle - Open/Closed principle"],
		createdOn:'03 January 2022',
		minRead: 5	
	},{
		tags:['Java Design Patterns'],
		title:'An Example to understand the difference between <u>Abstract Factory</u> Design Pattern and <u>Factory Method</u> Design Pattern.',
		desc:'Dive into the world of design patterns with a clear example distinguishing Abstract Factory and Factory Method approaches',
		keywords:["Abstract Factory","Factory Method","SOLID's Principle - Open/Closed principle"],
		createdOn:'03 January 2022',
		minRead: 5	
	}];
	
let list3 = [{
		tags:['Java','Spring Boot', 'Spring Cloud'],
		title:'Building a Microservices Architecture with Spring Boot and Spring Cloud',
		desc:'Dive into the world of design patterns with a clear example distinguishing Abstract Factory and Factory Method approaches',
		keywords:["Abstract Factory","Factory Method","SOLID's Principle - Open/Closed principle"],
		createdOn:'03 January 2022',
		minRead: 5	
	},{
		tags:['Java Design Patterns'],
		title:'An Example to understand the difference between <u>Abstract Factory</u> Design Pattern and <u>Factory Method</u> Design Pattern.',
		desc:'Dive into the world of design patterns with a clear example distinguishing Abstract Factory and Factory Method approaches',
		keywords:["Abstract Factory","Factory Method","SOLID's Principle - Open/Closed principle"],
		createdOn:'03 January 2022',
		minRead: 5	
	}];
	
let list4 = [{
		tags:['Java','Spring Boot', 'Spring Cloud'],
		title:'Building a Microservices Architecture with Spring Boot and Spring Cloud',
		desc:'Dive into the world of design patterns with a clear example distinguishing Abstract Factory and Factory Method approaches',
		keywords:["Abstract Factory","Factory Method","SOLID's Principle - Open/Closed principle"],
		createdOn:'03 January 2022',
		minRead: 5	
	},{
		tags:['Java Design Patterns'],
		title:'An Example to understand the difference between <u>Abstract Factory</u> Design Pattern and <u>Factory Method</u> Design Pattern.',
		desc:'Dive into the world of design patterns with a clear example distinguishing Abstract Factory and Factory Method approaches',
		keywords:["Abstract Factory","Factory Method","SOLID's Principle - Open/Closed principle"],
		createdOn:'03 January 2022',
		minRead: 5	
	}];

function init(){
 var currentUrlWithFragment = window.location.href;
 var fragment = window.location.hash.substring(1);
 if (fragment){ resume('open'); }
 load_blog_list('bloglist1',list1, {
	colors:['success','primary','success','primary'],
	bgColors:['#f6fff7','#eaf9ff','#f6fff7','#eaf9ff']
 });
 load_blog_list('bloglist2',list2, {
	colors:['primary','success','primary','success'],
	bgColors:['#eaf9ff','#f6fff7','#eaf9ff','#f6fff7']
 });
 load_blog_list('bloglist3',list3, {
	colors:['success','primary','success','primary'],
	bgColors:['#f6fff7','#eaf9ff','#f6fff7','#eaf9ff']
 });
 load_blog_list('bloglist4',list2, {
	colors:['primary','success','primary','success'],
	bgColors:['#eaf9ff','#f6fff7','#eaf9ff','#f6fff7']
 });
 load_blog_list('bloglist5',list1, {
	colors:['success','primary','success','primary'],
	bgColors:['#f6fff7','#eaf9ff','#f6fff7','#eaf9ff']
 });
 
 load_blogKeywords('blogKeywords');
}

function resume(status) { 
 let pageTitle = 'NellutlaLNRao | My Tech';
 if(status ==='open'){
	pageTitle = "NellutlaLNRao | My Resume";
 }
 document.title = pageTitle;
 document.getElementById("my-resume-overview").style.width = (status ==='open')?'100%':'0%';
 document.body.style.overflow = (status ==='open')?'hidden':'scroll';
}

function load_blog_list(id,list, pattern){
 let content='<div>';
 for(let i=0;i<list?.length;i++){
	const tags = list[i]?.tags;
	content+='<div class="blog-list-item" style="margin-bottom:15px;padding:15px;border-radius:8px;border:1px solid #ccc;background-color:'
	+pattern?.bgColors[i%4]+';">';
	for(let j=0;j<tags?.length;j++){
	content+='<span class="badge bg-'+pattern?.colors[j]+'" style="margin-right:5px;">'+tags[j]+'</span>';
	}
	content+='<div style="margin-top:12px;">';
	content+='<span style="font-size:16px;"><b>'+list[i]?.title+'</b></span>';
	content+='</div>';
	
	content+='<div class="grey-8" style="margin-top:8px">'+list[i]?.desc+'</div>';
	
	content+='<div style="margin-top:8px;">';
	for(let j=0;j<list[i]?.keywords?.length;j++){
	content+='<span class="badge bg-grey-2 grey-8 mtop3p mbottom3p mRight3p"># '+list[i]?.keywords?.[j]+'</span>';	
	}
	content+='</div>';
	
	content+='<div style="font-size:12px;color:#777;margin-top:10px;">';
	content+='<i class="fa fa-file-text" style="margin-right:3px;" aria-hidden="true"></i> Posted on '+list[i]?.createdOn;
	content+='<span class="pull-right"><i class="fa fa-dot-circle-o" style="margin-right:3px;" aria-hidden="true"></i> '+list[i]?.minRead+' min read</span>';
	content+='</div>';
	
	content+='</div>';
 }
 content+='</div>';
 document.getElementById(id).innerHTML=content;
}
</script>
<style>
.blog-list-item { cursor:pointer; }
.blog-list-item:hover { background-color:#fff4f3 !important; }
</style>
</head>
<body>
 
<!-- -->
<!--<nav class="navbar navbar-expand-sm">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
		<div class="blog-logo-span"><i class="fa fa-rocket blog-logo" aria-hidden="true"></i></div>
	</a>
  </div>
</nav>-->
<!-- -->

<div class="container-fluid">
<div class="row">
<div class="col-md-9">
<!-- -->
<div class="row">
 <div class="col-md-12" style="margin-top:15px;">
  <span style="font-size:18px;"><b>Trending Frontend Development Articles</b></span>
  <button class="btn btn-outline-dark btn-sm pull-right f12"><b>VIEW MORE POSTS
  <i class="fa fa-arrow-right" style="margin-left:5px;"></i>
  </b></button>
  <hr/>
 </div>
</div>
<div class="row">
 <div id="bloglist1" class="col-md-6"></div><!--/.col-sm-6 -->
 <div id="bloglist2" class="col-md-6"></div><!--/.col-sm-6 -->
</div>

<div class="row">
 <div class="col-md-12" style="margin-top:15px;">
 <span style="font-size:18px;"><b>THIS MONTH TRENDING</b></span>
 <button class="btn btn-outline-dark btn-sm pull-right f12"><b>VIEW MORE POSTS
 <i class="fa fa-arrow-right" style="margin-left:5px;"></i>
 </b></button>
 <hr/>
 </div>
</div>
<div class="row">
 <div id="bloglist3" class="col-md-4"></div><!--/.col-sm-4 -->
 <div id="bloglist4" class="col-md-4"></div><!--/.col-sm-4 -->
 <div id="bloglist5" class="col-md-4"></div><!--/.col-sm-4 -->
</div>
<!-- -->
</div>
<div class="col-md-3">
<!-- -->
<?php include_once 'templates/resume/profileCard.php'; ?>
<?php include_once 'templates/resume/about-blog.php'; ?>

<!-- -->
</div><!--/.col-sm-4 -->
</div><!--/.row -->
</div><!--/.container-fluid -->

<div id="my-resume-overview" class="resume-overlay">
 <!-- -->
 <div class="container-fluid mt-3">
  <div class="row">
    <div class="col-sm-3 col-xxl-2 col-xl-3 px-3">
	  <?php include_once 'templates/resume/left.php'; ?>
    </div>
    <div class="col-sm-4 col-xxl-5 col-xl-4 px-3">
      <?php include_once 'templates/resume/techStack.php'; ?>
    </div>
	<div class="col-sm-4 col-xxl-5 col-xl-5 px-3">
	  <?php include_once 'templates/resume/proExp.php'; ?>
	</div>
  </div>
</div>
 <!-- -->
</div>

</body>
</html>
