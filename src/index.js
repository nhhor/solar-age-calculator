import { SolarAge } from './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $("form#ageForm").submit(function(event){
    event.preventDefault();

    let userAge = $("#userAge").val();
    let earthAge = new SolarAge(userAge);

    $(".earthAge").text(earthAge.earthAge);
    $(".mercuryAge").text(earthAge.mercury);
    $(".venusAge").text(earthAge.venus);
    $(".marsAge").text(earthAge.mars);
    $(".jupiterAge").text(earthAge.jupiter);

    // earthAge.planets;
    console.log("BE earthAge: ",earthAge);

  });
});
