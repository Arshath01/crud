import { useState } from 'react';

export const AddItemForm = () => {
    const [formData, setFormData] = useState({ name: '', Description: '' });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAddItem = async (e: any) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/newuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                console.log('Error in posting....');
            } else {
                setSuccessMessage('Data updated successfully!');
                setTimeout(() => {
                    setSuccessMessage('');
                }, 3000);
            }
        } catch (err) {
            console.log(err);
        }

        setFormData({
            name: '',
            Description: ''
        });
    };

    return (
        <div>
            <form className="gap-3 flex flex-col mx-auto w-3/4">
                <input
                    type="text"
                    placeholder="Name"
                    className="border rounded p-2 focus:outline-blue-400"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Description"
                    name="Description"
                    className="border rounded p-2 focus:outline-blue-400"
                    onChange={handleChange}
                    value={formData.Description}
                />
                <button
                    className="rounded p-2 bg-blue-600 text-white"
                    onClick={handleAddItem}
                >
                    Add Item
                </button>
            </form>
            {successMessage && (
                <div className="text-green-600 font-bold mx-auto mt-4 text-center">
                    {successMessage}
                </div>
            )}
        </div>
    );
};
