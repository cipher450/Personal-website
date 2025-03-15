const logosPath = "/assets/logos/";
const logos = [
  "/assets/logos/VB.png", //0
  "/assets/logos/PY.png", //1
  "/assets/logos/css.png", //2
  "/assets/logos/express.png", //3
  "/assets/logos/html.png", //4
  "/assets/logos/js.png", //5
  "/assets/logos/NET.png", //6
  "/assets/logos/react.png", //7
  "/assets/logos/sass.png", //8
  "/assets/logos/tailwind.png", //9
  "/assets/logos/csharp.png", //10
  "/assets/logos/nextjs.png", //11
];

const desktopProjects = [
  {
    title: "Advanced Checksum Utility",
    description: "Advanced Checksum Utility 3.0 is a fast and easy-to-use file hashing application. It allows you to hash files or strings quickly and easily. It includes features like sending hashes to VirusTotal or saving all generated hashes into an HTML document.",
    compatible: { windows: true, linux: false, macos: false },
    stack: [logos[0], logos[6]], // Visual Basic, .NET
    downloadUrl: "https://github.com/cipher450/ACU/releases/download/acu/Advanced-checksum-utility_1.3.1.exe",
    sourceCodeUrl: "https://github.com/cipher450/ACU",
    backgroundColor: "#182747",
    textColor: "white",
    images: ["/assets/projects/acu-1.png", "/assets/projects/acu-2.png"],
  },
  {
    title: "TryHTML",
    description: "TryHTML is a tool that helps you edit or create HTML pages. You can test your code live while coding. It includes a built-in code library, image-to-Base64 conversion, webpage source code extraction, and an RGB color picker.",
    compatible: { windows: true, linux: false, macos: false },
    stack: [logos[0], logos[6]], // Visual Basic, .NET
    downloadUrl: "https://github.com/cipher450/ACU/releases/download/acu/Advanced-checksum-utility_1.3.1.exe",
    sourceCodeUrl: "https://github.com/cipher450/ACU",
    backgroundColor: "rgb(211, 35, 19)",
    textColor: "white",
    images: ["/assets/projects/TryHTML-1.png", "/assets/projects/TryHTML-2.png", "/assets/projects/TryHTML-3.png"],
  },
  {
    title: "Mega Virus Maker",
    description: "An advanced malware creation software that allows users to design a range of malicious programs, from prank viruses to ransomware. It is intended for educational purposes and cybersecurity research, with a controlled sandbox environment to prevent real-world harm.",
    compatible: { windows: true, linux: false, macos: false },
    stack: [logos[0], logos[6]], // Visual Basic, .NET
    downloadUrl: "https://github.com/cipher450/Mega-Virus-Maker/releases/download/v2.0/Release.zip",
    sourceCodeUrl: "https://github.com/cipher450/Mega-Virus-Maker",
    backgroundColor: "rgb(211, 35, 19)",
    textColor: "white",
    images: ["/assets/projects/mvm-1.png", "/assets/projects/mvm-2.png"],
  },
  {
    title: "Pulsar",
    description: "A versatile remote administration tool designed for legitimate system management and troubleshooting. It includes features like information gathering, file exploration, remote command execution, task management, screenshot capture, and more.",
    compatible: { windows: true, linux: false, macos: false },
    stack: [logos[10], logos[6]], // C#, .NET
    downloadUrl: "https://github.com/cipher450/Pulsar/archive/refs/heads/master.zip",
    sourceCodeUrl: "https://github.com/cipher450/Pulsar",
    backgroundColor: "#353535",
    textColor: "white",
    images: ["/assets/projects/pulsar.png"],
  },
];

const webProjects = [
  {
    title: "Job Application Tracking System",
    description: "A comprehensive solution designed to streamline the job application process. Built with NestJS for the backend, Vue.js for the frontend, and MySQL for the database. Prisma is used as the ORM for efficient data management.",
    compatible: { },
    stack: [logos[11], logos[9]], // Next.js, Tailwind CSS
    backgroundColor: "#aa2020",
    textColor: "white",
    images: ["/assets/projects/jobz-2.png", "/assets/projects/jobz-1.png", "/assets/projects/jobz-3.png"],
  },
  {
    title: "P2P Money Transfer",
    description: "A comprehensive solution designed to streamline money transfers using P2P markets. It provides a seamless and user-friendly experience for individuals and businesses.",
    compatible: {},
    stack: [logos[11], logos[9]], // Next.js, Tailwind CSS
    backgroundColor: "#aa2020",
    textColor: "white",
    images: ["/assets/projects/sendmoney-2.png", "/assets/projects/sendmoney-1.png", "/assets/projects/sendmoney-3.png"],
  },
  {
    title: "Genicraft (Upcoming)",
    description: "Experience the future of content creation with this AI-driven web application. Generate blog articles and other text-based content effortlessly.",
    compatible: { },
    stack: [logos[11], logos[9]], // Next.js, Tailwind CSS
    backgroundColor: "#aa2020",
    textColor: "white",
    images: ["/assets/projects/genicraft.png"],
  },
  {
    title: "Motion Genius",
    description: "A video generator leveraging OpenAI's GPT-3 for text and DALL-E for image generation. Create stunning videos by simply inputting text. (API keys no longer work.)",
    compatible: {},
    stack: [logos[11], logos[9]], // Next.js, Tailwind CSS
    demoUrl: "https://youtubehelper.onrender.com",
    backgroundColor: "#aa2020",
    textColor: "white",
    images: ["/assets/projects/motion_genuis.png"],
  },
  {
    title: "SCP360",
    description: "A project aimed at providing a comprehensive listing of French SCPI investments. Created as part of an interview task for Starty-Media.",
    compatible: { },
    stack: [logos[11], logos[9]], // Next.js, Tailwind CSS
    backgroundColor: "#aa2020",
    textColor: "white",
    images: ["/assets/projects/SCP360.gif"],
  },
  {
    title: "Onion-Web",
    description: "A secure and anonymous search engine for exploring the dark web. Designed to protect your privacy while accessing onion sites.",
    compatible: { },
    stack: [logos[7], logos[9], logos[1]], // React, Tailwind CSS, Python
    sourceCodeUrl: "https://github.com/cipher450/Onion-Web",
    backgroundColor: "#D3FF3E",
    textColor: "black",
    images: ["/assets/projects/onion-1.png"],
  },
  {
    title: "Tagmachem Portfolio",
    description: "A portfolio website for Tagmachem.",
    compatible: { },
    stack: [logos[7], logos[9]], // React, Tailwind CSS
    demoUrl: "https://tagmachem.onrender.com/",
    sourceCodeUrl: "https://github.com/cipher450/TAGMACHEM",
    backgroundColor: "#00337C",
    textColor: "white",
    images: ["/assets/projects/tagmachem.png"],
  },
  {
    title: "Photography Portfolio",
    description: "A portfolio website for a photographer.",
    compatible: { },
    stack: [logos[7], logos[9]], // React, Tailwind CSS
    demoUrl: "https://arezio-photography.onrender.com/",
    sourceCodeUrl: "https://github.com/cipher450/Photography-portfolio",
    backgroundColor: "#182747",
    textColor: "white",
    images: ["/assets/projects/arizio.png"],
  },
  
];

const bots = [
  {
    title: "Private Channel Manager",
    description: "A Telegram bot designed to manage paid channels and streamline administrative tasks. It includes features like member management, payment invoicing, and moderation.",
    compatible: { },
    stack: [logos[11], logos[9]], // Next.js, Tailwind CSS
    backgroundColor: "#aa2020",
    textColor: "white",
    images: ["/assets/projects/Telegrambot.png"],
  },
];

export { desktopProjects, webProjects, bots };