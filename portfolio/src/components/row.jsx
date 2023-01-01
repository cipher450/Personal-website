import Progressbar from "./progressBar";
export default function row({ tech, level, img }) {
  let color;
  if (level < 50) {
    color = "medium";
  } else if (level < 30) {
    color = "bad";
  } else {
    color = "good";
  }

  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white w-45"
      >
        <div className="flex items-center">
          <img className="align-middle mr-5" src={img} width="50"></img>

          <span>{tech}</span>
        </div>
      </th>
      <td className="py-4 px-6">
        <Progressbar value={level} colorZ={color} />
      </td>
    </tr>
  );
}
