<?php
class UniversityModule {
 function query_filter_countries(){
    return "SELECT DISTINCT(Country) FROM universities;";
 }
 function query_list_userAddress($country){
  return "SELECT * FROM universities WHERE Country='".$country."';";
 }
 function query_filter_universities($country, $location, $toefl, $ielts, $pte, $gpa, $gre, $duolingo) {
  $query = "SELECT * FROM universities WHERE ";
  $conditions = [];
  if (strlen($country)>0) { $conditions[] = "Country LIKE '%$country%'"; }
  if (strlen($location)>0) { $conditions[] = "Location LIKE '%$location%'"; }
  if ($toefl>0) { $conditions[] = "TOEFL <= $toefl"; }
  if ($ielts>0) { $conditions[] = "IELTS <= $ielts"; }
  if ($pte>0) { $conditions[] = "PTE <= $pte"; }
  if ($gpa>0) { $conditions[] = "GPA <= $gpa"; }
  if ($gre>0) { $conditions[] = "GRE <= $gre"; }
  if ($duolingo>0) { $conditions[] = "Duolingo <= $duolingo"; }
  $query .= implode(" AND ", $conditions);
  return $query;
 }

}

$universityModule = new UniversityModule();