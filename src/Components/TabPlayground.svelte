<script>
  import { onMount } from 'svelte';
  import { getParsedObject } from './storeData.js';

  let parsedObject = null;
  let dataFromParent = null;
  let dataToSend = {};
  let parent = null;

  onMount(() => {
    window.addEventListener("message", ({ data, source}) => {
      if (data) { // Check if data is not null or undefined

        if (parent === null) {
          parent = source;
        }
        dataFromParent = data;
        parsedObject = getParsedObject();
        matchSeriaCode();
      }
    });
  });


  function matchSeriaCode() {
    dataToSend = {}; // Initialize dataToSend as an empty object
    if (dataFromParent !== null && parsedObject !== null) {
        for (const key in dataFromParent) {
            if (parsedObject[key] !== null && parsedObject[key] !== undefined) {
                dataToSend[key] = parsedObject[key].cc;
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
<div class="flex flex-row">
  {#if dataToSend !== null && dataToSend !== undefined}
    {#each Object.keys(dataToSend) as key}
      <div class="card !p-2 bg-base-100 shadow-xl m-10">
        <div class="p-2">
          <h2 class="card-title justify-center pb-5">
            cc{key}:
          </h2>
          <div class="radial-progress text-primary" style="--value:{dataToSend[key]};" role="progressbar">{dataToSend[key]}%</div>
        </div>
      </div>
    {/each}
  {/if}
</div>
   

