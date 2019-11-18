import { SolarAge } from './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $("form#ageForm").submit(function(event){
    event.preventDefault();

    let userAge = parseFloat($("#userAge").val());
    let averageLifespan = 72.2;
    let earthAge = new SolarAge(userAge, averageLifespan);

    $(".earthAge").text(earthAge.earthAge);
    $(".mercuryAge").text(earthAge.ageOnMercury);
    $(".venusAge").text(earthAge.ageOnVenus);
    $(".marsAge").text(earthAge.ageOnMars);
    $(".jupiterAge").text(earthAge.ageOnJupiter);

    $(".earthTimeLeft").text(earthAge.timeRemainingOnEarth);
    $(".mercuryTimeLeft").text(earthAge.timeRemainingOnMercury);
    $(".venusTimeLeft").text(earthAge.timeRemainingOnVenus);
    $(".marsTimeLeft").text(earthAge.timeRemainingOnMars);
    $(".jupiterTimeLeft").text(earthAge.timeRemainingOnJupiter);

    console.log("BE earthAge: ",earthAge);

  });
});
