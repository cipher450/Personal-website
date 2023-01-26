let lanImgUrl =
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/";

const backStack = [
  { tech: "C#", level: "75", img: lanImgUrl + "csharp-colored.svg" },
  {tech: "JavaScript",level: "70", img: lanImgUrl + "javascript-colored.svg"},
 
  
  { tech: "Python", level: "50", img: lanImgUrl + "python-colored.svg" },
  {
    tech: "Visuel Basic",
    level: "65",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/VB.NET_Logo.svg/2048px-VB.NET_Logo.svg.png",
  },
  { tech: "PHP", level: "40", img: lanImgUrl + "php-colored.svg" },
];


const back_framworks = [
  { tech: ".NET Core", level: "50", img: lanImgUrl + "dot-net-colored.svg " },
  { tech: ".NET", level: "70", img: lanImgUrl + "dot-net-colored.svg " },
  { tech: "fastapi", level: "50", img: lanImgUrl + "python-colored.svg" },
  { tech: "Express", level: "60", img: lanImgUrl + "express-colored.svg" },
  { tech: "NodeJs", level: "70", img: lanImgUrl + "nodejs-colored.svg" },

 
  { tech: "Laravel", level: "40", img: lanImgUrl + "laravel-colored.svg" },
];
const frontend = [
  { tech: "HTML", level: "70", img: lanImgUrl + "html5-colored.svg" },
  { tech: "CSS 3", level: "70", img: lanImgUrl + "css3-colored.svg" },
  {tech: "JavaScript",level: "70", img: lanImgUrl + "javascript-colored.svg",
  },
];

const front_framworks = [
  { tech: "React JS", level: "70", img: lanImgUrl + "react-colored.svg" },
  { tech: "Vue JS", level: "70", img: lanImgUrl + "css3-colored.svg" },
  { tech: "TailwindCSS", level: "70", img: lanImgUrl + "tailwindcss-colored.svg" },
  {
    tech: "Sass",
    level: "40",
    img: lanImgUrl + "sass-colored.svg",
  },
];

export { backStack, frontend, back_framworks ,front_framworks };
