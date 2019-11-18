import { SolarAge } from './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){

  $("form#ageForm").submit(function(event){
    event.preventDefault();

    let userAge = parseFloat($("#userAge").val());
    let averageLifespan = parseFloat($("#averageLifespan").val());
    let earthAge = new SolarAge(userAge, averageLifespan);

    function domTrigger(){
      $(".timeOnPlanets").fadeOut(100);
      $(".timeRemaining").fadeOut(100);
      $(".timeBeyondAverageOn").fadeOut(100);
      if (userAge<=averageLifespan) {
        $(".timeOnPlanets").slideDown(1000);
        $(".timeRemaining").slideDown(2000);
      } else if (userAge>averageLifespan) {
        $(".timeOnPlanets").slideDown(1000);
        $(".timeBeyondAverageOn").slideDown(2000);
      } else {
        console.log("domTrigger error.");
      }
    }

    domTrigger();

    $(".averageLifespan").text(averageLifespan);

    // AGE DIV
    $(".earthAge").text(earthAge.earthAge);
    $(".mercuryAge").text(earthAge.ageOnMercury);
    $(".venusAge").text(earthAge.ageOnVenus);
    $(".marsAge").text(earthAge.ageOnMars);
    $(".jupiterAge").text(earthAge.ageOnJupiter);

    // TIME REMAINING DIV
    $(".earthTimeLeft").text(earthAge.timeRemainingOnEarth);
    $(".mercuryTimeLeft").text(earthAge.timeRemainingOnMercury);
    $(".venusTimeLeft").text(earthAge.timeRemainingOnVenus);
    $(".marsTimeLeft").text(earthAge.timeRemainingOnMars);
    $(".jupiterTimeLeft").text(earthAge.timeRemainingOnJupiter);

    // TIME BEYOND AVERAGE DIV
    $(".earthTimeBeyondAverageOn").text(earthAge.timeBeyondAverageOnEarth);
    $(".mercuryTimeBeyondAverageOn").text(earthAge.timeBeyondAverageOnMercury);
    $(".venusTimeBeyondAverageOn").text(earthAge.timeBeyondAverageOnVenus);
    $(".marsTimeBeyondAverageOn").text(earthAge.timeBeyondAverageOnMars);
    $(".jupiterTimeBeyondAverageOn").text(earthAge.timeBeyondAverageOnJupiter);

    console.log("BE earthAge: ",earthAge);

  });
});
