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
            dataToSend[index] = { val:null ,min: null, max: null };
          }

          // Update min and max values for each key
          if (item[key] < dataToSend[index].min || dataToSend[index].min == null) {
            dataToSend[index].min = item[key];
          }

          if (item[key] > dataToSend[index].max || dataToSend[index].max == null) {
            dataToSend[index].max = item[key];
          }

          dataToSend[index].val = item[key];

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
  {#if Array.isArray(dataToShow)}
    {#each dataToShow as item, index}
      {#each Object.keys(item) as key}
        <div class="card !p-2 bg-base-100 shadow-xl w-[110px] m-2">
          <div class="p-2">
            <h2 class="card-title justify-center pb-5">
              CH:{index} - Data: {key}:
            </h2>
            <div
              class="radial-progress text-s"
              style="--value:{100};"
              role="progressbar"
            >
              {item[key]}
            </div>
          </div>
        </div>
      {/each}
    {/each}
  {/if}
</div>
