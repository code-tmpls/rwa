<!DOCTYPE html>
<html lang="en">
<head>
  <title>Nellutla L N Rao's Resume</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body { font-family: Arial, sans-serif !important;font-size:13px;line-height:22px; }
.badge { font-family: Arial, sans-serif;font-size:12px; }
.f12 { font-size:12px; }
.f16 { font-size:16px; }
.f18 { font-size:18px; }
.f24 { font-size:24px; }
.mLeft5p { margin-left:5px; }
.mRight5p { margin-right:5px; }
.mtop10p { margin-top:10px; }

.white { color:#fff; }
.black { color:#000; }
.grey-1 { color:#eee; }
.grey-3 { color:#aaa; }
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
.resume-overlay { height: 100%;width: 0;position: fixed;z-index: 1;top: 0;right: 0;background-color:#21252b;color:#999;
  overflow-x: hidden;transition: 0.6s; }
/* my-resume-overview ::: END */


</style>
<script>
$(document).ready(function(){
 init();
});
function init(){
 var currentUrlWithFragment = window.location.href;
 var fragment = window.location.hash.substring(1);
 if (fragment){ resume('open'); }
}
function resume(status) { 
 document.getElementById("my-resume-overview").style.width = (status ==='open')?'100%':'0%';
}
</script>
</head>
<body>
 
<div class="container-fluid">
<div class="row">
<div class="col-md-5">
 
</div><!--/.col-sm-3 -->
<div class="col-md-4">
</div><!--/.col-sm-4 -->
<div class="col-md-3">
<!-- -->
<?php include_once 'templates/resume/profileCard.php'; ?>
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
