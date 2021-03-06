import React from 'react';
import * as d3 from 'd3';


// set the dimensions and margins of the graph
const margin = { top: 20, right: 30, bottom: 30, left: 60 },
  width = 1000 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#streamgraph")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");


// Parse the Data
d3.json("http://localhost:8000/frequencies").then(function (data) {
  // d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/5_OneCatSevNumOrdered_wide.csv").then(function (data) {

  let arrray = []
  const chunks = (Object.entries(data))
  for (const [key, value] of Object.entries(data)) {

    arrray += "\n" + Object.values(value)
  }

  console.log(arrray)

  let keys = [
    "Amanda", "Ashley", "Betty", "Deborah", "Dorothy", "Helen", "Linda", "Patricia", "Abraham", "Gitaby"
  ];

  // const keys = data.columns.slice(1)



  // Add X axis
  const x = d3.scaleLinear()
    .domain(d3.extent(data, function (d) { return d.id; }))
    .range([0, width]);
  svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x).ticks(5));



  // Add Y axis
  const y = d3.scaleLinear()
    .domain([-500, 500])
    .range([height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // color palette
  var color = d3.scaleOrdinal()
    .domain(keys)
    .range(['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#243AEF', '#24EF24'])



  //stack the data?
  var stackedData = d3.stack()
    .offset(d3.stackOffsetSilhouette)
    .keys(keys)
    (data)


  // Show the areas


  svg
    .selectAll("mylayers")
    .data(stackedData)
    .enter()
    .append("path")
    .style("fill", function (d) { return color(d.key); })
    .attr("d", d3.area()
      .x(function (d, i) { return x(d.data.id); })
      .y0(function (d) { return y(d[0]); })
      .y1(function (d) { return y(d[1]); })
    )

})


const Streamgraph = () => {
  return (
    <div className='streamgraph '>
      <div id='streamgraph'></div>
      <h2>Streamgraph</h2>
    </div>
  );
};

export default Streamgraph;
