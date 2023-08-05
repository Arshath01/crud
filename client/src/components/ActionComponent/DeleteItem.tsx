export const DeleteButton = ({item,onDelete}:any) => {
  
    const handleDelete = async () => {
       
        try {
            const response = await fetch(`http://localhost:3000/user/${item.id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                onDelete();
                console.log('User data deleted successfully');
            } else {
                console.log('Delete request failed');
            }
        }
        catch(err){
            console.log(err);
        }
    }

    return (
        <div className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded">
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}
