
let LogosPath ="/assets/logos/"
const logos=[
  '/logos/VB.png', // 0
  '/logos/PY.png', //1
  '/logos/css.png', //2
  '/logos/express.png',//3
  '/logos/html.png', //4
  '/logos/js.png', //5
  '/logos/NET.png', //6
  '/logos/react.png', //7
  '/logos/sass.png', //8
  '/logos/tailwind.png', //9
  '/logos/csharp.png', //10
  '/logos/nextjs.png', //11
]
const DesktopProjects = [
 
 
  {
    title: "Advanced checksum utility",
    desc: "Advanced checksum utility 3.0 is a fast and easy to use file hashing application. With Advanced checksum utility 3.0 you can hash any of your files or srtings it fast and easy, it hase multiple function like send hash to VirusTotal or save all generated hash into an HTML document...",
    // First item  = windows , second = linux ,third = MacOs
    compatible: [true, false, false],
    
    stack: [logos[0],logos[6]],
    dw: "https://github.com/cipher450/ACU/releases/download/acu/Advanced-checksum-utility_1.3.1.exe",
    src: "https://github.com/cipher450/ACU",
    color: "#182747",
    txtColor:'white',
    img1: '/assets/projects/acu-1.png',
    img2: '/assets/projects/acu-2.png',
    img3:'/assets/projects/acu-3.png',
  },
  {
    title: "TryHTML",
    desc: "TryHTML is tool that can help you to Edit or Creat a HTML page in this tool You can test your code while coding in LIVE and if your a beginner it not a problem TryHTML hase built in code library you can also Convert images to Base64 or the opposite and you can get source code of a webpage and you can also get eny color in RGB TryHTML hase a color Picker.",
    // First item  = windows , second = linux ,third = MacOs
    compatible: [true, false, false],
    stack:[logos[0],logos[6]],
    dw: "https://github.com/cipher450/ACU/releases/download/acu/Advanced-checksum-utility_1.3.1.exe",
    src: "https://github.com/cipher450/ACU",
    color: "rgb(211, 35, 19);",
    img1: '/assets/projects/TryHTML-1.png',
    img2: '/assets/projects/TryHTML-2.png',
    img3:'/assets/projects/TryHTML-3.png',
  },
  {
    title: "Mega virus Maker",
    desc: "Powerfull malwaer making software ranges from simple 'prank' virus to fullOn ransomware",
    // First item  = windows , second = linux ,third = MacOs
    compatible: [true, false, false],
    stack: [logos[0],logos[6]],
    dw: "https://github.com/cipher450/Mega-Virus-Maker/releases/download/v2.0/Release.zip",
    src: "https://github.com/cipher450/Mega-Virus-Maker",
    color: "rgb(211, 35, 19);",
    img1:'/assets/projects/mvm-1.png',
    img2:'/assets/projects/mvm-2.png',
    img3:'/assets/projects/mvm-1.png',
  },
  {
    title: "Pulsar",
    desc: "Windows Remote Administration Tool",
    // First item  = windows , second = linux ,third = MacOs
    compatible: [true, false, false],
    stack: [logos[10],logos[6]],
    dw: "https://github.com/cipher450/Pulsar/archive/refs/heads/master.zip",
    src: "https://github.com/cipher450/Pulsar",
    color: "rgb(211, 35, 19);",
    img1: '/assets/projects/pulsar-1.gif',
    img2: '/assets/projects/pulsar-2.gif',
    img3: '/assets/projects/pulsar-3.gif',
  },
];
const WebProjects =[
  {
    title: "Motion Genuis",
    desc: "a 'Video' generatore that makes use of OpenAI API for GPT-3 model for text and Dall-E for image generation  " ,
    // First item  = windows , second = linux ,third = MacOs
    compatible: [true, true, true],
    stack:  [  logos[11],logos[9]],
    dw: "https://github.com/cipher450/Onion-Web",
     
    color: "#aa2020",
    txtColor:'white',
    img1: '/assets/projects/youtube.gif',
    img2: '/assets/projects/youtube2.gif',
 
  },
  {
    title: "Photography portfolio ",
    desc: "a portfolio website ",
    // First item  = windows , second = linux ,third = MacOs
    compatible: [true, true, true],
    stack: [logos[7],logos[9] ],
    dw: "https://arezio-photography.onrender.com/",
    src: "https://github.com/cipher450/Photography-portfolio",
    color: "#182747",
    txtColor:'white',
    img1: '/assets/projects/photography-1.gif',
    img2: '/assets/projects/Photography-2.gif',
    img3: '/assets/projects/photography-1.gif',
  },
  {
    title: "Onion-Web",
    desc: "Onion search engine",
    // First item  = windows , second = linux ,third = MacOs
    compatible: [true, true, true],
    stack:  [  logos[7],logos[9],logos[1]],
    dw: "https://github.com/cipher450/Onion-Web",
    src: "https://github.com/cipher450/Onion-Web",
    color: "#D3FF3E",
    txtColor:'black',
    img1: '/assets/projects/onion-1.png',
    img2: '/assets/projects/onion-2.png',
    img3: '/assets/projects/onion-1.png',
  },
 
]
export { DesktopProjects , WebProjects };
