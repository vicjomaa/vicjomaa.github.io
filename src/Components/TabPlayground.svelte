<script>
  import { onMount } from 'svelte';
  import { getParsedObject } from './storeData.js';

  let parsedObject = null;
  let dataFromParent = null;
  let dataToSend = {};
  let dataToShow = {};
  let parent = null;

  onMount(() => {
    window.addEventListener("message", ({ data, source}) => {
      if (data) { // Check if data is not null or undefined

        if (parent === null) {
          parent = source;
        }
        dataFromParent = data;
        parsedObject = getParsedObject();
        matchSerialCode();
      }
    });
  });


   // Map function to map values from one range to another
  function mapLinear(value, inputMin, inputMax) {
    const mappedValue = (value - 0) * (inputMax - inputMin) / (1023 - 0) + inputMin;
    return Number(mappedValue.toFixed(2));
  }


  function matchSerialCode() {
    dataToSend = {}; // Initialize dataToSend as an empty object
    dataToShow = {};
    if (dataFromParent !== null && parsedObject !== null) {
        for (const key in dataFromParent) {
            if (parsedObject[key] !== null && parsedObject[key] !== undefined) {
                dataToSend[key] = parsedObject[key].cc;
                dataToShow[key] = { val: parsedObject[key].cc,   min: dataFromParent[key].min , max:dataFromParent[key].max };
            }
        }
        if (parent !== null){
            //console.log(dataToSend);
            parent.postMessage(dataToSend, '*');
        }
    }
}


</script>


<div class="divider label-text text-s">Properties Manipulable</div>
<div class="flex flex-wrap">
  {#if dataToShow !== null && dataToShow !== undefined}
    {#each Object.keys(dataToShow) as key}
      <div class="card !p-2 bg-base-100 shadow-xl w-[110px] m-2">
        <div class="p-2">
          <h2 class="card-title justify-center pb-5">
            cc{key}:
          </h2>
          <div class="radial-progress text-primary" style="--value:{(mapLinear(dataToShow[key].val,dataToShow[key].min, dataToShow[key].max) / dataToShow[key].max) * 100 };" role="progressbar">{mapLinear(dataToShow[key].val,dataToShow[key].min, dataToShow[key].max )}</div>
        </div>
      </div>
    {/each}
  {/if}
</div>




   

