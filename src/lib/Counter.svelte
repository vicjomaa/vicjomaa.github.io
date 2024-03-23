<script>
  import { onMount } from 'svelte';

  let boardSelect = 'Uno';
  let portSelect = 'COM1';
  let baudrate = 9600;
  let consoleText = '';
  let serialConnection;
  let options = [];
  let port = null;

  onMount(async () => {
    await updatePortList();
    //startSerialConnection();
  });

  async function updatePortList() {

    if ("serial" in navigator) {
      console.log(navigator);
  }
    const ports = 'serial' in navigator ? await navigator.serial.getPorts() : [];
    options = ports.map(port => {
      return {
        label: port.serialNumber,
        value: port.path
      };
    });

    console.log(options);
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
    /*serialConnection = new SerialPort(port.path, { baudRate: baudrate });
    serialConnection.on('data', data => {
      consoleText += data.toString();
    });
    serialConnection.on('error', err => {
      console.error('Serial connection error: ', err);
      serialConnection.destroy();
      serialConnection = null;
    });*/
  }

  async function stopSerialConnection() {
    if (serialConnection) {
      await port.close();
      serialConnection = null;
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