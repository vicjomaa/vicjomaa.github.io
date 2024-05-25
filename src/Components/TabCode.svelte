<script>
  import { onMount } from "svelte";
  import { parsedObjectStore } from "./storeData.js";

  /* variables for collecting variable to manipulate */

  onMount(async () => {});

  function copyAllCode() {
    const codeElements = document.querySelectorAll("#example-code pre code");
    let copiedCode = "";

    codeElements.forEach((codeElement, index) => {
      const codeText = codeElement.textContent.trim();
      copiedCode += `// ${codeText}\n`;
    });

    navigator.clipboard
      .writeText(copiedCode)
      .then(() => {
        alert("Code copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy code: ", error);
      });
  }
</script>

<div class="divider label-text text-s">How to use it</div>

<div class="menu-section relative">
  <div class="menu-section-bg"></div>
  <div class="flex lg:flex-row flex-col p-2">
    <div class="label font-bold">
      <span class="label-text">Example code</span>
    </div>
    <div class=" w-full">
      <div id="example-code" class="code-section bg-black">
        <pre data-prefix="1" class="whitespace-pre-wrap break-words"><code
            >// Add the extension on top</code
          ></pre>
        <pre
          data-prefix="2"
          class="whitespace-pre-wrap break-words text-lime-500"><code
            >await loadScript("https://vicjomaa.github.io/addIframe.js")</code
          ></pre>
        <!--
              await loadScript("https://localhost:5173/docs/addIframe.js")
              var edges = new sCC(0)
              var rep = new sCC(1)
              shape(() => edges.val()).repeat(() => rep.val(), 3.0, 0.0, 0.0).out()
            -->
        <pre data-prefix="3" class="whitespace-pre-wrap break-words"><code
            >//Add a variable to channel 0 </code></pre>
        <pre
          data-prefix="4"
          class="whitespace-pre-wrap break-words text-lime-500"><code
            >var edges = new sCC(0)</code
          ></pre>
        <pre data-prefix="5" class="whitespace-pre-wrap break-words"><code
            >// Update edges in real time, by using the () => </code></pre>
        <pre
          data-prefix="7"
          class="whitespace-pre-wrap break-words text-lime-500"><code
            >shape(() => edges.val()).out()</code
          ></pre>
      </div>
    </div>
  </div>
  <div class="flex lg:flex-row flex-col p-2">
    <div class="label font-bold">
      <span class="label-text">Helper functions</span>
    </div>
    <div class=" w-full">
      <div id="example-code" class="code-section bg-black">
        <pre data-prefix="1" class="whitespace-pre-wrap break-words"><code
            >// Map function </code></pre>
        <pre
          data-prefix="2"
          class="whitespace-pre-wrap break-words text-lime-500"><code> map(valueSensor, inputMin, inputMax, outMin, outMax) </code></pre>
      </div>
    </div>
  </div>
</div>
