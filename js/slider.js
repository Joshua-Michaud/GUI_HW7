/*
Name: Joshua Michaud
Email: Joshua_Michaud@student.uml.edu
Affiliation: Student at Umass Lowell Computer Science
Date: 11/28/2020
Description: Using the jQuery UI Slider and Tab Widgets
Location: github
91.461 Assignment: Assignment #7
Joshua Michaud, UMass Lowell Computer Science,
Copyright (c) 2020 by Joshua Michaud. All rights reserved. May be
freely copied or excerpted for educational purposes with credit to the author.
*/
$(function() {
  //sets up the slider for Xmin input
  $("#xminSlider").slider({
    orientation: "horizontal",
    //gives a range of -50 to 50 for the slider
    min: -50,
    max: 50,
    animation: true,
    value: 0,
    // Updates the handle once the slider moves.
    slide: function(event, ui) {
      $("#xMin").val(ui.value);
      //submits the mult table info when ever slider gets updated
      submit();
    }
  });
  //https://stackoverflow.com/questions/12795307/jquery-ui-slider-change-value-of-slider-when-changed-in-input-field
  //.change(function)s will update the slider if the input field has changed its value
  $("#xMin").change(function() {
    let xminValue = $("#xMin").val();
    $("#xminSlider").slider("value", xminValue);
    //submits the mult table info when ever input field gets updated
    submit();
  });
  $("#xmaxSlider").slider({
    orientation: "horizontal",
    min: -50,
    max: 50,
    animation: true,
    value: 0,
    // Updates the handle once the slider moves.
    slide: function(event, ui) {
      $("#xMax").val(ui.value);
      submit();
    }
  });
  $("#xMax").change(function() {
    let xmaxValue = $("#xMax").val();
    $("#xmaxSlider").slider("value", xmaxValue);
    submit();
  });

  $("#yminSlider").slider({
    orientation: "horizontal",
    min: -50,
    max: 50,
    animation: true,
    value: 0,
    slide: function(event, ui) {
      $("#yMin").val(ui.value);
      submit();
    }
  });
  $("#yMin").change(function() {
    let yminValue = $("#yMin").val();
    $("#yminSlider").slider("value", yminValue);
    submit();
  });

  $("#ymaxSlider").slider({
    orientation: "horizontal",
    min: -50,
    max: 50,
    animation: true,
    value: 0,
    slide: function(event, ui) {
      $("#yMax").val(ui.value);
      submit();
    }
  });
  $("#yMax").change(function() {
    let ymaxValue = $("#yMax").val();
    $("#ymaxSlider").slider("value", ymaxValue);
    submit();
  });
});
