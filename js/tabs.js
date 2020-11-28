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
//https://jqueryui.com/tabs/#manipulation
//got help from this website to get tabs
let j = 0;
$(function () {

  let tabTemplate = "<li id = 'tabDelete'><a href='#{href}'>#{label}</a> <span  class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>",
  tabCounter = 0;

  let tabs = $("#tabs").tabs();

  function addTab() {
    //sets variables
    let tabContent = document.querySelector(".table");
    //sets the label of the name of the newley created tab with new values from the input fields
    let label = "X {" + $("#xMin").val() + " to " + $("#xMax").val() + "} by Y{" + $("#yMin").val() + " to " + $("#yMax").val() + "}" ;
    //gives the div a new id for each new tab
    let id = "tabs-" + j;
    li = $(tabTemplate
      .replace(/#{href}/g, "#" + id)
      .replace(/#{label}/g, label));
    let tabContentHtml = tabContent.innerHTML;
    //append newley created li
    tabs.find(".ui-tabs-nav").append(li);
    //append the table with a div and set the id from above variable
    tabs.append("<div id='" + id + "'>" + tabContentHtml  + "</div>" );
    tabs.tabs("refresh");
    //increment variables
    tabCounter++;
    j++;
  }

//function to clear the tabs and the content they hold
  function closeAll(){
    //loop to clear tabs and content
    for(i = 0; i < j; i++){
      //reasigns new values every iteration
      let tabId = document.getElementById("tabDelete");
      let tableDelete = document.getElementById("tabs-" + i);
      //will not remove an empty tab
      if(tabId != null){
        tabId.remove();
        tableDelete.remove();
      }
    }
    //reset tab and div counter
    j = 0;
    tabCounter = 0;
    //hides the tabs panel
    $("#tabs").hide();
  }

//click event function to call CloseAll to clear all tables and tabs
  $("#closeButton").on("click", function(){
    closeAll();
  });

  // addTab button:
  $("#add_tab")
  .button()
  .click(function () {
    //this checks if the input is valid before it makes a tab
    if($("#inputs").valid()) {
      //calls function to add a new tab
      addTab();
      $("inputs").submit();
    }
    $("#tabs").show();
  });

  // close icon: removing the tab on click
  tabs.delegate("span.ui-icon-close", "click", function () {
    var panelId = $(this).closest("li").remove().attr("aria-controls");
    $("#" + panelId).remove();
    //refreshes the tabs
    tabs.tabs("refresh");
    //decrement tab counter
    tabCounter--;
  });

  tabs.bind("keyup", function (event) {
    if (event.altKey && event.keyCode === $.ui.keyCode.BACKSPACE) {
      var panelId = tabs.find(".ui-tabs-active").remove().attr("aria-controls");
      $("#" + panelId).remove();
      tabs.tabs("refresh");
      tabCounter--;
    }
  });
});
