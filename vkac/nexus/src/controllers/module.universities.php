<?php
// Set headers to allow CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json; charset=utf-8');

require_once './../core/app.database.php';
require_once './../core/app.initiator.php';
require_once './../repo/data.universities.php';

if($_GET["action"]=='COUNTRIES_VIEW' && $_SERVER['REQUEST_METHOD']=='GET'){ 
 $query = $universityModule->query_filter_countries();
 echo $database->getJSONData($query);
}
else if($_GET["action"]=='UNIVERSITIES_VIEW' && $_SERVER['REQUEST_METHOD']=='GET'){
 $country = $_GET["country"];
 $query = $universityModule->query_list_userAddress($country);
 echo $database->getJSONData($query);
} 
else if($_GET["action"]=='UNIVERSITIES_FILTER_SCORE' && $_SERVER['REQUEST_METHOD']=='POST'){
 $htmlData = json_decode( file_get_contents('php://input'), true );	
 $duolingo = ''; if( array_key_exists("DuolingoScore", $htmlData) ){ $duolingo = $htmlData["DuolingoScore"]; }
 $country = ''; if( array_key_exists("Country", $htmlData) ){ $country = $htmlData["Country"]; }
 $location = ''; if( array_key_exists("PreferredLocation", $htmlData) ){ $location = $htmlData["PreferredLocation"]; }
 $toefl = 0; if( array_key_exists("TOEFL_OverallScore", $htmlData) ){ $toefl = $htmlData["TOEFL_OverallScore"]; }
 $ielts = 0; if( array_key_exists("IELTS_OverallScore", $htmlData) ){ $ielts = $htmlData["IELTS_OverallScore"]; }
 $pte = 0; if( array_key_exists("PTE_OverallScore", $htmlData) ){ $pte = $htmlData["PTE_OverallScore"]; }
 $gpa = 0; if( array_key_exists("BTechDegreeGPA05", $htmlData) ){ $gpa = $htmlData["BTechDegreeGPA05"]; }
 $gre = 0; if( array_key_exists("GRE_OverallScore", $htmlData) ){ $gre = $htmlData["GRE_OverallScore"]; }
 $query = $universityModule->query_filter_universities($country, $location, $toefl, $ielts, $pte, $gpa, $gre, $duolingo);
 echo $database->getJSONData($query);
}

// 

?>