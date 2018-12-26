console.log('main.js loaded');

$(document).ready(function() {
    'use strict';
    console.log('main.js loaded');

    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    var tool = new Tool();

    tool.onMouseDown = function(event) {
    var c = Shape.Circle(event.point , 10);
    c.fillColor = 'green';
    }

    paper.view.draw();
});