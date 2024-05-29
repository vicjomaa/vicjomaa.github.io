<script>
  import { onMount } from "svelte";
  import { getParsedObject } from "./storeData.js";

  let parsedObject = null;
  let dataFromParent = null;
  let dataToSend = {};
  let dataToShow = {};
  let parent = null;

  let dataMin = {};
  let dataMax = {};

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

  // Map function to map values from one range to another
  function mapLinear(value, inputMin, inputMax) {
    const mappedValue =
      ((value - 0) * (inputMax - inputMin)) / (1023 - 0) + inputMin;
    return Number(mappedValue.toFixed(2));
  }

  function matchSerialCode() {

    if (dataFromParent !== null && parsedObject != null) {
      dataToShow = parsedObject;

      // Check if dataToSend is an object and initialize it if necessary
      if (typeof dataToSend !== "object") {
        dataToSend = {};
      }

      // Loop through parsedObject
      parsedObject.forEach((item,index) => {
        for (const key in item) {
          // Initialize dataToSend[key] if it doesn't exist
          if (!dataToSend[index]) {
            dataToSend[index] = { val:null ,min: null, max: null , sensor:null};
          }

          // Update min and max values for each key
          if (item[key] < dataToSend[index].min || dataToSend[index].min == null) {
            dataToSend[index].min = item[key];
          }

          if (item[key] > dataToSend[index].max || dataToSend[index].max == null) {
            dataToSend[index].max = item[key];
          }

          dataToSend[index].val = item[key];
          dataToSend[index].sensor = key;

        }
      });

      if (window.parent !== null) {
        // Changed 'parent' to 'window.parent'
        window.parent.postMessage(dataToSend, "*");
      }
    }
  }
</script>

<div class="divider label-text text-s">Properties Manipulable</div>
<div class="flex flex-wrap">
  {#if Object.keys(dataToSend).length > 0}
      {#each Object.keys(dataToSend) as key, index}
      <div class="stats w-full my-2">
  
        <div class="border p-2">
          <div class="label-text">CH:{index} - Data: {dataToSend[key].sensor}:</div>
          <div class="stat-value text-s!">{dataToSend[key].val}</div>
          <div class="stat-desc">Min: {dataToSend[key].min}</div>
          <div class="stat-desc">Max: {dataToSend[key].max}</div>
        </div>
      </div>

        {/each}
    
  {/if}
</div>
