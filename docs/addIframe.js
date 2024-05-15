// Check if sCC class is already defined on window object


var dataToGet = null;
var dataToSend = {}; // Array to store instance IDs

var url = "https://vicjomaa.github.io/";
var urllocal = "https://localhost:5173/";

if (typeof window.sCC === 'undefined') {
    // Create an array to hold our cc values and initialize to a normalized value
   

    // Function to load the input window and set up event listener
    async function load() {
        const hydraAudioEffects = document.getElementById("hydra-audio-effects");
        if (!hydraAudioEffects) {
            // Create an iframe for audio effects
            const iframe = document.createElement("iframe");
            iframe.id = "audioEffects";
            iframe.src = urllocal;
            iframe.allow = "microphone; serial";
            iframe.style.cssText = "position: absolute; height: 100%; right: 0; top: 50px; z-index:10; opacity: 1.0;";
            document.body.appendChild(iframe);
            // Create a div for audio effects
            const d = document.createElement("div");
            d.id = "hydra-audio-effects";
            document.body.appendChild(d);

            iframe.addEventListener("load", () => {
                const updateInterval = setInterval(() => {
                    iframe.contentWindow.postMessage(dataToSend, '*');
                }, 10);
            });

            window.addEventListener("message", ({ data }) => {
                if (data) { // Check if data is not null or undefined
                  dataToGet = data;
                }
            });

            

        }
    }

    // Call load function
    load();


    // Map function to map values from one range to another
    function mapLinear(value, inputMin, inputMax) {
        return 0 + (1023 - 0) * ((value - inputMin) / (inputMax - inputMin));
    }

    // Define sCC class
    class sCC {
        constructor(id, minVal, maxVal) {
            this.id = id;
            this.minVal = minVal;
            this.maxVal = maxVal;
            dataToSend[this.id] = this.id;
        }

        // Map function to map values from one range to another
        getMap() {
            if (dataToGet && dataToGet[this.id] !== null && dataToGet[this.id] !== undefined) {
                return mapLinear(dataToGet[this.id], this.minVal, this.maxVal);
            } else {
               return 0;
            }
        }
    }

    // Export sCC class to the window object
    window.sCC = sCC;

    // Log a message indicating that sCC class is defined
    console.log("sCC class is defined.");
} 
