<script>
  import { onMount, onDestroy } from "svelte";
  import { select, line, area, scaleLinear, axisBottom, axisLeft } from "d3";

  export let id;
  export let width = 300; // Default width
  export let height = 150; // Default height
  export let margin = { top: 10, right: 30, bottom: 30, left: 40 }; // Adjust margin if needed
  export let info = { val: 0, min: 0, max: 1 }; // Ensure that min and max values are appropriate for your data
  export let xAxis = 40;

  let data = [];
  let interval;
  let svg;
  let g;
  let xScale;
  let yScale;
  let lineGenerator;
  let areaGenerator;

  let xAxisGroup;
  let yAxisGroup;

  onMount(() => {
    svg = select(`#graph-${id}`)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // Define the gradient
    const gradient = svg.append("defs")
      .append("linearGradient")
      .attr("id", "gradient")
      .attr("x1", "0%")
      .attr("x2", "0%")
      .attr("y1", "0%")
      .attr("y2", "100%");

    gradient.append("stop")
      .attr("offset", "0%")
      .attr("stop-color", "#7480FF")
      .attr("stop-opacity", 1);

    gradient.append("stop")
      .attr("offset", "100%")
      .attr("stop-color", "#7480FF")
      .attr("stop-opacity", 0.2);

    g = svg.append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Append x-axis group
    xAxisGroup = g
      .append("g")
      .attr("stroke", "lightgray")
      .attr("stroke-width", 0.5)
      .attr("transform", `translate(0, ${height - margin.top - margin.bottom})`);

    // Append y-axis group
    yAxisGroup = g
      .append("g")
      .attr("transform", `translate(0, 0)`);

    interval = setInterval(() => {
      // Update scales and line/area generators in real time
      xScale = scaleLinear()
        .domain([0, xAxis])
        .range([0, width - margin.left - margin.right]);

      yScale = scaleLinear()
        .domain([info.min, info.max])
        .range([height - margin.top - margin.bottom, 0]);

      lineGenerator = line()
        .x((d) => xScale(d.x))
        .y((d) => yScale(d.y));

      areaGenerator = area()
        .x((d) => xScale(d.x))
        .y0(height - margin.top - margin.bottom)
        .y1((d) => yScale(d.y));

      // Simulate data update
      data.push({ x: data.length*5, y: info.val });
      updateGraph();

      if (data.length === 60) {
        // Reset data array and clear the graph
        data = [];
        updateGraph();
        svg.selectAll("path").remove();
      }
    }, 100); // Update every second

    return () => clearInterval(interval); // Cleanup interval on component destruction
  });

  onDestroy(() => clearInterval(interval)); // Cleanup interval on component destruction

  function updateGraph() {
    // Append new area to the graph
    g.selectAll(".area").remove(); // Clear previous area
    g.append("path")
      .attr("class", "area")
      .attr("fill", "url(#gradient)")
      .attr("d", areaGenerator(data)); // Use updated data with { x, y } format

    // Append new path to the graph
    g.selectAll(".line").remove(); // Clear previous line
    g.append("path")
      .attr("class", "line")
      .attr("stroke", "#7480FF")
      .attr("stroke-width", 1)
      .attr("fill", "none")
      .attr("d", lineGenerator(data)); // Use updated data with { x, y } format

    // Update x-axis with ticks every 10 steps
    xAxisGroup.call(axisBottom(xScale).ticks(xAxis / 60));

    // Update y-axis
    yAxisGroup.call(axisLeft(yScale)
      .tickValues([info.min, info.max]) // Set custom tick values
      .tickFormat((d) => (d === info.min || d === info.max) ? d : "") 
    );

    // Add 4 horizontal lines
    const numberOfLines = 3;
    const yStep = (height - margin.top - margin.bottom) / (numberOfLines + 1);
    
    g.selectAll(".horizontal-line").remove(); // Clear previous lines
    
    for (let i = 0; i <= numberOfLines; i++) {
      g.append("line")
        .attr("class", "horizontal-line")
        .attr("x1", 0)
        .attr("x2", width - margin.left - margin.right)
        .attr("y1", yStep * i)
        .attr("y2", yStep * i)
        .attr("stroke", "lightgray")
        .attr("stroke-width", 0.3);
    }
  }
</script>

<div class="graph-data" id="graph-{id}" style="margin-bottom: {margin.bottom}px;"></div>
