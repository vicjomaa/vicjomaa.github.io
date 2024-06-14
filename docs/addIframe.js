// Check if sCC class is already defined on window object
var isLocal = window.location.href.startsWith("https://localhost:");
var dataToGet = null;
var dataToSend = {}; // Array to store instance IDs
var url = isLocal ? "https://localhost:5173/" : "https://vicjomaa.github.io/";

function cleanup() {
    dataToSend = {}
    const hydraAudioEffects = document.getElementById("hydra-audio-effects");
    if (hydraAudioEffects) {
        hydraAudioEffects.remove();
    }
    const iframe = document.getElementById("audioEffects");
    if (iframe) {
        clearInterval(iframe.updateInterval);
        window.removeEventListener("message", handleMessage);
        iframe.remove();

    }
}

if (!document.getElementById("hydra-audio-effects")) {
    // Function to load the input window and set up event listener
    async function load() {
        cleanup(); // Clean up existing listeners and iframe

        // Create an iframe for audio effects
        const iframe = document.createElement("iframe");
        iframe.id = "audioEffects";
        iframe.src = url;
        iframe.allow = "microphone; serial";
        iframe.style.cssText = "position: absolute; height: 100%; right: 0; top: 50px; z-index:10; opacity: 1.0;";
        document.body.appendChild(iframe);

        // Create a div for audio effects
        const d = document.createElement("div");
        d.id = "hydra-audio-effects";
        document.body.appendChild(d);



        iframe.addEventListener("load", () => {
            iframe.updateInterval = setInterval(() => {
                // Check if the iframe element exists
                if (iframe.contentWindow) {
                    iframe.contentWindow.postMessage(dataToSend, '*');
                }
            }, 10);
        });

        window.addEventListener("message", handleMessage);
    }

    // Call load function
    load();


    // Map function to map values from one range to another
    function mapVal(value, inputMin, inputMax, outMin, outMax) {
        return (value - inputMin) * (outMax - outMin) / (inputMax - inputMin) + outMin;
    }

    // Define sCC class
    /*class sCC {
        constructor(id, minVal, maxVal) {
            this.id = id;
            this.minVal = minVal;
            this.maxVal = maxVal;
            dataToSend[this.id] = { min: this.minVal, max: this.maxVal };
        }

        // Map function to map values from one range to another
        getMap() {
            if (dataToGet && dataToGet[this.id] !== null && dataToGet[this.id] !== undefined) {
                return mapLinear(dataToGet[this.id], this.minVal, this.maxVal);
            } else {
               return 0;
            }
        }
    
    }*/

    function getVal(id, dataToGet) {
        let val = 0;
        let max = 0;
        let min = 0;

        if (dataToGet) {
            for (let key in dataToGet) {
                let item = dataToGet[key];
                if (item.channel === id) {
                    val = item.val;
                    max = item.max;
                    min = item.min;
                    break; // Exit the loop once the matching item is found
                }
            }
        }

        return { val, max, min };
    }

    if (typeof window.sCC === 'undefined') {

        class sCC {
            constructor(id) {
                this.id = id;
                //this.inputMax = dataToGet[this.id].max;

            }

            // Map function to map values from one range to another
            val() {
                const result = getVal(this.id, dataToGet);
                return result.val;
            }
            map(outMin, outMax) {
                const result = getVal(this.id, dataToGet);
                return mapVal(result.val, result.min, result.max, outMin, outMax);


            }
        }



        // Export sCC class to the window object
        window.sCC = sCC;

        // Log a message indicating that sCC class is defined
        console.log("sCC class is defined.");

    }




}

function handleMessage(event) {
    const data = event.data;
    if (data) { // Check if data is not null or undefined
        dataToGet = data;
    }
}

// Clean up resources when the page unloads
//window.addEventListener("beforeunload", cleanup);
