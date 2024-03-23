<script>
    import { link } from "svelte-routing";
    import { onMount } from "svelte";

  
    // core components
    // @ts-ignore
    import NavbarMain from "../components/Navbars/NavbarMain.svelte";
    import { hexColor } from '../assets/scripts/indexthree.js';
    import Footer from "../components/Footers/Footer.svelte";
    import Cursor from "../components/Helpers/Cursor.svelte";
    import ItemAbout from "../components/Helpers/ItemAbout.svelte";

    let date = new Date().getFullYear();
    let colorBack;
 
  
  
    onMount(() => {
      const addCursorEvent = (eventType) => (e) => {
        const touch = eventType === 'touchmove' ? e.touches[0] : e;
        colorBack = hexColor;
      }

      window.addEventListener('mousemove', addCursorEvent('mousemove'));
	  window.addEventListener('touchmove', addCursorEvent('touchmove'));
    })
  
  </script>
  
  <style>



  </style>
  

  

<Cursor/>
<div class="-z-10 w-full h-full fixed bg-whiteP top-0"></div>
<NavbarMain menuScrollSection={ false } />

<section class=" flex flex-col lg:flex-row my-[40vh] ">
    <div class=" relative text-s font-regular mr-0 px-[15%]   lg:mr-20 wow fadeInUp"  data-wow-duration="2s">
        <div class=" text-5xl font-newsreader text-inter my-5"  style:color={colorBack}  >
            <h2>Hello!</h2>
        </div>
          <p>
            I'm a Colombian <b>creative technologist</b> with a passion for understanding
            how computation shapes human experiences and how human interactions
            intricately influence the world of computation. Currently, my focus
            is centered on data as the connection between both realms. I
            enjoy exploring this aspect through <b>physicalization</b>, <b>immersive media</b>,
            and the creative freedom <b>provided by art</b>.
          </p>
        </div>
    <div class=" relative  mt-20 px-[15%] lg:px-0 lg:mt-0  lg:min-w-[500px]">
        <div class="flex flex-col wow fadeInUp"  data-wow-duration="2s">
            <span class="font-inter uppercase font-bold mb-4 text-xs"><h2>Education</h2></span>
            <ItemAbout headline={"HCI - Master"}  place={"Bauhaus Universität Weimar"} date={"2021 - Present"}>
            </ItemAbout>
            <ItemAbout headline={"DESIGNER - emphasis in products"}  place={"University of Los Andes"} date={"2014"}>
            </ItemAbout>
            <ItemAbout headline={"PHYSICIST"}  place={"University of Los Andes"} date={"2014"}>
            </ItemAbout> 
    
     

        <div class="flex flex-col mt-10 wow fadeInUp"  data-wow-duration="2s">
            <span class="font-inter uppercase font-bold mb-4 text-xs"><h2>EXPERIENCE</h2></span>

            <ItemAbout headline={"VR developer"}  place={"Igniti GmbH - Carl Zeiss AG"} date={"2022 - 2023"}>
                Designer and developer of immersive experiences <br>
                for job training (Unreal/Unity)
            </ItemAbout>
            <ItemAbout headline={"UX/UI Designer"}  place={"Watson Creative - Portland, USA"} date={"2021"}>
                UX Web designer
            </ItemAbout>
            <ItemAbout headline={"FullStack Web Developer"}  place={"Leal SAS"} date={"2020"}>
                FrontEnd and BackEnd Angular developer <br>
            </ItemAbout> 
            <ItemAbout headline={"Educator and Developer"}  place={"Critertec Educación SAS"} date={"2017-2020"}>
                Educator and developer of virtual learning <br>
                objects for public schools.
            </ItemAbout> 
            <ItemAbout headline={"Tutor of Wiring Board"}  place={"University of Los Andes"} date={"2015"}>
                Advisor in physical computing projects for<br>
                freshman students in system Engineering
            </ItemAbout> 
        </div>

        <div class="flex flex-col mt-10 wow fadeInUp"  data-wow-duration="2s">
            <span class="font-inter uppercase font-bold mb-4 text-xs"><h2>RECOGNITIONS</h2></span>
        
            <ItemAbout headline={"Transmedia Storytelling Winners"}  place={"Crea Digital - Bogotá. Colombia"} date={"2019"}>
                UX designer and APP developer in “Guardianes” <br>
                project by Critertec Educación SAS
            </ItemAbout>
            <ItemAbout headline={"VideoGames Honorific Mention"}  place={"Crea Digital - Bogotá. Colombia"} date={"2018"}>
                UX designer and AR game developer in “Mimaco”<br>
                project by Critertec SAS
            </ItemAbout>
            <ItemAbout headline={"Outstanding Design Degree Project"}  place={"University of Los Andes- Bogotá. Colombia"} date={"2016"}>
                Thesis exhibited at Volarán event
            </ItemAbout> 
            <ItemAbout headline={"I WANT TO STUDY” scholarship"}  place={"University of Los Andes"} date={"2009"}>
                Scholarship for academically excellent<br> 
                students during bachelor
            </ItemAbout> 
        </div>
   
    </div>
  </section>

<Footer bind:colorBack/>















