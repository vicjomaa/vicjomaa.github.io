<script>
    import { onMount } from 'svelte';
    import { devices } from '../assets/scripts/data.js';
    import { writable } from 'svelte/store';
    import { setParsedObject } from './storeData.js';

    let baudrate = null;
    let consoleText = '';
    let parsedObject = null;
    let port = null;
    let usbProductId = null;
  
    let inputDone;
    let outputDone;
    let inputStream;
    let outputStream;
    let reader;
    let dataSent = false;

  
    /* variables for collecting variable to manipulate */
    onMount(async () => {
      const notSupported = document.getElementById('notSupported');
      notSupported.classList.toggle('hidden', 'serial' in navigator);
    });
  
    function findVendorIdByProductId(productId) {
    const device = devices.find(device => device.usbProductId === productId);
    if (device) {
      return device.usbVendorId;
    } else {
      return null; // Return null if productId is not found
    }
  }
  
  
  async function connect() {
  
        // Filter on devices with the Arduino Uno USB Vendor/Product IDs.
        let filters = [
          { usbVendorId: findVendorIdByProductId(usbProductId) , usbProductId: usbProductId},
        ];
  
        if( baudrate != null  && usbProductId != null) {
        
            // Prompt user to select an Arduino.
            port = await navigator.serial.requestPort({ filters });
            // Wait for the serial port to open.
            await port.open({ baudRate: baudrate });
  
            // CODELAB: Add code to read the stream here.
            let decoder = new TextDecoderStream();
            inputDone = port.readable.pipeTo(decoder.writable);
            inputStream = decoder.readable
              .pipeThrough(new TransformStream(new LineBreakTransformer()))
              .pipeThrough(new TransformStream(new JSONTransformer()));
  
            reader = inputStream.getReader();
            readLoop();
  
            // CODELAB: Add code setup the output stream here.
            const encoder = new TextEncoderStream();
            outputDone = encoder.readable.pipeTo(port.writable);
            outputStream = encoder.writable;
            // CODELAB: Send CTRL-C and turn off echo on REPL
            writeToStream('\x03', 'echo(false);');
          } 
              
      
  }
  
  /**
   * @name connect
   * Opens a Web Serial connection to a micro:bit and sets up the input and
   * output stream.
   */
  async function updateConnect() {
    // CODELAB: Add disconnect code here.
    if (port) {
      await disconnect();
      return;
    }
    // CODELAB: Add code to request & open port here.
    await connect();
  
  }
  
  
  /**
   * @name disconnect
   * Closes the Web Serial connection.
   */
  async function disconnect() {
  
    // CODELAB: Close the input stream (reader).
      if (reader) {
        await reader.cancel();
        await inputDone.catch(() => {});
        reader = null;
        inputDone = null;
      }
  
    // CODELAB: Close the output stream.
      if (outputStream) {
        await outputStream.getWriter().close();
        await outputDone;
        outputStream = null;
        outputDone = null;
      }
  
     // CODELAB: Close the port.
      await port.close();
      port = null;
  
  }
  
  
  /**
   * @name readLoop
   * Reads data from the input stream and displays it on screen.
   */
    async function readLoop() {
          // CODELAB: Add read loop here.
        while (true) {
          const { value, done } = await reader.read();
          if (value) {
            dataSent = true;
            consoleText = value ;
            parsedObject = textToJson(consoleText);
            setParsedObject(parsedObject);
            
          }
          if (done) {
            dataSent = false;
            console.log('[readLoop] DONE', done);
            reader.releaseLock();
            break;
          }
        }
  
    }
  
  
  /**
   * @name writeToStream
   * Gets a writer from the output stream and send the lines to the micro:bit.
   * @param  {...string} lines lines to send to the micro:bit
   */
  function writeToStream(...lines) {
    // CODELAB: Write to output stream
      const writer = outputStream.getWriter();
      lines.forEach((line) => {
        console.log('[SEND]', line);
        writer.write(line + '\n');
      });
      writer.releaseLock();
  
  }
  
  
  /**
   * @name LineBreakTransformer
   * TransformStream to parse the stream into lines.
   */
  class LineBreakTransformer {
    constructor() {
      // A container for holding stream data until a new line.
      this.container = '';
    }
  
    transform(chunk, controller) {
  
          // CODELAB: Handle incoming chunk
      this.container += chunk;
      const lines = this.container.split('\r\n');
      this.container = lines.pop();
      lines.forEach(line => controller.enqueue(line));
  
    }
  
    flush(controller) {
      // CODELAB: Flush the stream.
      controller.enqueue(this.container);
  
    }
  }
  
  
  /**
   * @name JSONTransformer
   * TransformStream to parse the stream into a JSON object.
   * 
   */
  class JSONTransformer {
    transform(chunk, controller) {
      // CODELAB: Attempt to parse JSON content
      try {
        controller.enqueue(JSON.parse(chunk));
      } catch (e) {
        controller.enqueue(chunk);
      }
  
    }
  }
    async function changeBaudrateSelect(event) {
      baudrate = parseInt(event.target.value);
      await updateConnect();
    }
  
    
  
    function textToJson(text) {
     // Replace {cc:33, cc:76} with [{"cc":33}, {"cc":76}]
     const keyValuePairs = text.match(/(\w+):(\d+)/g); // Extract key-value pairs
      if (!keyValuePairs) {
          console.log("No key-value pairs found in the text.");
          return null;
      }
  
      const jsonData = keyValuePairs.map(pair => {
          const [key, value] = pair.split(':');
          return { [key]: parseInt(value) }; // Convert value to integer
      });
  
      return jsonData;
  }
  </script>
  
  
  
<div class="menu-section relative ">
        <div id="notSupported" class="hidden">
        Sorry, <b>Web Serial</b> is not supported on this device, make sure you're 
        running Chrome 78 or later and have enabled the 
        <code>#enable-experimental-web-platform-features</code> flag in
        <code>chrome://flags</code>
        </div>
        <div class="menu-section-bg"></div>
      
        <div class="flex  lg:flex-row flex-col   p-2">
            <label class="form-control w-full max-w-xs">
                <div class="label">
                    <span class="label-text">Board</span>
                </div>
                <select class="select select-bordered" bind:value="{usbProductId}" on:change={updateConnect}>
                    <option  value="" disabled selected>Pick a board</option>
                    {#each devices as device }
                    <option value="{device.usbProductId}">
                        {device.name}
                    </option>
                    {/each}
                </select>
            </label>
            <label class="form-control w-full max-w-xs">
                <div class="label">
                    <span class="label-text">Baud Rate</span>
                </div>
                <select class="select select-bordered" bind:value={baudrate} on:change={changeBaudrateSelect}>
                    <option value="" disabled selected>Pick the baudRate</option>
                    <option value={9600}>9600</option>
                    <option value={19200}>19200</option>
                    <option value={57600}>57600</option>
                    <option value={115200}>115200</option>
                </select>
            </label>
        </div>

        <div class="divider label-text text-s">Connection State</div>

        <div class="section-stats  w-full flex flex-row ">
            <div class=" flex flex-col shadow w-1/2 p-2 items-center">
                <div class="label-text text-xs">Connection</div>
                <div class="badge mt-2 {port ? 'badge-accent': 'badge-ghost'}" >{port ? 'OK': 'Offline'}</div>
            </div>
                
            <div class="flex  flex-col  shadow  w-1/2 p-2 items-center">
                <div class="label-text text-xs">Data</div>
                <div class="badge mt-2 {dataSent ? 'badge-accent': 'badge-ghost'}" >{port ? 'OK': 'Close'}</div>
            </div>
        </div>

        <div class="divider label-text text-s"></div>

        <div class=" w-full  flex justify-between  items-center p-4">
            <div class= "{port ?  '' : 'hidden'}">
                <button class="btn-sm" on:click={disconnect}>  Close Port</button>
            </div>
    
            <div class=" {port == null && baudrate != null  && usbProductId != null  ?  '' : 'hidden'}">
                <button class="btn-sm"  on:click={updateConnect}> Reconnect</button>
            </div>
                

        </div>
        
</div>
  