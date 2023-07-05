import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';

interface Post {
  id: number;
  name: string;
  price: number;
  image: string;
}


const Cards = () => {
const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    axios.get<Post[]>('https://deployapi-p7icb5ugb-santiaguero91.vercel.app/productos')
      .then((response: AxiosResponse<Post[]>) => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

return (
    <div className=''>
      <ul className='bg-slate-200 grid grid-cols-3'>
        {data.map(el => <div 
        className='flex flex-col justify-evenly items-center h-64 w-48 shadow-lg rounded-lg cursor-pointer' 
        key={el.id}>
          <h4>{el.name} </h4>
          <p>{el.price} $</p>
          <img className='w-40 h-40' src={el.image} alt="img-prod "/>
          </div>)}
      </ul>
    </div>
  );
}
export default Cards;