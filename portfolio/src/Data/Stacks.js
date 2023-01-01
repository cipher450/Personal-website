let lanImgUrl =
  "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/";

const backStack = [
  { tech: "C#", level: "60", img: lanImgUrl + "csharp-colored.svg" },

  { tech: "NodeJs", level: "40", img: lanImgUrl + "nodejs-colored.svg" },
  { tech: "Python", level: "50", img: lanImgUrl + "python-colored.svg" },
  {
    tech: "Visuel Basic",
    level: "65",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/VB.NET_Logo.svg/2048px-VB.NET_Logo.svg.png",
  },
  { tech: "PHP", level: "20", img: lanImgUrl + "php-colored.svg" },
];
const frontend = [
  { tech: "HTML", level: "70", img: lanImgUrl + "html5-colored.svg" },
  { tech: "CSS 3", level: "70", img: lanImgUrl + "css3-colored.svg" },
  {
    tech: "JavaScript",
    level: "40",
    img: lanImgUrl + "javascript-colored.svg",
  },
];
const back_framworks = [
  { tech: "fastapi", level: "50", img: lanImgUrl + "python-colored.svg" },
  { tech: "Express", level: "40", img: lanImgUrl + "express-colored.svg" },

  { tech: ".NET Core", level: "40", img: lanImgUrl + "dot-net-colored.svg " },
  { tech: "Laravel", level: "40", img: lanImgUrl + "laravel-colored.svg" },
];
export { backStack, frontend, back_framworks };
