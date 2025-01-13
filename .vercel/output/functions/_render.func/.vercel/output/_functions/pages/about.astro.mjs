/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../chunks/astro/server_BC82bbhR.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_W3goHJqW.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$TiltedTrianlge } from '../chunks/TiltedTrianlge_m5HGe3yT.mjs';
import { frontmatter } from '../chunks/about_content_BWWrHExa.mjs';
import { FaUserMd, FaAward, FaBook, FaHeart } from 'react-icons/fa';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://www.drwaseemandrabi.com/");
const $$ImageGallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ImageGallery;
  const images = await Astro2.glob(/* #__PURE__ */ Object.assign({"/public/image_gallery/WhatsApp Image 2025-01-10 at 20.12.41_3b95e376_2_11zon.webp": () => import('../chunks/WhatsApp Image 2025-01-10 at 20.12.41_3b95e376_2_11zon_W-30zYYY.mjs'),"/public/image_gallery/WhatsApp Image 2025-01-10 at 20.13.01_690e8e86_1_11zon.webp": () => import('../chunks/WhatsApp Image 2025-01-10 at 20.13.01_690e8e86_1_11zon_KaJBpQmw.mjs'),"/public/image_gallery/WhatsApp Image 2025-01-13 at 13.19.47_7c639511.webp": () => import('../chunks/WhatsApp Image 2025-01-13 at 13.19.47_7c639511_DWo74vdM.mjs'),"/public/image_gallery/WhatsApp Image 2025-01-13 at 13.19.49_7eb62250.webp": () => import('../chunks/WhatsApp Image 2025-01-13 at 13.19.49_7eb62250_HGR2so06.mjs'),"/public/image_gallery/WhatsApp Image 2025-01-13 at 13.19.50_1d3a5e29.webp": () => import('../chunks/WhatsApp Image 2025-01-13 at 13.19.50_1d3a5e29_kks0Aowd.mjs'),"/public/image_gallery/WhatsApp Image 2025-01-13 at 13.19.53_0589ae6b.webp": () => import('../chunks/WhatsApp Image 2025-01-13 at 13.19.53_0589ae6b_BJ5Cn3Vt.mjs'),"/public/image_gallery/WhatsApp Image 2025-01-13 at 13.19.53_e43fac04.webp": () => import('../chunks/WhatsApp Image 2025-01-13 at 13.19.53_e43fac04_Cj9UA2kI.mjs'),"/public/image_gallery/a5550485-c0c3-40ca-aa54-007bdd521c2e (1).webp": () => import('../chunks/a5550485-c0c3-40ca-aa54-007bdd521c2e (1)_DeVoH8Hl.mjs'),"/public/image_gallery/award.webp": () => import('../chunks/award_BpOVeWqH.mjs')}), () => "/public/image_gallery/*.webp");
  return renderTemplate`${maybeRenderHead()}<section class="px-5 sm:px-10 flex justify-center mt-10"> <div class="carousel carousel-center bg-primary_light w-4/5 sm:w-3/4 md:w-4/5 rounded-box p-2 sm:p-4"> ${images.map((image) => renderTemplate`<div class="carousel-item h-96 w-fit flex-shrink-0 px-1 py-3"> <img${addAttribute(image.default.src, "src")} class="object-cover rounded-lg w-full h-full" alt="Gallery image"> </div>`)} </div> </section>`;
}, "C:/Users/arsla/OneDrive/Desktop/code/waseem-andrabi/src/components/ImageGallery.astro", void 0);

const $$WorkExperience = createComponent(($$result, $$props, $$slots) => {
  const experiences = frontmatter.experiences;
  return renderTemplate`${maybeRenderHead()}<section class="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 min-h-screen flex flex-col justify-center overflow-hidden w-full" data-astro-cid-zfxog3ti> <div class="max-w-6xl mx-auto w-full flex flex-col items-center" data-astro-cid-zfxog3ti> <h1 class="relative pb-3 w-fit text-4xl sm:text-5xl font-bold mb-10 sm:mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 font-pacifico" data-astro-cid-zfxog3ti> <span class="z-10" data-astro-cid-zfxog3ti>Work Experience</span> <span class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-teal-400 to-blue-500" data-astro-cid-zfxog3ti></span> </h1> <div class="flex flex-col lg:flex-row items-center lg:items-center gap-12 justify-between" data-astro-cid-zfxog3ti> <div class="w-full sm:w-3/4 md:w-2/3 lg:w-5/12 relative mt-10 lg:mt-0 flex justify-center" data-astro-cid-zfxog3ti> <!-- <div class="absolute inset-0 bg-gradient-to-tr from-teal-400 to-blue-500 rounded-2xl -rotate-6 scale-105 opacity-10 blur-xl animate-pulse"></div> --> <img src="/doctorwithaward.webp" alt="Dr. Waseem Andrabi with Award" class="w-2/3 md:w-full rounded-xl shadow-2xl relative z-10 animate-float h-full" data-astro-cid-zfxog3ti> </div> <div class="lg:w-1/2 space-y-6 relative w-2/3 md:w-full" data-astro-cid-zfxog3ti> <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-teal-400 to-blue-500 rounded-full hidden sm:block " data-astro-cid-zfxog3ti></div> ${experiences.map((job, index) => renderTemplate`<div class="group relative sm:pl-8 transition-all duration-300 ease-in-out hover:sm:pl-10" data-astro-cid-zfxog3ti> <div class="absolute left-0 top-2 w-4 h-4 bg-white rounded-full shadow-lg group-hover:scale-125 transition-all duration-300 ease-in-out hidden sm:block" data-astro-cid-zfxog3ti></div> <div class="bg-white bg-opacity-5 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out group-hover:bg-opacity-10 group-hover:-translate-y-1" data-astro-cid-zfxog3ti> <h2 class="text-teal-400 text-lg sm:text-xl font-semibold mb-2 group-hover:text-teal-300 transition-colors duration-300" data-astro-cid-zfxog3ti> ${job.years} </h2> <p class="text-gray-300 text-sm sm:text-base group-hover:text-white transition-colors duration-300" data-astro-cid-zfxog3ti> ${job.position} </p> </div> </div>`)} </div> </div> </div> </section>  `;
}, "C:/Users/arsla/OneDrive/Desktop/code/waseem-andrabi/src/components/WorkExperience.astro", void 0);

const $$Astro$1 = createAstro("https://www.drwaseemandrabi.com/");
const $$AboutSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AboutSection;
  const { aboutData } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-gradient-to-br from-cream via-cyan-100 to-blue-100 py-16 px-4 sm:px-6 md:px-8 lg:px-16"> <div class="max-w-6xl mx-auto w-full flex flex-col items-center"> <div class="flex flex-col md:flex-row items-center md:items-center gap-12 lg:gap-20"> <div class="w-5/6 lg:w-1/2 relative"> <img src="/AboutUsMain.webp" alt="Dr. Waseem Andrabi" class="rounded-2xl shadow-2xl relative z-10"> </div> <div class="w-full lg:w-1/2 font-averia_sans space-y-3"> <h1 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-teal-800"> <span class="inline-block underline">Dr. Waseem Andrabi</span> </h1> <h2 class="text-lg lg:text-xl xl:text-2xl font-semibold text-teal-600"> ${aboutData.about[1].sub_title} </h2> <!-- Expertise Section Directly Under Subtitle --> <div class="space-y-4"> <h3 class="text-2xl lg:text-3xl xl:text-4xl font-semibold text-teal-700 underline">Expertise</h3> <ul class="space-y-3 lg:text-lg xl:text-xl"> <li class="flex items-center text-gray-700"> ${renderComponent($$result, "FaUserMd", FaUserMd, { "className": "text-teal-600 mr-2 flex-shrink-0" })} <span>10+ years of experience in reproductive science</span> </li> <li class="flex items-center text-gray-700"> ${renderComponent($$result, "FaAward", FaAward, { "className": "text-teal-600 mr-2 flex-shrink-0" })} <span>Ph.D. in Reproductive Sciences</span> </li> <li class="flex items-center text-gray-700"> ${renderComponent($$result, "FaBook", FaBook, { "className": "text-teal-600 mr-2 flex-shrink-0" })} <span>Published researcher and textbook author</span> </li> <li class="flex items-center text-gray-700"> ${renderComponent($$result, "FaHeart", FaHeart, { "className": "text-teal-600 mr-2 flex-shrink-0" })} <span>Cluster Head of Embryology at NOVA IVF Fertility</span> </li> </ul> </div> <!-- Main Text Content --> </div> </div> <div class="space-y-4 pt-10 font-averia_sans"> ${aboutData.about.slice(2).map((paragraph) => renderTemplate`<p class="text-lg text-gray-700"> ${paragraph.p1 || paragraph.p2} </p>`)} </div> <a href="/contact" class="inline-block bg-gradient-to-r my-10 w-fit from-teal-500 to-blue-500 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out hover:from-teal-600 hover:to-blue-600">
Book a Consultation
</a> </div> </section>`;
}, "C:/Users/arsla/OneDrive/Desktop/code/waseem-andrabi/src/components/AboutSection.astro", void 0);

const $$Astro = createAstro("https://www.drwaseemandrabi.com/");
const $$AchievementsCarousel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AchievementsCarousel;
  const carouselItems = await Astro2.glob(/* #__PURE__ */ Object.assign({"/public/certificates/ALLcertificatesembryology_page-0001_1_30.webp": () => import('../chunks/ALLcertificatesembryology_page-0001_1_30_BuXzj0-V.mjs'),"/public/certificates/ALLcertificatesembryology_page-0002_1_30.webp": () => import('../chunks/ALLcertificatesembryology_page-0002_1_30_CY6NhUZ9.mjs'),"/public/certificates/ALLcertificatesembryology_page-0003_1_30.webp": () => import('../chunks/ALLcertificatesembryology_page-0003_1_30_CoxUvl4I.mjs'),"/public/certificates/ALLcertificatesembryology_page-0004_1_30.webp": () => import('../chunks/ALLcertificatesembryology_page-0004_1_30_S7zK2BR1.mjs'),"/public/certificates/ALLcertificatesembryology_page-0005_1_30.webp": () => import('../chunks/ALLcertificatesembryology_page-0005_1_30_CYhXgN6M.mjs'),"/public/certificates/ALLcertificatesembryology_page-0006_30.webp": () => import('../chunks/ALLcertificatesembryology_page-0006_30_9wZ6wp5b.mjs'),"/public/certificates/ALLcertificatesembryology_page-0007_30.webp": () => import('../chunks/ALLcertificatesembryology_page-0007_30_5bfT-fdY.mjs'),"/public/certificates/ALLcertificatesembryology_page-0008_30.webp": () => import('../chunks/ALLcertificatesembryology_page-0008_30_Bc0PW1Vx.mjs'),"/public/certificates/ALLcertificatesembryology_page-0009_30.webp": () => import('../chunks/ALLcertificatesembryology_page-0009_30_DW6lGbRw.mjs'),"/public/certificates/ALLcertificatesembryology_page-0010_30.webp": () => import('../chunks/ALLcertificatesembryology_page-0010_30_BSGZC3rg.mjs'),"/public/certificates/ALLcertificatesembryology_page-0011_30.webp": () => import('../chunks/ALLcertificatesembryology_page-0011_30_BpGxOntG.mjs'),"/public/certificates/ALLcertificatesembryology_page-0012_30.webp": () => import('../chunks/ALLcertificatesembryology_page-0012_30_ClhxbNSa.mjs'),"/public/certificates/ALLcertificatesembryology_page-0013_30.webp": () => import('../chunks/ALLcertificatesembryology_page-0013_30_B3d_g18Z.mjs'),"/public/certificates/ALLcertificatesembryology_page-0014_30.webp": () => import('../chunks/ALLcertificatesembryology_page-0014_30_C2F-F1lu.mjs'),"/public/certificates/ALLcertificatesembryology_page-0015_30.webp": () => import('../chunks/ALLcertificatesembryology_page-0015_30_Bg_bIp4G.mjs'),"/public/certificates/ALLcertificatesembryology_page-0017_30.webp": () => import('../chunks/ALLcertificatesembryology_page-0017_30_DQ-yFDOQ.mjs'),"/public/certificates/ALLcertificatesembryology_page-0018_30.webp": () => import('../chunks/ALLcertificatesembryology_page-0018_30_DeGJ2sws.mjs'),"/public/certificates/ALLcertificatesembryology_page-0019_30.webp": () => import('../chunks/ALLcertificatesembryology_page-0019_30_DYeG8d4A.mjs'),"/public/certificates/ALLcertificatesembryology_page-0020_30.webp": () => import('../chunks/ALLcertificatesembryology_page-0020_30_C7BU7HsK.mjs'),"/public/certificates/ALLcertificatesembryology_page-0021_30.webp": () => import('../chunks/ALLcertificatesembryology_page-0021_30_DPr5dZ66.mjs'),"/public/certificates/ALLcertificatesembryology_page-0022_1_30.webp": () => import('../chunks/ALLcertificatesembryology_page-0022_1_30_DPl5vN66.mjs'),"/public/certificates/ALLcertificatesembryology_page-0023_1_30.webp": () => import('../chunks/ALLcertificatesembryology_page-0023_1_30_DlpHS5GY.mjs'),"/public/certificates/ALLcertificatesembryology_page-0024_1_30.webp": () => import('../chunks/ALLcertificatesembryology_page-0024_1_30_k4D0nE4S.mjs'),"/public/certificates/Dr. Waseem Andrabi-01 (1)_6_11zon.webp": () => import('../chunks/Dr. Waseem Andrabi-01 (1)_6_11zon_ECDaiGgQ.mjs'),"/public/certificates/achievement4.webp": () => import('../chunks/achievement4_CtMTJPuH.mjs')}), () => "/public/certificates/*.webp");
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col justify-center items-center md:py-10 space-y-5 py-5"> <h2 class="text-2xl sm:text-4xl md:5xl underline font-semibold text-teal-300 text-center sm:text-left font-averia_sans pt-2">
Certificates
</h2> <div class="carousel carousel-center rounded-box" id="image-carousel"> ${carouselItems.map((image, index) => renderTemplate`<div class="carousel-item w-fit mx-1 bg-white rounded-xl m-2"> <img${addAttribute(image.default.src, "src")} class="rounded-xl h-52 sm:h-72 md:h-96 object-cover"> </div>`)} </div> <progress class="progress w-1/2 my-5" id="carousel-progress" value="0" max="100"></progress> </section> `;
}, "C:/Users/arsla/OneDrive/Desktop/code/waseem-andrabi/src/components/AchievementsCarousel.astro", void 0);

const $$Achievements = createComponent(($$result, $$props, $$slots) => {
  const achievements = [
    {
      title: "Most Trusted Embryologist in Delhi",
      image: "/most_trusted.webp"
    },
    {
      title: "Lifetime Member of AAHP",
      image: "/lifetime_membership.webp"
    },
    {
      title: "Lead Trainer at Workshop",
      image: "/achievement3.webp"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center w-full"> <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-pacifico underline mb-10 text-center">
Achievements
</h1> <div class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center px-24"> ${achievements.map((achievement, index) => renderTemplate`<div class="flex flex-col items-center space-y-4 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"> <h2 class="text-xl sm:text-2xl font-semibold text-teal-300 text-center font-averia_sans">
&bull;
<span class="text-teal-300 underline mx-1"> ${achievement.title} </span> </h2> <div class="w-full min-w-sm rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 sm:hover:scale-110"> <img${addAttribute(achievement.image, "src")}${addAttribute(`${achievement.title || "Achievement"} Certificate`, "alt")} class="w-full h-fit object-cover rounded-lg"> </div> </div>`)} </div> </section> ${renderComponent($$result, "AchievementsCarousel", $$AchievementsCarousel, {})}`;
}, "C:/Users/arsla/OneDrive/Desktop/code/waseem-andrabi/src/components/Achievements.astro", void 0);

const $$Research = createComponent(($$result, $$props, $$slots) => {
  const researchPapers = [
    {
      title: "The Infertility Manual",
      description: "The new edition of this infertility manual has been fully revised to provide clinicians with the latest advances in the diagnosis and management of infertility. Divided into seven sections, the book provides step by step guidance on each stage of the process, from initial examination and identifying the causes of infertility in both females and males, to ovarian stimulation and assisted reproduction techniques.",
      src: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=7U3xvCcAAAAJ&citation_for_view=7U3xvCcAAAAJ:u-x6o8ySG0sC"
    },
    {
      title: "Impact of weight loss on sperm DNA integrity in obese men",
      description: "The objective of the study was to determine whether weight loss in obese men improves their fertility with respect to DNA fragmentation.",
      src: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=7U3xvCcAAAAJ&citation_for_view=7U3xvCcAAAAJ:2osOgNQ5qMEC"
    },
    {
      title: "AZF deletions in Indian populations: original study and meta-analyses.",
      description: "The objective of this study was to identify the frequency of Y chromosome microdeletions in Indian populations and to quantitatively estimate the significance of association between these deletions and male infertility.",
      src: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=7U3xvCcAAAAJ&citation_for_view=7U3xvCcAAAAJ:zYLM7Y9cAGgC"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-primary py-12 sm:py-16 px-4 sm:px-6 lg:px-8 w-full"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-10 sm:mb-12 font-pacifico underline">
More Information
</h2> <h3 class="text-xl sm:text-3xl lg:text-4xl font-pacifico text-[#FFD700] mb-6 sm:mb-8 flex items-center">
&bull; Read My Research Papers
</h3> <div class="space-y-4 sm:space-y-6"> ${researchPapers.map((paper, index) => renderTemplate`<div class="bg-primary_light p-4 sm:p-6 rounded-lg transform transition-all hover:scale-[1.03]"> <a${addAttribute(paper.src, "href")} target="_blank"> <h4 class="text-lg sm:text-lg text-white font-semibold mb-2">
&bull; ${paper.title} </h4> <p class="text-[#00F0FF] text-md underline truncate sm:overflow-visible sm:whitespace-normal"> ${paper.description} </p> </a> </div>`)} </div> <div class="mt-6 sm:mt-8 text-center"> <a href="https://scholar.google.com/citations?user=7U3xvCcAAAAJ&hl=en" class="inline-block bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:from-teal-600 hover:to-blue-600">
View More Papers
</a> </div> </div> </section>`;
}, "C:/Users/arsla/OneDrive/Desktop/code/waseem-andrabi/src/components/Research.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="bg-primary_light text-white overflow-hidden flex flex-col items-center min-w-full"> <!-- Hero Section --> <div class="relative lg:h-[60vh]"> <img src="/aboutus.webp" class="w-full h-full object-cover" alt="Services Background"> <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center md:items-end md:justify-start p-10"> <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-pacifico bg-primary rounded-sm underline px-5 py-2 text-white text-center">
About Us
</h1> </div> <div class="absolute top-0 left-0 w-full h-full z-10"> ${renderComponent($$result2, "TiltedTrianlge", $$TiltedTrianlge, { "height": "60vh" })} </div> </div> <!-- About Dr. Waseem --> ${renderComponent($$result2, "AboutSection", $$AboutSection, { "aboutData": frontmatter })} <!-- Image Gallery --> <section class="py-16 bg-primary"> <h1 class="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-center text-white font-pacifico underline">
Image Gallery
</h1> ${renderComponent($$result2, "ImageGallery", $$ImageGallery, {})} </section> <!-- Work Experience --> ${renderComponent($$result2, "WorkExperience", $$WorkExperience, {})} <!-- Achievements --> ${renderComponent($$result2, "Achievements", $$Achievements, {})} <!-- Research Papers --> ${renderComponent($$result2, "Research", $$Research, {})} </section> ` })}`;
}, "C:/Users/arsla/OneDrive/Desktop/code/waseem-andrabi/src/pages/about.astro", void 0);

const $$file = "C:/Users/arsla/OneDrive/Desktop/code/waseem-andrabi/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
