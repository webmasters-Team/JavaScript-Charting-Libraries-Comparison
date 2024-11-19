// Generate data
// --------------------------------
var CHART_TITLE = 'Trend of Sales of the Most Popular Products';
var VALUE_AXIS_TITLE = 'Number of Bottles Sold (thousands)';
var SERIES_TITLE = ['Brandy', 'Whiskey', 'Tequila'];

function getData() {
  return [
    ['1986', 3.6, 2.3, 2.8],
    ['1987', 7.1, 4.0, 4.1],
    ['1988', 8.5, 6.2, 5.1],
    ['1989', 9.2, 11.8, 6.5],
    ['1990', 10.1, 13.0, 12.5],
    ['1991', 11.6, 13.9, 18.0],
    ['1992', 16.4, 18.0, 21.0],
    ['1993', 18.0, 23.3, 20.3],
    ['1994', 13.2, 24.7, 19.2],
    ['1995', 12.0, 18.0, 14.4],
    ['1996', 3.2, 15.1, 9.2],
    ['1997', 4.1, 11.3, 5.9],
    ['1998', 6.3, 14.2, 5.2],
    ['1999', 9.4, 13.7, 4.7],
    ['2000', 11.5, 9.9, 4.2],
    ['2001', 13.5, 12.1, 1.2],
    ['2002', 14.8, 13.5, 5.4],
    ['2003', 16.6, 15.1, 6.3],
    ['2004', 18.1, 17.9, 8.9],
    ['2005', 17.0, 18.9, 10.1],
    ['2006', 16.6, 20.3, 11.5],
    ['2007', 14.1, 20.7, 12.2],
    ['2008', 15.7, 21.6, 10],
    ['2009', 12.0, 22.5, 8.9]
  ]
}

function getDataColumn (data, сolumn) {
  var сolumtData = [];
  data.forEach(function(element) {
      сolumtData.push(element[сolumn]);
    });
  return сolumtData;
};


// amCharts
// --------------------------------
// Create line chart
var chart = am4core.create("amCharts", am4charts.XYChart);

// Create data set
chart.data = getData();

// Create axes
var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
// Series 1
var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.dateX = "0";
series1.dataFields.valueY = "1";
series1.name = SERIES_TITLE[0];
// Series tooltip
series1.tooltipText = "{name}: {1}"
series1.tooltip.pointerOrientation = "vertical";

// Series 2
var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.dateX = "0";
series2.dataFields.valueY = "2";
series2.name = SERIES_TITLE[1];
// Series tooltip
series2.tooltipText = "{name}: {2}"
series2.tooltip.pointerOrientation = "vertical";

// Series 3
var series3 = chart.series.push(new am4charts.LineSeries());
series3.dataFields.dateX = "0";
series3.dataFields.valueY = "3";
series3.name = SERIES_TITLE[2];
// Series tooltip
series3.tooltipText = "{name}: {3}"
series3.tooltip.pointerOrientation = "vertical";

// Turn on tooltips
chart.cursor = new am4charts.XYCursor();

// Set titles and legend
//var title = chart.titles.create();
//title.text = CHART_TITLE;
//valueAxis.title.text = VALUE_AXIS_TITLE;
chart.legend = new am4charts.Legend();

// Turn on chart animation
am4core.useTheme(am4themes_animated);

// Turn on filter
chart.scrollbarX = new am4core.Scrollbar();


// AnyChart
// --------------------------------
// Create line chart
var chart = anychart.line();

// Create data set
var dataSet = anychart.data.set(getData());

// Create series
// Series 1
var seriesData1 = dataSet.mapAs({'x': 0, 'value': 1});
var series1 = chart.line(seriesData1);
series1.name(SERIES_TITLE[0]);
// Series tooltip
series1.hovered().markers()
  .enabled(true)
  .type('circle')
  .size(4);
series1.tooltip()
  .position('right')
  .anchor('left-center')
  .offsetX(5)
  .offsetY(5);

// Series 2
var seriesData2 = dataSet.mapAs({'x': 0, 'value': 2});
var series2 = chart.line(seriesData2);
series2.name(SERIES_TITLE[1]);
// Series tooltip
series2.hovered().markers()
  .enabled(true)
  .type('circle')
  .size(4);
series2.tooltip()
  .position('right')
  .anchor('left-center')
  .offsetX(5)
  .offsetY(5);

// Series 3
var seriesData3 = dataSet.mapAs({'x': 0, 'value': 3});
var series3 = chart.line(seriesData3);
series3.name(SERIES_TITLE[2]);
// Series tooltip
series3.hovered().markers()
  .enabled(true)
  .type('circle')
  .size(4);
series3.tooltip()
  .position('right')
  .anchor('left-center')
  .offsetX(5)
  .offsetY(5);

// Set titles and legend
//chart.title(CHART_TITLE);
//chart.yAxis().title(VALUE_AXIS_TITLE);
chart.legend().enabled(true);

// Turn on chart animation
chart.animation(true);

// Draw chart
chart.container('anyChart');
chart.draw();


// Chart.js
// --------------------------------
// Create data set and series
var data = getData();

var dataSet = 
{
  labels: getDataColumn(data, 0),
	datasets: [{
	  label: SERIES_TITLE[0],
		fill: false,
    data: getDataColumn(data, 1)   
		}, {
    label: SERIES_TITLE[1],
		fill: false,
		data: getDataColumn(data, 2)
		}, {
    label: SERIES_TITLE[2],
		fill: false,
		data: getDataColumn(data, 3)
		}]
}

// Set options
var options = 
{
  responsive: true,
	title: {
	  display: false,
		text: CHART_TITLE
  },
	tooltips: {
	  mode: 'index',
		intersect: false,
  },
	hover: {
	  mode: 'nearest',
		intersect: true
  },
	  scales: {
			yAxes: [{
			  display: true,
				scaleLabel: {
				  display: false,
					labelString: VALUE_AXIS_TITLE
				}
			}]
		}
}

// Draw chart
var canvas = document.createElement("canvas");
document.getElementById('chartjs').appendChild(canvas);

var ctx = canvas.getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: dataSet,
    options: options
});


// Chartist.js
// --------------------------------
var data = getData();
var chartData = {
  labels: getDataColumn(data, 0),
  series: [
    getDataColumn(data, 1),
    getDataColumn(data, 2),
    getDataColumn(data, 3)
  ],  
};
var options = {
  fullWidth: true,
  chartPadding: {
    right: 40
  }
};
new Chartist.Line('#chartistjs', chartData, options);


// D3.js
// --------------------------------
// Create data set and series
var data = getData();
// === 1. Boilerplate setup
// Set canvas margins
var margin = {
  top: 5,
  right: 80,
  bottom: 20,
  left: 20
};
var divBounds = document.getElementById('d3js').getBoundingClientRect();
var width = divBounds.width - margin.left - margin.right;
var height = divBounds.height - margin.top - margin.bottom;

// Add color dynamically
var color = d3.scaleOrdinal(d3.schemeCategory10);

// Create svg object
var svg = d3.select('#d3js').append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`);

// === 2. Set scales and draw line
var xScale = d3.scaleLinear().range([0, width]);
var yScale = d3.scaleLinear().range([height, 0]);

// draw line callback function using d3.line helper passing in x and y coordinates
var line1 = d3.line()
  .x(d => xScale(d[0]))
  .y(d => yScale(d[1]))

var line2 = d3.line()
  .x(d => xScale(d[0]))
  .y(d => yScale(d[2]))

var line3 = d3.line()
  .x(d => xScale(d[0]))
  .y(d => yScale(d[3]))

// === 3. Append data and start drawing
data.forEach(function(d) {
  d[0] = parseFloat(d[0]);
  d[1] = parseFloat(d[1]);
  d[2] = parseFloat(d[2]);
  d[3] = parseFloat(d[3]);
});

// Set the x and y scales to the data ranges x based on min and max date range (d3.extent()) and y based on 0 to max value
xScale.domain([d3.min(data, d => Math.max(new Date().getYear(), d[0])), d3.max(data, d => Math.max(0, d[0]))]);
yScale.domain([0, d3.max(data, d => Math.max(d[1], d[2], d[3]))]);

// Add gridlines
svg.append('g')
  .attr('class', 'grid')
  .call(d3.axisLeft(yScale).tickSize(-width))

// Draw the line svg by appending the data to a new svg path giving a class of line and d value based on the d3.line callback
// Append line1 path
svg.append('path')
  .data([data])
  .attr('class', 'line')
  .style('stroke', '#64b5f6')
  .attr('d', line1)

// Append line2 path
svg.append('path')
  .data([data])
  .attr('class', 'line')
  .style('stroke', '#1976d2')
  .attr('d', line2)

// Append line3 path
svg.append('path')
  .data([data])
  .attr('class', 'line')
  .style('stroke', '#ef6c00')
  .attr('d', line3)

// Add the axis 
var xAxis = d3.axisBottom(xScale)
  .tickFormat(d3.format(""))
  .ticks(data.length);

svg.append('g')
  .attr('transform', `translate(0, ${height})`)
  .call(xAxis)
  .attr('class', 'xAxis');

/*
// Add labels
// add title
svg.append('text')
  .text(CHART_TITLE)
  .style('font-size', '20px')
  .attr('transform', `translate(${0-(margin.left)}, ${0-(margin.top/2)})`)

// Add x label 
svg.append('text')
  .text('Date')
  .attr('text-anchor', 'middle')
  .attr('transform', `translate(${width/2}, ${height + (margin.bottom/2)})`)

// Add Y label 
svg.append('text')
  .text(VALUE_AXIS_TITLE)
  .attr('text-anchor', 'middle')
  .attr('transform', 'rotate(-90)')
  .attr('y', 0 - (margin.left / 2))
  .attr('x', 0 - height / 2)
*/

// Label end of charts
// Label 1
svg.append("text")
  .attr("transform", `translate(${width},${yScale(data[data.length-1][1])})`)
  .style("fill", color(0))
  .text(SERIES_TITLE[0]);

// Label 2
svg.append("text")
  .attr("transform", `translate(${width},${yScale(data[data.length-1][2])})`)
  .style("fill", color(1))
  .text(SERIES_TITLE[1]);

// Label 3
svg.append("text")
  .attr("transform", `translate(${width},${yScale(data[data.length-1][3])})`)
  .style("fill", color(2))
  .text(SERIES_TITLE[2]);


// FusionCharts
// --------------------------------
// Convert data function
function returnLabelFusionCharts (data) {
  var сolumtData = [];
  data.forEach(function(element) {
    var returnObj = new Object();
    returnObj.label = element[0];
    сolumtData.push(returnObj);
  });
  return сolumtData;
};

function returnDataColumnFusionCharts (data, сolumn) {
  var сolumtData = [];
  data.forEach(function(element) {
    var returnObj = new Object();
    returnObj.value = element[сolumn];
    сolumtData.push(returnObj);
   });
  return сolumtData;
};

// Create data set and series
var data = getData();

const dataSource = {
  chart: {
    //caption: CHART_TITLE,
    //yaxisname: VALUE_AXIS_TITLE,
    showhovereffect: "1",
    drawcrossline: "1",
    plottooltext: "<b>$dataValue</b> $seriesName",
    theme: "fusion"
  },
  categories: [
    {
      category: returnLabelFusionCharts(data)
    }
  ],
  dataset: [
    {
      seriesname: SERIES_TITLE[0],
      data: returnDataColumnFusionCharts(data, 1)
    },
    {
      seriesname: SERIES_TITLE[1],
      data: returnDataColumnFusionCharts(data, 2)
    },
    {
      seriesname: SERIES_TITLE[2],
      data: returnDataColumnFusionCharts(data, 3)
    }
  ]
};

FusionCharts.ready(function() {
  var myChart = new FusionCharts({
    type: "msline",
    renderAt: "fusioncharts",
    width: "100%",
    height: "100%",
    dataFormat: "json",
    dataSource
  }).render();
});


// Google Charts
// --------------------------------
google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Year');
  data.addColumn('number', SERIES_TITLE[0]);
  data.addColumn('number', SERIES_TITLE[1]);
  data.addColumn('number', SERIES_TITLE[2]);

  data.addRows(getData());

  var options = {
    chart: {
      //title: CHART_TITLE,
     },
     width: "100%",
     height: "100%"
   };

   var chart = new google.charts.Line(document.getElementById('googlecharts'));

   chart.draw(data, google.charts.Line.convertOptions(options));
}


// Highcharts
// --------------------------------
Highcharts.chart('highcharts', {
  
  title: {
    text: ""//CHART_TITLE
  },

  yAxis: {
    title: {
      text: ""//VALUE_AXIS_TITLE
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 1986
    }
  },

  series: [{
    name: SERIES_TITLE[0],
    data: getDataColumn(data, 1)
  }, {
    name: SERIES_TITLE[1],
    data: getDataColumn(data, 2)
  }, {
    name: SERIES_TITLE[2],
    data: getDataColumn(data, 3)
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});


// ECharts
// --------------------------------
var data = getData();
var dom = document.getElementById("echarts");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
  //title: { text: CHART_TITLE },
  tooltip: {trigger: 'axis'},
  legend: {
    data: [SERIES_TITLE[0], SERIES_TITLE[1], SERIES_TITLE[2]],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {saveAsImage: {}},
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: getDataColumn(data, 0)
  },
  yAxis: { type: 'value' },
  series: [
    {
      name: SERIES_TITLE[0],
      type: 'line',
      data: getDataColumn(data, 1)
    },
    {
      name: SERIES_TITLE[1],
      type: 'line',
      data: getDataColumn(data, 2)
    },
    {
      name: SERIES_TITLE[2],
      type: 'line',
      data: getDataColumn(data, 3)
    }
  ]
};

if (option && typeof option === "object") {
  myChart.setOption(option, true);
}       


// ZingChart
// --------------------------------
var data = getData();
var myConfig = {
  gui:{
    contextMenu:{
      position:'right',
      docked: true,
      alpha: 0.9,
      item:{
        textAlpha: 1
      },
      button: {
        visible: true
      }
    }
  },
  graphset:[
    {
  type: 'line',
  borderColor:"#cccccc",
  borderWidth: 1,
  borderRadius: 2,
  plot:{
    aspect: 'spline'
  },
  plotarea:{
    margin: 'dynamic'
  },
  utc: true,
  timezone: 8,
  /*
  title:{
    text: CHART_TITLE,
    adjustLayout: true,
    align: 'left',
    marginLeft: '15%'
  },
  */
  legend:{
    draggable: true,
    backgroundColor:'transparent',
    /*
    header:{
      text: "Chart legend",
      backgroundColor:'#f0f0f0'
    },
    */
    marker:{
      visible: false
    },
    item:{
      margin: '5 17 2 0',
      padding: '3 3 3 3',
      fontColor:'#fff',
      cursor: 'hand'
    },
    verticalAlign: 'middle',
    borderWidth: 0
  },
  scaleX:{
    minValue: Math.min(new Date().getYear(), getDataColumn(data, 1)), //set minValue timestamp
    step: 'year', //set step for scale
    maxItems:7,
    itemsOverlap: true,
    zooming: true,
    transform:{
      type: 'date',
      all: '%Y'
    }
  },
  preview:{
    adjustLayout: true,
    live: true
  },
  scaleY:{
    step:50,
    //label:{ text: VALUE_AXIS_TITLE },
    guide:{ lineStyle: 'solid' }
  },
  crosshairX:{
    lineColor:'#555',
    plotLabel:{
      backgroundColor:'#fff',
      multiple: true,
      borderWidth: 2,
      borderRadius: 2,
    },
    marker:{
      size: 5,
      borderWidth: 1,
      borderColor:'#fff'
    }
  },
  tooltip:{
    visible: false
  },
    series:[
            {
                values: getDataColumn(data, 1),
                text: SERIES_TITLE[0],
                legendItem:{
                  backgroundColor:'#29A2CC',
                  borderRadius: 2
                }
            },
            {
                values: getDataColumn(data, 2),
                text: SERIES_TITLE[1],
                legendItem:{
                  backgroundColor:'#D31E1E',
                  borderRadius: 2
                }
            },
            {
                values: getDataColumn(data, 3),
                text: SERIES_TITLE[2],
                legendItem:{
                  backgroundColor:'#7CA82B',
                  borderRadius: 2
                }
            },
        ]
}
]
};
 
zingchart.render({ 
	id : 'zingchart', 
	data : myConfig, 
	height: '100%', 
	width: '100%' 
});


// Plotly.js
// --------------------------------
var data = getData();

var trace1 = {
  x: getDataColumn(data, 0),
  y: getDataColumn(data, 1),
  type: 'scatter',
  name: SERIES_TITLE[0]
};

var trace2 = {
  x: getDataColumn(data, 0),
  y: getDataColumn(data, 2),
  type: 'scatter',
  name: SERIES_TITLE[1]
};

var trace3 = {
  x: getDataColumn(data, 0),
  y: getDataColumn(data, 3),
  type: 'scatter',
  name: SERIES_TITLE[2]
};

var chartData = [trace1, trace2, trace3];
var layout = {
  //title: CHART_TITLE
};

Plotly.newPlot('plotlyjs', chartData, layout, {showSendToCloud: true});