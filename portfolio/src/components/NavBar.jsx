import { useState } from "react";
export default function Navbar({ toggleDarkmod }) {
  const [selected, Setselected] = useState(1);
  const itemClass ="block py-2 pl-3 pr-4   rounded text-2xl font-semibold md:bg-transparent md:p-0   transition-all duration-150 ease-in-out"
  //<li>
  //<svg
  //   onClick={toggleDarkmod}
  //   class="w-6 h-6 transition-all duration-150 ease-in-out flex hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
  //   fill="none"
  //   viewBox="0 0 24 24"
  //   stroke="currentColor"
  // >
  //   <path
  //     stroke-linecap="round"
  //     stroke-linejoin="round"
  //     stroke-width="2"
  //     d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
  //   ></path>
  // </svg>
  //</li>
 
  return (
    <nav class="navbar ">
      <ul class="navbar--gradiant flex  p-4  border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0   dark:border-gray-700">
        <li onClick={(e)=>{
          Setselected(1)
        }} >
          <a
            href="#"
            class={  selected==1 ?itemClass+ " text-blue-700" : itemClass }
          >
            About
          </a>
        </li>
        <li onClick={(e)=>{
          Setselected(2)
        }}>
          <a
            href="#techstack"
            class={  selected==2 ?itemClass+ " text-blue-700" : itemClass }
           >
            Skills
          </a>
        </li>
        <li 
        onClick={(e)=>{
          Setselected(3)
        }}>
          <a
            href="#projects"
            class={  selected==3 ?itemClass+ " text-blue-700" : itemClass }
           >
            Projects
          </a>
        </li>

        <li
        onClick={(e)=>{
          Setselected(4)
        }}>
          <a
            href="#contact"
            class={  selected==4 ?itemClass+ " text-blue-700" : itemClass }
          >
            Contact
          </a>
        </li>
       
      </ul>
    </nav>
  );
}
