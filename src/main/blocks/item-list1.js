import { useState } from 'react';
import Item1 from "./item1";
import GetHistoryLocation from '../../locate';

const ItemList1 = () => {
    const [posts] = useState([
        {id:"1fXhVDolCicMKjr2TFh7",title:'Фуракцилин Авексима шипучие таблетки',content:'Таблетки, пачка, 10шт, 20 мг',image:GetHistoryLocation+'/list-images/fur.jpg',price:'от 100 ₸'},
        {id:"Q2wpSObEWKGOgRkwMgZf",title:'Пенталгин',content:'Таблетки, 12 шт',image:GetHistoryLocation+'/list-images/pentalgin.png',price:'от 100 ₸'},
        {id:5,title:'Аспирин-С',content:'Таблетки, 10 шт, шипучие',image:GetHistoryLocation+'/list-images/aspirin.png',price:'от 100 ₸'}
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