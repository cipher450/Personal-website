export default function Navbar({ toggleDarkmod }) {
  return (
    <nav class="navbar">
      <ul class="navbar--gradiant flex  p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0   dark:border-gray-700">
        <li>
          <a
            href="#"
            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded text-2xl font-semibold md:bg-transparent md:text-blue-700 md:p-0 dark:text-white transition-all duration-150 ease-in-out"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#techstack"
            class="block py-2 pl-3 pr-4 text-white-900 rounded text-2xl font-semibold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-150 ease-in-out "
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            class="block py-2 pl-3 pr-4 text-gray-700 rounded text-2xl font-semibold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-150 ease-in-out"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#"
            class="block py-2 pl-3 pr-4 text-gray-700 rounded text-2xl font-semibold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-all duration-150 ease-in-out"
          >
            Contact
          </a>
        </li>
        <svg
          onClick={toggleDarkmod}
          class="w-6 h-6 transition-all duration-150 ease-in-out flex hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          ></path>
        </svg>
      </ul>
    </nav>
  );
}
