import { SolarAge } from './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $("form#ageForm").submit(function(event){
    event.preventDefault();

    let earthAge = new SolarAge(40);
    earthAge.planets;

    console.log("BE earthAge: ",earthAge);
    console.log("BE earthAGE.ageOnEarth: ",earthAge.ageOnEarth);

  });
});
