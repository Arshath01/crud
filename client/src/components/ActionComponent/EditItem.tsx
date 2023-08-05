import { useState } from "react";
import {useLocation} from 'react-router-dom';

export const EditItem = () => {
    const location = useLocation();
    const { item } = location.state;
    
    const [formData, setFormData] = useState({ name: item.name, Description: item.description });

    const handleChange = (e:any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = async (e:any) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/user/${item.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('User data updated successfully');

            } else {
                console.log('Update request failed');
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form className="container mx-auto mt-5 max-w-sm">
        <h1 className="font-bold mb-3">Edit User Data</h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="Description" className="block text-gray-700 font-bold mb-2">Description</label>
          <input type="text" id="Description" name="Description" value={formData.Description} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="text-center">
          <button className="w-full bg-green-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSave}>
            Save
          </button>
        </div>
      </form>
    );
};

