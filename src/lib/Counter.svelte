<script>
  import { onMount } from 'svelte';

  let boardSelect = 'Uno';
  let portSelect = 'COM1';
  let baudrate = 9600;
  let consoleText = '';
  let serialConnection;
  let options = [];
  let port = null;


  const filters = [
      { 'vendorId': 0x2341, 'productId': 0x003d }, // Arduino Mega 2560
      { 'vendorId': 0x2341, 'productId': 0x8036 }, // Arduino Leonardo
      { 'vendorId': 0x2341, 'productId': 0x8037 }, // Arduino Micro
      { 'vendorId': 0x2341, 'productId': 0x804d }, // Arduino/Genuino Zero
      { 'vendorId': 0x2341, 'productId': 0x804e }, // Arduino/Genuino MKR1000
      { 'vendorId': 0x2341, 'productId': 0x804f }, // Arduino MKRZERO
      { 'vendorId': 0x2341, 'productId': 0x8050 }, // Arduino MKR FOX 1200
      { 'vendorId': 0x2341, 'productId': 0x8052 }, // Arduino MKR GSM 1400
      { 'vendorId': 0x2341, 'productId': 0x8053 }, // Arduino MKR WAN 1300
      { 'vendorId': 0x2341, 'productId': 0x8054 }, // Arduino MKR WiFi 1010
      { 'vendorId': 0x2341, 'productId': 0x8055 }, // Arduino MKR NB 1500
      { 'vendorId': 0x2341, 'productId': 0x8056 }, // Arduino MKR Vidor 4000
      { 'vendorId': 0x2341, 'productId': 0x8057 }, // Arduino NANO 33 IoT
      { 'vendorId': 0x239A, 'productId': 0x000E }, // Adafruit ItsyBitsy 32u4
      { 'vendorId': 0x239A, 'productId': 0x800D }, // Adafruit ItsyBitsy 32u4
  ];

  onMount(async () => {
    await updatePortList();
  
  });

  async function updatePortList() {
      if ("serial" in navigator) {
        try {
          const ports = await navigator.serial.getPorts();
          const options = ports.map((port) => {
            console.log(port.getInfo());
            return {
              label: port.getInfo().usbProductId,
              value: port.getInfo().usbVendorIdvendorId
            };
          });
          
        } catch (error) {
          console.error('Error accessing serial ports:', error);
        }
      }else{
        console.error('Error accessing serial ports:', error);
      }
    }


async function requestPort(path) {
    const port = await navigator.serial.requestPort({ path });
    return port;
  }

  async function startSerialConnection() {
    if (serialConnection) {
      return;
    }
    port = await requestPort(portSelect);
    const reader = port.readable.getReader();
    async function read() {
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        consoleText += new TextDecoder().decode(value) + '\n';
        reader.releaseLock();
        await reader.closed.then(read);
      }
    }

    read();

    port.addEventListener('error', err => {
      console.error('Serial connection error: ', err);
      port.close();
      port = null;
    });

    port.addEventListener('close', () => {
      port = null;
    });

  }

  async function stopSerialConnection() {
    if (port) {
      port.close();
      port = null;
    }
  }



  async function changeBoardSelect(event) {
    boardSelect = event.target.value;
    await stopSerialConnection();
    await startSerialConnection();
  }

  async function changePortSelect(event) {
    portSelect = event.target.value;
    await stopSerialConnection();
    await startSerialConnection();
  }

  async function changeBaudrateSelect(event) {
    baudrate = parseInt(event.target.value);
    await stopSerialConnection();
    await startSerialConnection();
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
  <div>
    <label>
      Board:
      <select bind:value={boardSelect} on:change={changeBoardSelect}>
        <option>Uno</option>
        <option>Mega</option>
        <option>Leonardo</option>
      </select>
    </label>
    <label>
      Port:
      <select bind:value={portSelect} on:change={changePortSelect}>
        {#each options as option}
          <option value={option.value}>{option.label}</option>
        {/each}
      </select>
    </label>
    <label>
      Baudrate:
      <select bind:value={baudrate} on:change={changeBaudrateSelect}>
        <option value={9600}>9600</option>
        <option value={19200}>19200</option>
        <option value={57600}>57600</option>
      </select>
    </label>
  </div>
  <pre>{consoleText}</pre>
</main>