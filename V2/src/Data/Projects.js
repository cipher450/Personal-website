let LogosPath = "/assets/logos/";
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
const DesktopProjects = [
  {
    title: "Advanced checksum utility",
    desc: "Advanced checksum utility 3.0 is a fast and easy to use file hashing application. With Advanced checksum utility 3.0 you can hash any of your files or srtings it fast and easy, it hase multiple function like send hash to VirusTotal or save all generated hash into an HTML document...",
    // First item  = windows , second = linux ,third = MacOs
    compatible: [true, false, false],

    stack: [logos[0], logos[6]],
    dw: "https://github.com/cipher450/ACU/releases/download/acu/Advanced-checksum-utility_1.3.1.exe",
    src: "https://github.com/cipher450/ACU",
    color: "#182747",
    txtColor: "white",
    img1: ["/assets/projects/acu-1.png","/assets/projects/acu-2.png"],
  },
  {
    title: "TryHTML",
    desc: "TryHTML is tool that can help you to Edit or Creat a HTML page in this tool You can test your code while coding in LIVE and if your a beginner it not a problem TryHTML hase built in code library you can also Convert images to Base64 or the opposite and you can get source code of a webpage and you can also get eny color in RGB TryHTML hase a color Picker.",

    // First item  = windows , second = linux ,third = MacOs
    compatible: [true, false, false],
    stack: [logos[0], logos[6]],
    dw: "https://github.com/cipher450/ACU/releases/download/acu/Advanced-checksum-utility_1.3.1.exe",
    src: "https://github.com/cipher450/ACU",
    color: "rgb(211, 35, 19);",
    img1: ["/assets/projects/TryHTML-1.png", "/assets/projects/TryHTML-2.png", "/assets/projects/TryHTML-3.png"],
  },
  {
    title: "Mega virus Maker",
    desc: `an advanced malware creation software that empowers users to design a diverse range of malicious programs, from lighthearted "prank" viruses to formidable full-on ransomware. This comprehensive tool caters to researchers, cybersecurity enthusiasts, and educational purposes, offering a controlled sandbox environment to prevent real-world harm. Users can explore various attack vectors, payloads, and evasion techniques, fostering a deeper understanding of cybersecurity threats. Responsible and ethical use is crucial; Mega Virus Maker emphasizes the importance of respecting legal boundaries and prioritizing cybersecurity defense over malicious intent`,

    compatible: [true, false, false],
    stack: [logos[0], logos[6]],
    dw: "https://github.com/cipher450/Mega-Virus-Maker/releases/download/v2.0/Release.zip",
    src: "https://github.com/cipher450/Mega-Virus-Maker",
    color: "rgb(211, 35, 19);",
    img1: ["/assets/projects/mvm-1.png", "/assets/projects/mvm-2.png", "/assets/projects/mvm-1.png"],
  },
  {
    title: "Pulsar",
    desc: `A versatile remote administration tool designed for legitimate system management and troubleshooting purposes. This feature-rich tool includes information gathering capabilities for computer, user, and network details, as well as a file explorer, remote command line, and Powershell access. It also offers a task manager, screenshot capture (not live streaming), microphone recording, keylogger, clipboard sniffer, password stealer, cryptocurrency mining (with limited success), and the ability to download and execute files. It is essential to emphasize that the ethical and responsible use of Windows Remote Admin Pro is crucial to protect against malicious activities and uphold cybersecurity standards`,
    // First item  = windows , second = linux ,third = MacOs
    compatible: [true, false, false],
    stack: [logos[10], logos[6]],
    dw: "https://github.com/cipher450/Pulsar/archive/refs/heads/master.zip",
    src: "https://github.com/cipher450/Pulsar",
    color: "#353535",
    img1: ["/assets/projects/pulsar.png"],
  },
];
const WebProjects = [
  {
    title: "Job Application Tracking System",
    desc: `A comprehensive solution designed to streamline the job application process for users. Built with a robust tech stack, this application leverages NestJS for a scalable and maintainable backend, Vue.js for a dynamic and responsive frontend, and MySQL as the relational database to store application data. Prisma is utilized as the ORM to simplify database interactions and ensure efficient data management. `,
    // First item  = windows , second = linux ,third = MacOs
    compatible: [true, true, true],
    stack: [logos[11], logos[9]],

    color: "#aa2020",
    txtColor: "white",
    img1: ["/assets/projects/jobz-2.png", "/assets/projects/jobz-1.png", "/assets/projects/jobz-3.png"],
  },
  {
    title: "P2P Money Transfer. ",
    desc: `A comprehensive solution designed to streamline the transfer of money using P2P markets, with its intuitive design, ensures a seamless and user-friendly experience for individuals and businesses alike. The platform empowers users to send`,
    // First item  = windows , second = linux ,third = MacOs
    compatible: [true, true, true],
    stack: [logos[11], logos[9]],

    color: "#aa2020",
    txtColor: "white",
    img1: ["/assets/projects/sendmoney-2.png", "/assets/projects/sendmoney-1.png", "/assets/projects/sendmoney-3.png"],
  },
  {
    title: "Genicraft ( upcomping )",
    desc: ` Experience the future of content creation with this powerful web application. Utilize AI-driven automation to generate various text-related content, including blog articles and more. Eff ortlessly create compelling and original pieces tailored to your specific requirements. Say goodbye to writer's block as you explore a new era of efficient content creation. Enhance productivity and streamline your writing process with ContentGen WebApp. `,
    // First item  = windows , second = linux ,third = MacOs
    compatible: [true, true, true],
    stack: [logos[11], logos[9]],

    color: "#aa2020",
    txtColor: "white",
    img1: ["/assets/projects/genicraft.png"],
  },
  {
    title: "Motion Genuis ",
    desc: `video generator leveraging the powerful capabilities of OpenAI's GPT-3 model for text and Dall-E for image generation. This advanced AI-driven tool allows users to effortlessly create stunning videos by simply inputting text. GPT-3 crafts engaging scripts, while Dall-E generates corresponding lifelike visuals, synchronizing seamlessly with the narrative. Whether for storytelling, educational content, or marketing, revolutionaizing the video creation process, enabling users to bring their ideas to life with unparalleled ease and realism
    (Api key's don't work anymore )`,
    // First item  = windows , second = linux ,third = MacOs
    compatible: [true, true, true],
    stack: [logos[11], logos[9]],
    dw: "https://youtubehelper.onrender.com",

    color: "#aa2020",
    txtColor: "white",
    img1: ["/assets/projects/motion_genuis.png"],
  },
  {
    title: "SCP360 ",
    desc: `SCPI360 is a project aimed at providing a comprehensive listing of French SCPI (Société Civile de Placement Immobilier) investments. It serves as a valuable resource for investors interested in exploring various SCPI options available in the French real estate market.
    This project was made as an interview task during my hiring process at starty-media.`,
    compatible: [true, true, true],
    stack: [logos[11], logos[9]],

    color: "#aa2020",
    txtColor: "white",
    img1: ["/assets/projects/SCP360.gif"],
  },
  {
    title: "Tagmachem portfolio ",
    desc: "a website for tagmachem ",
    // First item  = windows , second = linux ,third = MacOs
    compatible: [true, true, true],
    stack: [logos[7], logos[9]],
    dw: "https://tagmachem.onrender.com/",
    src: "https://github.com/cipher450/TAGMACHEM",
    color: "#00337C",
    txtColor: 'white',
    img1: ['/assets/projects/tagmachem.png', '/assets/projects/tagmachem.png'],
  },
  {
    title: "Photography portfolio ",
    desc: "a portfolio website ",
    // First item  = windows , second = linux ,third = MacOs
    compatible: [true, true, true],
    stack: [logos[7], logos[9]],
    dw: "https://arezio-photography.onrender.com/",
    src: "https://github.com/cipher450/Photography-portfolio",
    color: "#182747",
    txtColor: "white",
    img1: ["/assets/projects/arizio.png"],
  },
  {
    title: "Onion-Web",
    desc: "Onion Search Engine: Delve into the hidden depths of the dark web with our secure and anonymous onion search engine. Designed to protect your privacy, this specialized tool allows you to explore the vast network of onion sites, where traditional search engines can't reach. Uncover a plethora of content, ranging from valuable resources to communities and marketplaces. With robust encryption and anonymity features, Onion Search Engine provides a safe gateway for those seeking a discreet and uncensored browsing experience. Embrace the veil of anonymity and embark on an intriguing journey through the depths of the dark web",
    // First item  = windows , second = linux ,third = MacOs
    compatible: [true, true, true],
    stack: [logos[7], logos[9], logos[1]],

    src: "https://github.com/cipher450/Onion-Web",
    color: "#D3FF3E",
    txtColor: "black",
    img1: ["/assets/projects/onion-1.png"],
  },
];

const Bots = [
  {
    title: "Private Channel Manager",
    desc: `This versatile bot is purpose-built to manage paid Telegram channels and streamline administrative tasks. Simplify user interactions by effortlessly adding, removing, and moderating members within your private community. The bot's seamless payment invoicing feature allows you to create and manage payment requests with ease. Elevate your Telegram private channel experience with efficient management and user-friendly controls, making it an essential tool for handling paid memberships and enhancing user engagement.`,
    // First item  = windows , second = linux ,third = MacOs
    compatible: [true, true, true],
    stack: [logos[11], logos[9]],
    color: "#aa2020",
    txtColor: "white",
    img1: ["/assets/projects/Telegrambot.png"],
  },
];
export { DesktopProjects, WebProjects, Bots };
