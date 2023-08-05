import { useEffect, useState } from 'react';
import { ItemList } from './ItemList';

export const FetchData = () => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:3000/userdata');
                if (!response.ok) {
                    throw new Error('request failed !')
                }
                const json = await response.json();
                console.log(json)
                setData(json);
            }
            catch (err) {
                console.log(err);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            {loading ? <h1>loading...</h1> : <ItemList data={data} />}
        </div>
    )
}