import { useNavigate } from 'react-router-dom';

export const DeleteButton = ({item,onDelete}) => {
  
    const handleDelete = async () => {
       
        try {
            const response = await fetch(`http://localhost:3000/user/${item.id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                onDelete();
                console.log('User data deleted successfully');
              // Refresh the page after successful deletion
            } else {
                console.log('Delete request failed');
            }
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div className="bg-red-600 rounded p-2 text-white">
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}
