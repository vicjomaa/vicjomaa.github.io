<script>
  import { onMount } from "svelte";
  import { getParsedObject } from "./storeData.js";
  import Graph from "./Graph.svelte";

  let parsedObject = null;
  let dataFromParent = null;
  let dataToSend = {};
  let dataToShow = {};

  let dataMaxMin ={};
  let parent = null;

  let height = 40;
  let width = 120;
  let margin = { top: 5, right: 0, bottom: 5, left: 0 };

  onMount(() => {
    window.addEventListener("message", ({ data, source }) => {
      if (data) {
        // Check if data is not null or undefined

        if (parent === null) {
          parent = source;
        }
        dataFromParent = data;
        parsedObject = getParsedObject();
        //console.log(parsedObject);
        matchSerialCode();
      }
    });
  });

 

  function matchSerialCode() {
    if (dataFromParent !== null && parsedObject != null) {
      dataToShow = parsedObject;

      dataToSend = {};

      // Loop through parsedObject
      parsedObject.forEach((item, index) => {
        for (const key in item) {
          // Initialize dataToSend[key] if it doesn't exist
          if (!dataToSend[key]) {
            dataToSend[key] = {
              val: null,
              min: null,
              max: null,
              channel: null,
            };
          }

          if (!dataMaxMin[key]) {
            dataMaxMin[key] = {
              min: null,
              max: null,
            };
          }

          // Update min and max values for each key
          if (
            item[key] < dataMaxMin[key].min ||
            dataMaxMin[key].min == null
          ) {
            dataMaxMin[key].min = item[key];
            
          }

          if (
            item[key] > dataMaxMin[key].max ||
            dataMaxMin[key].max == null
          ) {
            dataMaxMin[key].max = item[key];

          }

          dataToSend[key].val = item[key];
          dataToSend[key].channel = index;
          dataToSend[key].min = dataMaxMin[key].min;
          dataToSend[key].max = dataMaxMin[key].max;
        }
      });

      if (window.parent !== null) {
        // Changed 'parent' to 'window.parent'
        //console.log(dataToSend);
        window.parent.postMessage(dataToSend, "*");
      }
    }
  }
</script>

<div class="divider label-text text-s">Sensors Channels</div>
<div class="flex flex-wrap">
  {#if Object.keys(dataToSend).length > 0}
    {#each Object.keys(dataToSend) as key}
      <div class="label-text font-bold">
        CH{dataToSend[key].channel} - {key}
      </div>
      <div class="w-full rounded-none border p-2 flex flex-row mb-5">
        <div class="flex flex-col">
          <div class=" text-xs w-full text-left">
            {dataMaxMin[key].max}
          </div>
          <Graph
            id={key}
            {width}
            {height}
            {margin}
            xAxis={300}
            info={{
              val: dataToSend[key].val,
              min: dataMaxMin[key].min,
              max: dataMaxMin[key].max,
            }}
          />
          <div class=" text-xs w-full text-left">
            {dataMaxMin[key].min}
          </div>
        </div>
        <div class="stat-value w-full flex items-center justify-center">
          {dataToSend[key].val}
        </div>
      </div>
    {/each}
  {/if}
</div>
