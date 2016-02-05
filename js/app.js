/*global $, jQuery, alert*/

//Graph Data
var lineChartHourly = {
    labels: [ "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"],
    datasets: [{
        fillColor: "rgba(41, 128, 185, .31)",
        strokeColor: "#2980b9",
        pointColor: "#2980b9",
        data: [ 24, 23, 22, 20, 21, 22, 20, 23, 20, 21, 22, 21 ]
    }]

};
var lineChartDaily = {
    labels: ["Mon", "Tue", "Wen", "Thr", "Fri", "Sat", "Sun"],
    datasets: [{
        fillColor: "rgba(41, 128, 185, .31)",
        strokeColor: "#2980b9",
        pointColor: "#2980b9",
        data: [150, 190, 104, 110, 124, 95, 105]
    }]
};
var lineChartWeekly = {
    labels: ["Week-1", "Week-2", "Week-3", "Week-4"],
    datasets: [{
        fillColor: "rgba(41, 128, 185, .31)",
        strokeColor: "#2980b9",
        pointColor: "#2980b9",
        data: [ 2320, 2240, 2410, 2330]
    }]

};
var lineChartMonthly = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        fillColor: "rgba(41, 128, 185, .31)",
        strokeColor: "#2980b9",
        pointColor: "#2980b9",
        data: [ 2300, 2200, 2400, 2500, 2300, 2400, 2500, 2500, 2600, 2700, 2500, 2300]
    }]

};
var dailyChartData = {
    labels: ['Mon', 'Tue', 'Wen', 'Thur', 'Fri', 'Sat','Sun'],
    datasets: [
        {
            label: '2010 customers #',
            fillColor: '#2980b9',
            data: [150, 190, 104, 110, 124, 95, 105]
        }]
};
var pieChartData = [
    {
        value: 400,
        color: "#038BBF",
        highlight: "#038BBF",
        label: "Desktop"
    },
    {
        value: 150,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Tablet"
    },
    {
        value: 250,
        color: "#0CE899",
        highlight: "#0CE899",
        label: "Mobile"
    }
];
    // Line Graph

var line = document.getElementById("traffic-chart").getContext("2d");
var LineChart = new Chart(line).Line(lineChartHourly, {
        pointDotRadius: 3,
        responsive: true,
        maintainAspectRatio: true,
         bezierCurve : false,
    bezierCurveTension : 0.03
    });

var line2 = document.getElementById("traffic-chart2").getContext("2d");
var LineChart = new Chart(line2).Line(lineChartDaily, {
        pointDotRadius: 3,
        scaleShowVerticalLines: false,
        responsive: true,
        maintainAspectRatio: true,
    bezierCurve : false,
    bezierCurveTension : 0.1
    });

var line3 = document.getElementById("traffic-chart3").getContext("2d");
var LineChart = new Chart(line3).Line(lineChartWeekly, {
        pointDotRadius: 3,
        scaleShowVerticalLines: false,
        responsive: true,
        maintainAspectRatio: true,
    bezierCurve : false,
    bezierCurveTension : 0.03
    });


var line4 = document.getElementById("traffic-chart4").getContext("2d");
var LineChart = new Chart(line4).Line(lineChartMonthly, {
        pointDotRadius: 3,
        scaleShowVerticalLines: false,
        responsive: true,
        maintainAspectRatio: true,
    bezierCurve : false,
    bezierCurveTension : 0.03
    });

//Bar Graph

var barChart = document.getElementById("data-traffic-chart").getContext("2d");

var bar = new Chart(barChart).Bar(dailyChartData, {
    responsive: true
     
    
});

//Pie Chart

var pieChart = document.getElementById("mobile-users-chart").getContext("2d");


var pie = new Chart(pieChart).Doughnut(pieChartData, {
    maintainAspectRatio: true,
    responsive: true
    
});

//Traffic Charts
$("#traffic li").click(function () {
    "use strict";
    $("#traffic ul").children().removeClass("selected");
    $(this).addClass("selected");
});


//change chart
    //Hide Charts



$("#traffic-chart").hide(0);
$("#traffic-chart2").hide(0);
$("#traffic-chart3").hide(0);

    //Show Charts Based on Click
$("#hourly").click(function () {
    "use strict";
    $("#traffic-chart").show();
    $("#traffic-chart2").hide();
    $("#traffic-chart3").hide();
    $("#traffic-chart4").hide();
});

$("#daily").click(function () {
    "use strict";
    $("#traffic-chart2").show();
    $("#traffic-chart").hide();
    $("#traffic-chart3").hide();
    $("#traffic-chart4").hide();
});

$("#weekly").click(function () {
    "use strict";
    $("#traffic-chart3").show();
    $("#traffic-chart").hide();
    $("#traffic-chart2").hide();
    $("#traffic-chart4").hide();
});


$("#monthly").click(function () {
    "use strict";
    $("#traffic-chart4").show();
    $("#traffic-chart").hide();
    $("#traffic-chart2").hide();
    $("#traffic-chart3").hide();
});