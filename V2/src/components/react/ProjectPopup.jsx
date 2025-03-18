import React from "react";

const ProjectPopup = ({
  title,
  description,
  images,
  color,
  onClose,
  project,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 ">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-h-[90vh] overflow-y-auto relative lg:w-2/3 ">
        <button
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Title */}

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-black">
          {/* Left Side: Image */}
          <div className="border-black">
            <img
              className="rounded-lg w-full h-48 md:h-64 object-cover border-black"
              src={images[0]}
              alt={title}
            />
          </div>

          {/* Right Side: Description and Table */}
          <div>
          <h2 className="text-2xl font-bold mb-4 text-black">{title}</h2>
          <p className="text-gray-700 mb-4 overflow-y-auto max-h-32 md:max-h-none">
              {description}
            </p>

            {/* Table for Project Details */}
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Attribute
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {project.compatible.windows ? (
                    <tr>
                      <td className="px-4 py-2 text-sm font-medium text-gray-900">
                        Compatibility
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-500">
                        <ul className="list-disc list-inside">
                          <li>
                            Windows: {project.compatible.windows ? "Yes" : "No"}
                          </li>
                          <li>
                            Linux: {project.compatible.linux ? "Yes" : "No"}
                          </li>
                          <li>
                            MacOS: {project.compatible.macos ? "Yes" : "No"}
                          </li>
                        </ul>
                      </td>
                    </tr>
                  ) : (
                    ""
                  )}

                  {/* Tech Stack */}
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium text-gray-900">
                      Tech Stack
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-500 flex items-center gap-2">
                      {project.stack.map((logo, index) => (
                        <img
                          key={index}
                          src={logo}
                          alt="Tech Logo"
                          className="w-6 h-6 object-contain"
                        />
                      ))}
                    </td>
                  </tr>

                  {project.downloadUrl && (
                    <tr>
                      <td className="px-4 py-2 text-sm font-medium text-gray-900">
                        Download
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-500">
                        <a
                          href={project.downloadUrl}
                          className="text-blue-500 hover:text-blue-700"
                        >
                          Download Executable
                        </a>
                      </td>
                    </tr>
                  )}

                  {project.sourceCodeUrl && (
                    <tr>
                      <td className="px-4 py-2 text-sm font-medium text-gray-900">
                        Source Code
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-500">
                        <a
                          href={project.sourceCodeUrl}
                          className="text-green-500 hover:text-green-700"
                        >
                          View on GitHub
                        </a>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;
