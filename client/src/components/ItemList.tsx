import { DeleteButton } from "./ActionComponent/DeleteItem";
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const ItemList = (props: { data: any[] }) => {
  const [data, setData] = useState(props.data);

  const handleDeleteItem = (itemId: any) => {
    setData(prevData => prevData.filter(item => item.id !== itemId));
  };

  return (
    <div className="container w-3/4 mx-auto mt-5">
      <table className="rounded w-full shadow-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2 w-3/4">Description</th>
            <th className="">Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item: any) => (
              <tr key={item.id} className="text-center">
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">{item.description}</td>
                <td className="border px-2 gap-2 py-2 flex justify-between">
                  <Link to={`/updateuser`} state={{ item }}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
                      Edit
                    </button>
                  </Link>
                  <DeleteButton item={item} onDelete={() => handleDeleteItem(item.id)} />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};
