import gsap from "gsap";

export let imageItem;
export let topicItem;


export function projectItems(parentItems, imageWrapper, previewImage,itemsSlider) {


  const scrollPositions = {
    Item01: 0, Item02: 400, Item03: 800, Item04: 1200, Item05: 1600,
    Item06: 2000, Item07: 2400, Item08: 2800, Item09: 3200, Item10: 3600,
};


  parentItems.forEach((itemParent)  => {
    const menuItems = itemParent.querySelectorAll(".project-item");
    const onMouseEnter = () => {
      gsap.set(imageWrapper, {  duration: 0.5, ease: "power4.out" });
      gsap.to(imageWrapper, { opacity: 1, scale: 1 });
    };
    const onMouseLeave = () => {
      gsap.to(imageWrapper, { opacity: 0,  duration: 0.5, ease: "power4.out" });
    };
    itemParent.addEventListener("mouseenter", onMouseEnter);
    itemParent.addEventListener("mouseleave", onMouseLeave);


 ;

    menuItems.forEach((item) => {
        const onMouseEnter = () => {
          const itemBg = item.querySelector(".project-link-bg");
          gsap.to(item, { zIndex: 2 });
          gsap.to(itemBg, { height: "100%" });
          gsap.set(itemBg, { height: "100%" });

          topicItem = item.querySelector(".project-topic").textContent;
          /*image update */
          const projectId = item.id;
          gsap.to(previewImage,0.4, { scrollTop: scrollPositions[projectId],  ease: "power2.inOut" });
        };
        const onMouseLeave = () => {
          const itemBg = item.querySelector(".project-link-bg");
          gsap.to(itemBg, { height: "0%", duration: 0.5, ease: "power4.out" });
          gsap.to(item, { zIndex: 0 });
        };
        item.addEventListener("mouseenter", onMouseEnter);
        item.addEventListener("mouseleave", onMouseLeave);
      });
    });
}