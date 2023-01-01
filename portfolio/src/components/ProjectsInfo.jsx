import { Tailwind } from "../TailwindClases";
export default function ProjectInfo(props) {
  return (
    <div className="ProjectInfo sm:ml-5 mt-500">
      <h1
        className="sm:text-4xl text-3xl font-black  text-left"
        style={{ color: props.color }}
      >
        {" "}
        <b>{props.titel}</b>{" "}
      </h1>
      <p className="mt-10"> {props.desc}</p>
      <div className="flex flex-row mt-5 gap-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/VB.NET_Logo.svg/2048px-VB.NET_Logo.svg.png"
          alt=""
          width="60px"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/VB.NET_Logo.svg/2048px-VB.NET_Logo.svg.png"
          alt=""
          width="60px"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/VB.NET_Logo.svg/2048px-VB.NET_Logo.svg.png"
          alt=""
          width="60px"
        />
      </div>
      <h3 className={Tailwind.text.subHeader3 + " text-left mt-5"}>
        Compatible with{" "}
      </h3>
      <div className="flex flex-row mt-5 gap-2">
        {props.compatible[0] ? (
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogospng.org%2Fdownload%2Fwindows-11%2Flogo-windows-11-icon-1024.png&f=1&nofb=1&ipt=4ff0a7afdfe088f4c241f24e359816c61de94d4a175c48e400aba77491131963&ipo=images"
            alt=""
            width="60px"
          />
        ) : (
          ""
        )}
        {props.compatible[1] ? (
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Flogopedia%2Fimages%2F0%2F04%2FLinux_logo.png%2Frevision%2Flatest%3Fcb%3D20120814052336&f=1&nofb=1&ipt=e89be648c8eb7f80c44c262b6f0b5cec35576fce94b6cce6d0518b710db88c13&ipo=images"
            alt=""
            width="60px"
          />
        ) : (
          ""
        )}
        {props.compatible[2] ? (
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2020%2F06%2FApple_Mac_OS_Logo_old.png&f=1&nofb=1&ipt=59ebda859771c70c0c1bfacbe1b1995654b61b1378dd6507e3e810fed1850f38&ipo=images"
            alt=""
            width="60px"
          />
        ) : (
          ""
        )}
      </div>

      <div className="flex mt-10 gap-5">
        <button
          href={props.dw}
          className={Tailwind.buttons.Download + " h-fit"}
        >
          <svg
            class="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
          Download
        </button>

        <button
          href={props.src}
          className={Tailwind.buttons.Nocolor + " bg-gray-900  h-fit"}
        >
          <svg
            class="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
          </svg>
          Source Code
        </button>
      </div>
    </div>
  );
}
