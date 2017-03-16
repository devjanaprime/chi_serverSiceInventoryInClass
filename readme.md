Server Side Inventory
=====================
in-class: 3-16-2017

Overview:
In this project we'll create a project that tracks an inventory on the server. Also, we'll explore Express routing through custom modules.

The project will allow users to view items in the inventory, add items to the inventory, and search for items. Inventory items will be objects that are held in a server side array.

For each of the user verbs (view, add, search) we'll create a route that we will hit via AJAX as follows:

- view: GET, returns the full array of inventory
- add: POST, receives a new object, adds it to the existing inventory
- search: POST, receives a string that we'll check against existing objects in the inventory & returns an array of matches

We will create an "inventory" router for these. We will also create an "index" router for the main view (index.html).

Tech:
-----
- JQuery
- Node
- Express
- AJAX

Steps:
======

[ ] spin up Node/Express server

[ ] send back index.html via app.js with sourced js files

[ ] refactor app.js to use an 'index.js' Express router module for index.html

[ ] setup basic interface

[ ] test JQ interactive elements

[ ] setup 'inventory.js' with temp inventory array and GET route to return said array

[ ] GET AJAX call to inventory returns array

[ ] POST AJAX call to inventory adds new item to array on the server

[ ] display inventory on DOM

[ ] POST AJAX call to check if any objects' names contain the given search string & return appropriate array

Stretch Goals:
==============

[ ] clear appropriate input(s) on successful add

[ ] clear appropriate search input(s) on search completion

[ ] add search functionality for description

[ ] display "no matches" if empty array is returned for a search

[ ] "remove" button for each item

[ ] "remove" route for inventory controller

[ ] search functionality for both name and description
