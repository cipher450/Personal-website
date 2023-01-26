
let LogosPath ="../res/logos/"
const logos=[
  require('../res/logos/VB.png'), // 0
  require('../res/logos/PY.png'), //1
  require('../res/logos/css.png'), //2
  require('../res/logos/express.png'),//3
  require('../res/logos/html.png'), //4
  require('../res/logos/js.png'), //5
  require('../res/logos/NET.png'), //6
  require('../res/logos/react.png'), //7
  require('../res/logos/sass.png'), //8
  require('../res/logos/tailwind.png'), //9
  require('../res/logos/csharp.png'), //10
]
const DesktopProjects = [
 
 
  {
    titel: "Advanced checksum utility",
    desc: "Advanced checksum utility 3.0 is a fast and easy to use file hashing application. With Advanced checksum utility 3.0 you can hash any of your files or srtings it fast and easy, it hase multiple function like send hash to VirusTotal or save all generated hash into an HTML document...",
    // First item  = windows , second = linux ,third = MacOs
    compatible: [true, false, false],
    stack: [logos[0],logos[6]],
    dw: "https://github.com/cipher450/ACU/releases/download/acu/Advanced-checksum-utility_1.3.1.exe",
    src: "https://github.com/cipher450/ACU",
    color: "rgb(211, 35, 19);",
    img1: require('../res/projects/acu-1.png'),
    img2: require('../res/projects/acu-2.png'),
    img3:require('../res/projects/acu-3.png'),
  },
  {
    titel: "TryHTML",
    desc: "TryHTML is tool that can help you to Edit or Creat a HTML page in this tool You can test your code while coding in LIVE and if your a beginner it not a problem TryHTML hase built in code library you can also Convert images to Base64 or the opposite and you can get source code of a webpage and you can also get eny color in RGB TryHTML hase a color Picker.",
    // First item  = windows , second = linux ,third = MacOs
    compatible: [true, false, false],
    stack:[logos[0],logos[6]],
    dw: "https://github.com/cipher450/ACU/releases/download/acu/Advanced-checksum-utility_1.3.1.exe",
    src: "https://github.com/cipher450/ACU",
    color: "rgb(211, 35, 19);",
    img1: require('../res/projects/TryHTML-1.png'),
    img2: require('../res/projects/TryHTML-2.png'),
    img3:require('../res/projects/TryHTML-3.png'),
  },
  {
    titel: "Mega virus Maker",
    desc: "Powerfull malwaer making software ranges from simple 'prank' virus to fullOn ransomware",
    // First item  = windows , second = linux ,third = MacOs
    compatible: [true, false, false],
    stack: [logos[0],logos[6]],
    dw: "https://github.com/cipher450/Mega-Virus-Maker/releases/download/v2.0/Release.zip",
    src: "https://github.com/cipher450/Mega-Virus-Maker",
    color: "rgb(211, 35, 19);",
    img1: require('../res/projects/mvm-1.png'),
    img2: require('../res/projects/mvm-2.png'),
    img3: require('../res/projects/mvm-1.png'),
  },
  {
    titel: "Pulsar",
    desc: "Windows Remote Administration Tool",
    // First item  = windows , second = linux ,third = MacOs
    compatible: [true, false, false],
    stack: [logos[10],logos[6]],
    dw: "https://github.com/cipher450/Mega-Virus-Maker/releases/download/v2.0/Release.zip",
    src: "https://github.com/cipher450/Mega-Virus-Maker",
    color: "rgb(211, 35, 19);",
    img1: require('../res/projects/pulsar-1.gif'),
    img2: require('../res/projects/pulsar-2.gif'),
    img3: require('../res/projects/pulsar-3.gif'),
  },
];
const WebProjects =[
  {
    titel: "Photography portfolio ",
    desc: "a portfolio website ",
    // First item  = windows , second = linux ,third = MacOs
    compatible: [true, false, false],
    stack: [logos[7],logos[9] ],
    dw: "https://github.com/cipher450/Mega-Virus-Maker/releases/download/v2.0/Release.zip",
    src: "https://github.com/cipher450/Mega-Virus-Maker",
    color: "rgb(211, 35, 19);",
    img1: require('../res/projects/photography-1.gif'),
    img2: require('../res/projects/Photography-2.gif'),
    img3: require('../res/projects/photography-1.gif'),
  },
  {
    titel: "Onion-Web",
    desc: "Onion search engine",
    // First item  = windows , second = linux ,third = MacOs
    compatible: [true, false, false],
    stack:  [  logos[7],logos[9],logos[1]],
    dw: "https://github.com/cipher450/Mega-Virus-Maker/releases/download/v2.0/Release.zip",
    src: "https://github.com/cipher450/Mega-Virus-Maker",
    color: "rgb(211, 35, 19);",
    img1: require('../res/projects/onion-1.png'),
    img2: require('../res/projects/onion-2.png'),
    img3: require('../res/projects/onion-1.png'),
  },
]
export { DesktopProjects , WebProjects };
