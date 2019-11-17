import { SolarAge } from './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $("form#ageForm").submit(function(event){
    event.preventDefault();

    let userAge = parseFloat($("#userAge").val());
    let earthAge = new SolarAge(userAge);

    $(".earthAge").text(earthAge.earthAge);
    $(".mercuryAge").text(earthAge.mercury);
    $(".venusAge").text(earthAge.venus);
    $(".marsAge").text(earthAge.mars);
    $(".jupiterAge").text(earthAge.jupiter);

    $(".earthTimeLeft").text(earthAge.earthLeft);
    $(".mercuryTimeLeft").text(earthAge.mercuryLeft);
    $(".venusTimeLeft").text(earthAge.venusLeft);
    $(".marsTimeLeft").text(earthAge.marsLeft);
    $(".jupiterTimeLeft").text(earthAge.jupiterLeft);

    console.log("BE earthAge: ",earthAge);

  });
});
