import { useState } from 'react';
import Item1 from "./item1";
import GetHistoryLocation from '../../locate';

const ItemList1 = () => {
    const [posts] = useState([
        {id:1,title:'Фуракцилин Авексима шипучие таблетки',content:'Таблетки, пачка, 10шт, 20 мг',image:GetHistoryLocation+'/images/fur.jpg',price:'от 100 ₸'},
        {id:2,title:'Фуракцилин Авексима шипучие таблетки',content:'Таблетки, пачка, 10шт, 20 мг',image:GetHistoryLocation+'/images/fur.jpg',price:'от 100 ₸'},
        {id:3,title:'Фуракцилин Авексима шипучие таблетки',content:'Таблетки, пачка, 10шт, 20 мг',image:GetHistoryLocation+'/images/fur.jpg',price:'от 100 ₸'},
        {id:4,title:'Фуракцилин Авексима шипучие таблетки',content:'Таблетки, пачка, 10шт, 20 мг',image:GetHistoryLocation+'/images/fur.jpg',price:'от 100 ₸'},
        {id:5,title:'Фуракцилин Авексима шипучие таблетки',content:'Таблетки, пачка, 10шт, 20 мг',image:GetHistoryLocation+'/images/fur.jpg',price:'от 100 ₸'}
      ]);
    return(
    <div className="b">
        {posts.map(post=>
            <Item1 item={post} key={post.id} />
        )}
    </div>
);
};

export default ItemList1;