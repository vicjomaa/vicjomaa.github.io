<script>
  import { onMount } from 'svelte';


  let baudrate = 115200;
  let consoleText = '';
  let serialConnection = false;
  let port = null;

  let usbProductId = null;



  let inputDone;
  let outputDone;



  

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

          // Prompt user to select an Arduino.
          port = await navigator.serial.requestPort({ filters });
          // Wait for the serial port to open.
          await port.open({ baudRate: baudrate });


          // CODELAB: Add code to read the stream here.
          let decoder = new TextDecoderStream();
          inputDone = port.readable.pipeTo(decoder.writable);
          inputStream = decoder.readable;

          reader = inputStream.getReader();
          readLoop();

          // CODELAB: Add code setup the output stream here.
          const encoder = new TextEncoderStream();
          outputDone = encoder.readable.pipeTo(port.writable);
          outputStream = encoder.writable;


        // CODELAB: Send CTRL-C and turn off echo on REPL
        writeToStream('\x03', 'echo(false);');

    
        
    }




  

/**
 * @name connect
 * Opens a Web Serial connection to a micro:bit and sets up the input and
 * output stream.
 */
async function updateConnect() {
  // CODELAB: Add code to request & open port here.
  await connect();

  // CODELAB: Add code setup the output stream here.

  // CODELAB: Send CTRL-C and turn off echo on REPL

  // CODELAB: Add code to read the stream here.

}


/**
 * @name disconnect
 * Closes the Web Serial connection.
 */
async function disconnect() {
  //drawGrid(GRID_OFF);
  sendGrid();

  // CODELAB: Close the input stream (reader).

  // CODELAB: Close the output stream.

  // CODELAB: Close the port.

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
          consoleText = value + '\n';
        }
        if (done) {
          console.log('[readLoop] DONE', done);
          reader.releaseLock();
          break;
        }
      }

  }


/**
 * @name sendGrid
 * Iterates over the checkboxes and generates the command to set the LEDs.
 */
function sendGrid() {
  // CODELAB: Generate the grid

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
 * @name watchButton
 * Tells the micro:bit to print a string on the console on button press.
 * @param {String} btnId Button ID (either BTN1 or BTN2)
 */
function watchButton(btnId) {
  // CODELAB: Hook up the micro:bit buttons to print a string.

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

  }

  flush(controller) {
    // CODELAB: Flush the stream.

  }
}


/**
 * @name JSONTransformer
 * TransformStream to parse the stream into a JSON object.
 */
class JSONTransformer {
  transform(chunk, controller) {
    // CODELAB: Attempt to parse JSON content

  }
}


/**
 * @name buttonPushed
 * Event handler called when one of the micro:bit buttons is pushed.
 * @param {Object} butEvt
 */
function buttonPushed(butEvt) {
  // CODELAB: micro:bit button press handler

}

  async function changeBaudrateSelect(event) {
    baudrate = parseInt(event.target.value);
    await updateConnect();
  }
</script>



<main>
  <div id="notSupported" class="hidden">
    Sorry, <b>Web Serial</b> is not supported on this device, make sure you're 
    running Chrome 78 or later and have enabled the 
    <code>#enable-experimental-web-platform-features</code> flag in
    <code>chrome://flags</code>
  </div>
  <h1>Arduino Serial Reader</h1>
  <button on:click={disconnect}>Close Port</button>
  <div>
    <select bind:value="{usbProductId}" on:change={updateConnect}>
      {#each devices as device }
        <option value="{device.usbProductId}">
          {device.name}
        </option>
      {/each}
    </select>
  </div>
  <div>
    <label>
      Baudrate:
      <select bind:value={baudrate} on:change={changeBaudrateSelect}>
        <option value={9600}>9600</option>
        <option value={19200}>19200</option>
        <option value={57600}>57600</option>
        <option value={115200}>115200</option>
      </select>
    </label>
  </div>
  <div class="board-status">
    Connection Status:
    {port ?  'Connected ': 'Offline'}
    <i class={port ? 'fas fa-check-circle' : 'fas fa-times-circle'}></i>
  </div>
  <pre>{consoleText}</pre>
</main>