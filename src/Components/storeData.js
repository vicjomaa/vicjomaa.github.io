import { writable } from 'svelte/store';

// Initial value of parsedObject
const initialParsedObject = null;

// Create a writable store for parsedObject
export const parsedObjectStore = writable(initialParsedObject);

// Function to update the value of parsedObject in the store
export function setParsedObject(parsedO) {
    parsedObjectStore.set(parsedO);
}

// Function to get the value of parsedObject from the store
export function getParsedObject() {
    let parsedObjectValue = null;

    // Subscribe to the parsedObjectStore to get its current value
    const unsubscribe = parsedObjectStore.subscribe(value => {
        parsedObjectValue = value;
    });

    // Unsubscribe to avoid memory leaks
    unsubscribe();

    return parsedObjectValue;
}
