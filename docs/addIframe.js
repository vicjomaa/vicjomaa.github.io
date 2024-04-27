// Create an array to hold our cc values and initialize to a normalized value
var cc = Array(128).fill(0.5);
var dataToGet = null;

// Array to store instance IDs
var dataToSend = [];


// Function to load the input window and set up event listener
async function load() {
    const hydraAudioEffects = document.getElementById("hydra-audio-effects");
    if (!hydraAudioEffects) {
        // Create an iframe for audio effects
        const iframe = document.createElement("iframe");
        iframe.id = "audioEffects";
        iframe.src = "https://vicjomaa.github.io/";
        iframe.allow = "microphone; serial";
        iframe.style.cssText = "position: absolute; height: 100%; right: 0; top: 50px; z-index:10; opacity: 1.0;";
        document.body.appendChild(iframe);

        // Create a div for audio effects
        const d = document.createElement("div");
        d.id = "hydra-audio-effects";
        document.body.appendChild(d);

        // Set up event listener to receive messages from the iframe
        window.addEventListener('message', handleMessage);

         // Set up an interval to send array to the parent every 10 milliseconds
         const updateInterval = setInterval(() => {
            window.parent.postMessage({ dataToSend }, '*');
        }, 10);

        // Clean up the interval when the component is unmounted or iframe is removed
        window.addEventListener('beforeunload', () => clearInterval(updateInterval));

    }
}

// Call load function
load();

function handleMessage(event) {
    // Ensure message is coming from the iframe
    if (event.origin !== "https://vicjomaa.github.io/") return;
        dataToGet = event.data;
}

// Map function to map values from one range to another
function mapLinear(value, inputMin, inputMax) {
    return 0 + (1023 - 0) * ((value - inputMin) / (inputMax - inputMin));
}



class sCC {
    constructor(id, minVal, maxVal) {
        if (sCC.instance) {
            return sCC.instance;
        }
        
        this.id = id;
        this.minVal = minVal;
        this.maxVal = maxVal;
        dataToSend.push(this.id);
        
        // Store the instance
        sCC.instance = this;
    }

    // Map function to map values from one range to another
    getMap() {
        return mapLinear(cc[this.id], this.minVal, this.maxVal);
    }

    // Static method to get the instance
    static getInstance(id, minVal, maxVal) {
        if (!sCC.instance) {
            sCC.instance = new sCC(id, minVal, maxVal);
        }
        return sCC.instance;
    }
}

// Export sCC class based on the environment
if (typeof window !== 'undefined') {
    // Export for browser environment
    window.sCC = sCC;
} else if (typeof global !== 'undefined') {
    // Export for Node.js/CommonJS
    module.exports = sCC;
}
