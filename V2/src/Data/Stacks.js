let lanImgUrl =
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/";

const backStack = [
  {
    tech: "JavaScript",
    level: "85",
    img: lanImgUrl + "javascript-colored.svg",
  },
  { tech: "PHP", level: "60", img: lanImgUrl + "php-colored.svg" },
  { tech: "C#", level: "60", img: lanImgUrl + "csharp-colored.svg" },

  { tech: "Python", level: "50", img: lanImgUrl + "python-colored.svg" },
  {
    tech: "Visuel Basic",
    level: "65",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/VB.NET_Logo.svg/2048px-VB.NET_Logo.svg.png",
  },
];

const back_framworks = [
  { tech: "NodeJs", level: "85", img: lanImgUrl + "nodejs-colored.svg" },
  { tech: "Laravel", level: "60", img: lanImgUrl + "laravel-colored.svg" },
  { tech: ".NET Core", level: "60", img: lanImgUrl + "dot-net-colored.svg " },
  { tech: "fastapi", level: "50", img: lanImgUrl + "python-colored.svg" },
  { tech: "Express", level: "60", img: lanImgUrl + "express-colored.svg" },
  { tech: ".NET", level: "60", img: lanImgUrl + "dot-net-colored.svg " },

];
const frontend = [
  { tech: "HTML", level: "70", img: lanImgUrl + "html5-colored.svg" },

  { tech: "CSS 3", level: "70", img: lanImgUrl + "css3-colored.svg" },
  {
    tech: "JavaScript",
    level: "70",
    img: lanImgUrl + "javascript-colored.svg",
  },
  {
    tech: "TailwindCSS",
    level: "75",
    img: lanImgUrl + "tailwindcss-colored.svg",
  },
];

const front_framworks = [
  { tech: "React JS", level: "75", img: lanImgUrl + "react-colored.svg" },
  {
    tech: "Vue JS",
    level: "70",
    img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/vue-js-icon.png",
  },
  {
    tech: "Astro JS",
    level: "60",
    img: "https://cdn.cosmicjs.com/24428290-b9d3-11ed-907c-292879eb8504-astro-logomark-dark.png",
  },
  {
    tech: "Next JS",
    level: "60",
    img: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png",
  },
  {
    tech: "Sass",
    level: "50",
    img: lanImgUrl + "sass-colored.svg",
  },
];

export { backStack, frontend, back_framworks, front_framworks };
