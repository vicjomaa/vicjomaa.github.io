<script>
  import { onMount } from 'svelte';
  import { getParsedObject} from './storeData.js';

  let parsedObject = getParsedObject();

  let dataFromParent = null;
  

  /* variables for collecting variable to manipulate */

  onMount(async () => {
    // Check if parent window exists
    if (window.parent) {
        console.log(window.parent);
        window.parent.postMessage({ parsedObject }, '*');

        const updateInterval = setInterval(() => {
            window.parent.postMessage({ parsedObject }, '*');
        }, 10);

        return () => clearInterval(updateInterval);
    } else {
        console.error('Parent window does not exist.');
    }

    // Add event listener to listen for messages from the parent window
    
    window.addEventListener('message', handleMessage);

    // Clean up the event listener when the component is unmounted
    return () => window.removeEventListener('message', handleMessage);
});


  function handleMessage(event) {
      // Ensure message is coming from the parent window
      if (event.origin !== window.location.origin) return;

      // Update the receivedData variable with the parsedObject sent from the parent
      dataFromParent = event.data.parsedObject;
      console.log(dataFromParent);
  }
</script>


<div class="divider label-text text-s">Properties Manipulable</div>
<div class="flex flex-row">
  {#if parsedObject  !== null && parsedObject  !== undefined}
    {#each parsedObject  as item, index}
      <div class="card !p-2 bg-base-100 shadow-xl m-10">
        <div class="p-2">
          <h2 class="card-title justify-center pb-5">
            cc{index}:
          </h2>
          <div class="radial-progress text-primary" style="--value:{item.cc};" role="progressbar">{item.cc}%</div>
        </div>
      </div>
    {/each}
  {/if}
</div>
   

