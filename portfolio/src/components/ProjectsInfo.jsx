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
      <p className="mt-10 transition-all duration-150  ease-in-out"> {props.desc}</p>
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
        
          Source Code
        </button>
      </div>
    </div>
  );
}
