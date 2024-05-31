import React from "react";

const Users = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col">
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden ">
                <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                  <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Username
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Joined on
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                      >
                        Verified
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Awais
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                        awais@gmail.com
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        user
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        12th may 2020
                      </td>
                      <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Verified
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
