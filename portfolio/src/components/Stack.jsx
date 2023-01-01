import Row from "./row";
export default function Techstack(props) {
  let stacks = props.stack;

  return (
    <div className="TechTable">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Tech
              </th>
              <th scope="col" className="py-3 px-6">
                <div className="flex items-center">Level</div>
              </th>
            </tr>
            {stacks.map((stack) => (
              <Row tech={stack.tech} level={stack.level} img={stack.img} />
            ))}
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}
