<script>
  import { onMount } from "svelte";
  import { sortedDevices } from "../assets/scripts/data.js";
  import { writable } from "svelte/store";
  import { setParsedObject } from "./storeData.js";

  let baudrate = null;
  let consoleText = "";
  let parsedObject = null;
  let port = null;
  let usbProductId = null;
  let manufacturer = "Arduino";

  let inputDone;
  let outputDone;
  let inputStream;
  let outputStream;
  let reader;
  let dataSent = false;
  let busyExternalD = false;

  /* variables for collecting variable to manipulate */
  onMount(async () => {
    const notSupported = document.getElementById("notSupported");
    notSupported.classList.toggle("hidden", "serial" in navigator);
  });

  function findVendorIdByProductId(productId) {
    for (const manufacturer in sortedDevices) {
      for (const board in sortedDevices[manufacturer]) {
        const device = sortedDevices[manufacturer][board];
        if (device.usbProductId === productId) {
          return device.usbVendorId;
        }
      }
    }
    return null; // Return null if productId is not found
  }

  async function connect() {
    // Filter on devices with the Arduino Uno USB Vendor/Product IDs.
    let filters = [
      {
        usbVendorId: findVendorIdByProductId(usbProductId),
        usbProductId: usbProductId,
      },
    ];

    if (baudrate != null && usbProductId != null) {
      try {
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
        writeToStream("\x03", "echo(false);");
        busyExternalD = false;
      } catch (error) {
        busyExternalD = true;
        console.error("Error opening port:", error);
        port = null; // Reset port to null if opening failed
      }
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
      console.log(port);
      console.log("disconnect");
      await disconnect();
      return;
    }
    // CODELAB: Add code to request & open port here.
    console.log("connect");
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
        consoleText = value;
        parsedObject = textToJson(consoleText);
        setParsedObject(parsedObject);
      }
      if (done) {
        dataSent = false;
        console.log("[readLoop] DONE", done);
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
      console.log("[SEND]", line);
      writer.write(line + "\n");
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
      this.container = "";
    }

    transform(chunk, controller) {
      // CODELAB: Handle incoming chunk
      this.container += chunk;
      const lines = this.container.split("\r\n");
      this.container = lines.pop();
      lines.forEach((line) => controller.enqueue(line));
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
    // Check if text is a string and not null or undefined
    if (typeof text !== 'string') {
        return [];
    }

    // Remove the curly braces
    text = text.replace(/[{}]/g, "");

    // Handle empty input
    if (text.trim() === "") {
        return [];
    }

    // Split the text into key-value pairs
    const keyValuePairs = text.split(/,\s*/);
    const jsonData = [];
    keyValuePairs.forEach((pair) => {
        // Split each pair into key and value
        const [key, value] = pair.split(":");

        // Skip if either key or value is undefined
        if (key === undefined || value === undefined) return;

        const numericValue = value.includes(".")
            ? parseFloat(value)
            : parseInt(value, 10);

        jsonData.push({ [key.trim()]: numericValue });
    });

    return jsonData;
}

</script>

<div class="menu-section relative">
  <div id="notSupported" class="alert alert-error hidden">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      /></svg
    >
    Sorry, <b>Web Serial</b> is not supported on this device, make sure you're
    running Chrome 78 or later and have enabled the
    <code>#enable-experimental-web-platform-features</code> flag in
    <code>chrome://flags</code>
  </div>

  <div class="menu-section-bg"></div>

  <div class="flex lg:flex-row flex-col p-2">
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">Manufacturer</span>
      </div>
      <select class="select select-bordered" bind:value={manufacturer}>
        <option value="" disabled selected>Pick a board</option>
        {#each Object.keys(sortedDevices) as manufacturer}
          <option value={manufacturer}>
            {manufacturer}
          </option>
        {/each}
      </select>
    </label>
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">Board</span>
      </div>
      <select
        class="select select-bordered"
        bind:value={usbProductId}
        on:change={updateConnect}
      >
        <option value="" disabled selected>Pick a reference</option>
        {#each Object.keys(sortedDevices[manufacturer]) as board}
          <option value={sortedDevices[manufacturer][board].usbProductId}>
            {sortedDevices[manufacturer][board].name}
          </option>
        {/each}
      </select>
    </label>
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">Baud Rate</span>
      </div>
      <select
        class="select select-bordered"
        bind:value={baudrate}
        on:change={changeBaudrateSelect}
      >
        <option value="" disabled selected>Pick the baudRate</option>
        <option value={9600}>9600</option>
        <option value={19200}>19200</option>
        <option value={57600}>57600</option>
        <option value={115200}>115200</option>
      </select>
    </label>
  </div>

  <div class="divider label-text text-s">Connection State</div>

  <div class="section-stats w-full flex flex-col">
    <div class=" flex flex-col shadow w-full p-2 items-center">
      <div class="label-text text-xs">Connection</div>
      <div class="badge mt-2 {port ? 'badge-accent' : 'badge-ghost'}">
        {port ? "Connected" : "Not Avaliable"}
      </div>
    </div>
    <div role="alert" class="alert alert-error {busyExternalD ? '' : 'hidden'}">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        /></svg
      >
      <span
        >Sorry,<b>It looks</b> the device is being used by
        <code>another program</code>
      </span>
    </div>
  </div>

  <div class="divider label-text text-s"></div>

  <div class=" w-full flex justify-between items-center p-4">
    <div class={port ? "" : "hidden"}>
      <button class="btn-sm" on:click={disconnect}> Close Port</button>
    </div>

    <div
      class=" {port == null && baudrate != null && usbProductId != null
        ? ''
        : 'hidden'}"
    >
      <button class="btn-sm" on:click={updateConnect}> Reconnect</button>
    </div>
  </div>
</div>
