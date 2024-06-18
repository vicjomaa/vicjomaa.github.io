// Check if sCC class is already defined on window object
var isLocal = window.location.href.startsWith("https://localhost:");
var dataToGet = null;
var dataToSend = {}; // Array to store instance IDs
var url = isLocal ? "https://localhost:5173/" : "https://vicjomaa.github.io/";

function cleanup() {
    dataToSend = {};
    const iframe = document.getElementById("scc-hydra");
    if (iframe) {
        clearInterval(iframe.updateInterval);
        window.removeEventListener("message", handleMessage);
        iframe.remove();
    }
}

if (!document.getElementById("scc-hydra")) {
    // Function to load the input window and set up event listener
    async function load() {
        cleanup(); // Clean up existing iframe

        // Create an iframe for audio effects
        const iframe = document.createElement("iframe");
        iframe.id = "scc-hydra";
        iframe.src = url;
        iframe.allow = "microphone; serial";
        iframe.style.cssText = "position: absolute; height: 100%; right: 0; top: 50px; z-index:10; opacity: 1.0; visibility: visible;";
        document.getElementById("editor-container").appendChild(iframe);

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

    function mapVal(value, inputMin, inputMax, outMin, outMax) {
        return (value - inputMin) * (outMax - outMin) / (inputMax - inputMin) + outMin;
    }

    // Define sCC class if not already defined
    if (typeof window.sCC === 'undefined') {
        class sCC {
            constructor(id) {
                this.id = id;
            }

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

function handleMessage(event) {
    const data = event.data;
    if (data) { // Check if data is not null or undefined
        dataToGet = data;
    }
}

// Listen for keydown event on document
document.addEventListener("keydown", function(event) {
    // Check if Control + Shift + H is pressed
    if (event.ctrlKey && event.shiftKey && event.key === 'H') {
        const iframe = document.getElementById("scc-hydra");
        if (iframe) {
            // Toggle visibility
            iframe.style.visibility = iframe.style.visibility === "hidden" ? "visible" : "hidden";
        }
    }
});

// Clean up resources when the page unloads
// window.addEventListener("beforeunload", cleanup);
