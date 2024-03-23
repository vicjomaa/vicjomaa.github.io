<script>
 import ProjectLayout  from "./ProjectLayout.svelte";
 import { onMount } from "svelte";
 import HeaderProject from "./HeaderProject.svelte";
 import SectionProjectText from "./SectionProjectText.svelte";
 import MoreProjects from "./MoreProjects.svelte";
 import ImageBox from "./ImageBox.svelte";
 import ExternalLinks from "./ExternalLinks.svelte";


 let projectComponent ;
 let dataProject;
 let prevNextProjects;
 
 let item = 7;

 onMount(()=>{
	dataProject = projectComponent.getItemInfo(item);
	prevNextProjects = projectComponent.getPrevAndNext(item);
 })

</script>



<ProjectLayout  bind:this={projectComponent}>
	<!-- First section -->
	<HeaderProject dataProject={dataProject}></HeaderProject>
	<SectionProjectText
	headline="Concept">
	
	<p>This website reflects <b>NEXGEN's</b> rebranding and positioning strategy.
		Its primary goal is to attract visitors' interest towards services
		or tailored solutions for various industries, providing necessary
		information and maintaining motivation until converting vistis into leads.
	</p>

	</SectionProjectText>
	<SectionProjectText
	headline="ReSEARCh / 
	INSPIRATION">

	<p>As an initial step, the team of creatives embarked on establishing the 
		strategic direction of the organization. This process involved conducting
		interviews with <b>NEXGEN's</b> team and analyzing other competitors.
		These efforts yielded valuable insights that informed
		the design of the website, including the development of <b>brand identity,
		bounce rates analytics and the different user personas interests</b>.

	</p>

	<br>
	<p>In addition, a brand image was developed to <b>guide the design system</b>
	with a palette of colours, typography and patterns enclosing the tone and voice of the new brand.
	</p>
	
	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image2: ''} imageID={"abstract vs experiencial"}>
			The old site lacked hierarchy and context for the CTAs. In addition, the main navigation is cluttered with options that compete for attention with those that can drive leads. &nbsp;
		</ImageBox>
	</div>



	</SectionProjectText>
	<SectionProjectText
	headline="PROTOTIPE
	SKETCH">

	<p>
	In the prototype, the sections in the navigation bar have been
	merged to focus the exploration on very specific interests:
	<b>solutions</b>, <b>services</b> for their industry, and those interested
	in finding out more about the latest updates on <b>asset
	management</b> and its events. The remaining options focus on learning more about the organisation,
	and the other two diversify the conversion by having direct contact with the team or directly requesting a demo.
	</p>


	<div class="flex flex-col lg:flex-row">
		<ImageBox imageURL={dataProject != undefined ? dataProject.image3: ''} imageID={"abstract vs experiencial"}>
			The new sitemap with labels that denote the user personas entry poitns. All the pages and subpages contains different typologies of CTA depending of the personas. &nbsp;
		</ImageBox>
	</div>


	</SectionProjectText>
	<SectionProjectText
	headline="Result">
	<p>
	The new main menu emphasizes solutions, industries, and resources as primary pathways
	for the conversion strategy. On the homepage, these components are divided into
	sections that highlight the potential of the solutions, showcasing the
	<b>support and expertise</b> of the NEXGEN team to elevate clients to the next level. 
	</p>
	<br>
	<p>Regarding the scalability of the services portfolio, the subpages were redesigned base on modularity.
	This approach streamlines navigation, allowing users to explore all the specific services or industries without
	needing to backtrack to the home page or a parent section. </p>

	<ImageBox imageURL={dataProject != undefined ? dataProject.image5: ''}  imageID={"step1"}>
		The new hompeage with aspirational CTAs for each section and a more cohesive  brand identity.  &nbsp;
	
	</ImageBox>
	<ImageBox imageURL={dataProject != undefined ? dataProject.image6: ''}  imageID={"step2"}>
		Individual industries and solutions have buttons to move to the next or following project without having to go back to the main page or menu.  &nbsp;
	</ImageBox>

	<ImageBox imageURL={dataProject != undefined ? dataProject.image8: ''}  imageID={"step2"}>
		Testimonials that showcase successful cases with powerful messaging, statistics that translate benefits
		into facts complented (CTA) to the conversion points.  &nbsp;
	</ImageBox>



	</SectionProjectText>

	<ExternalLinks  dataProject={dataProject}></ExternalLinks>
	<div class=" lg:h-[450px] block  overflow-hidden  px-4 lg:px-10  wow fadeInUp"  data-wow-duration="2s">
		<img  class="object-cover w-full" src={dataProject != undefined ? dataProject.image7: ''} alt={dataProject != undefined ? dataProject.name : ''} />
	</div>

	<MoreProjects prevNextProjects={prevNextProjects != undefined ? prevNextProjects : ''}>
	</MoreProjects>

</ProjectLayout>
