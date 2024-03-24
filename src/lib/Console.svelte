<script>
  import { onMount } from 'svelte';


  let baudrate = null;
  let consoleText = '';
  let parsedObject = null;
  let serialConnection = false;
  let port = null;

  let usbProductId = null;
  let failSelection = false;



  let inputDone;
  let outputDone;
  let inputStream;
  let outputStream;
  let reader;

  let dataSent = false;




  

  const devices = [
  {
    name: 'Arduino Mega 2560',
    usbVendorId: 0x2341,
    usbProductId: 0x0042
  },
  {
    name: 'Arduino Leonardo',
    usbVendorId: 0x2341,
    usbProductId: 0x8036
  },
  {
    name: 'Arduino Micro',
    usbVendorId: 0x2341,
    usbProductId: 0x8037
  },
  {
    name: 'Arduino/Genuino Zero',
    usbVendorId: 0x2341,
    usbProductId: 0x804d
  },
  {
    name: 'Arduino/Genuino MKR1000',
    usbVendorId: 0x2341,
    usbProductId: 0x804e
  },
  {
    name: 'Arduino MKRZERO',
    usbVendorId: 0x2341,
    usbProductId: 0x804f
  },
  {
    name: 'Arduino MKR FOX 1200',
    usbVendorId: 0x2341,
    usbProductId: 0x8050
  },
  {
    name: 'Arduino MKR GSM 1400',
    usbVendorId: 0x2341,
    usbProductId: 0x8052
  },
  {
    name: 'Arduino MKR WAN 1300',
    usbVendorId: 0x2341,
    usbProductId: 0x8053
  },
  {
    name: 'Arduino MKR WiFi 1010',
    usbVendorId: 0x2341,
    usbProductId: 0x8054
  },
  {
    name: 'Arduino MKR NB 1500',
    usbVendorId: 0x2341,
    usbProductId: 0x8055
  },
  {
    name: 'Arduino MKR Vidor 4000',
    usbVendorId: 0x2341,
    usbProductId: 0x8056
  },
  {
    name: 'Arduino NANO 33 IoT',
    usbVendorId: 0x2341,
    usbProductId: 0x8057
  },
  {
    name: 'Adafruit ItsyBitsy 32u4',
    usbVendorId: 0x239A,
    usbProductId: 0x000E
  },
  {
    name: 'Adafruit ItsyBitsy 32u4',
    usbVendorId: 0x239A,
    usbProductId: 0x800D
  }
];

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
        console.error("No key-value pairs found in the text.");
        return null;
    }

    const jsonData = keyValuePairs.map(pair => {
        const [key, value] = pair.split(':');
        return { [key]: parseInt(value) }; // Convert value to integer
    });

    return jsonData;
}




</script>




<main>
  <div id="notSupported" class="hidden">
    Sorry, <b>Web Serial</b> is not supported on this device, make sure you're 
    running Chrome 78 or later and have enabled the 
    <code>#enable-experimental-web-platform-features</code> flag in
    <code>chrome://flags</code>
  </div>
  <h1>Hydra OSC</h1>


 

  <div class="flex flex-row my-5">
      <label class="form-control w-full max-w-xs mr-10">
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
  <div class="stats shadow">
  
    <div class="stat">
      <div class="stat-title">Connection Status</div>
      <div class="badge my-2 {port ? 'badge-accent': 'badge-ghost'}" >{port ? 'OK': 'Offline'}</div>
    </div>
      
      <div class="stat">
        <div class="stat-title">Data Stream</div>
        <div class="badge my-2 {dataSent ? 'badge-accent': 'badge-default'}" >{port ? 'OK': 'Close'}</div>
      </div>
    </div>
 
    <div class="flex flex-row">
      {#if parsedObject !== null}
      {#each parsedObject as item, index}
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

    <div class="divider">OR</div>
    <div class="my-10 {port ?  '' : 'hidden'}">
      <button on:click={disconnect}>  Close Port</button>
    </div>

    <div class="my-10 {port == null && baudrate != null  && usbProductId != null  ?  '' : 'hidden'}">
      <button on:click={updateConnect}> Reconnect</button>
    </div>

</main>