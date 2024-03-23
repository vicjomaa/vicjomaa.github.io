<script>
	import { onMount } from "svelte";
	import {projectsGames} from '../../assets/scripts/dataProjects';
	import Footer from "../../components/Footers/Footer.svelte";
	import { colorMouse } from "../../assets/scripts/colorMouse.js";
	import Cursor from "../../components/Helpers/Cursor.svelte";

	
	// @ts-ignore
	import NavbarMain from "../../components/Navbars/NavbarMain.svelte";
; 

	// core components
	let colorBack;
	let dialog; // HTMLDialogElement
	let cursorComponent;
	let updateDone = false;

	export function getItemInfo(item) {
		let globalsArray =[...projectsGames];
		return globalsArray.find(project => project.number == item);
	};

	export function getPrevAndNext(item) {
		let globalsArray =[...projectsGames];
		
		let next = item == globalsArray.length ? 1:item+1;
		let prev = item == 1 ? globalsArray.length:item-1;

		let prevNext =[globalsArray.find(project => project.number == prev.toString()), globalsArray.find(project => project.number == next.toString())];;
		
		return prevNext;
	};


	onMount(() => {
        const addCursorEvent = (eventType) => (e) => {
			const touch = eventType === 'touchmove' ? e.touches[0] : e;
			const sectionX = touch.clientX / window.innerWidth;
			colorBack = colorMouse(sectionX).hexColor;
			if (!updateDone) {
				updateDone = cursorComponent.updateCursor();
			}
		};

		window.addEventListener('mousemove', addCursorEvent('mousemove'));
		window.addEventListener('touchmove', addCursorEvent('touchmove'));

		})

  </script>


<Cursor bind:this={cursorComponent}/>
<div class="-z-10 w-full h-full fixed bg-whiteP top-0"></div>
<NavbarMain menuScrollSection={false} />

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<main bind:this={dialog} >
	<slot/>
</main>


<Footer bind:colorBack/>



