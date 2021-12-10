import { useState } from "react";
import Item2 from "./item2";
import GetHistoryLocation from "../../locate";

const ItemList2 = () => {
    const [results] = useState([
        {id:1,title:'Смекта',content:'Таблетки, пачка, 10шт, 20 мг',image:GetHistoryLocation+'/images/smekta.jpg',price:'от 100 ₸'},
        {id:2,title:'Фуракцилин Авексима шипучие таблетки',content:'Таблетки, пачка, 10шт, 20 мг',image:GetHistoryLocation+'/images/smekta.jpg',price:'от 100 ₸'},
        {id:3,title:'Фуракцилин Авексима шипучие таблетки',content:'Таблетки, пачка, 10шт, 20 мг',image:GetHistoryLocation+'/images/smekta.jpg',price:'от 100 ₸'},
        {id:4,title:'Фуракцилин Авексима шипучие таблетки',content:'Таблетки, пачка, 10шт, 20 мг',image:GetHistoryLocation+'/images/smekta.jpg',price:'от 100 ₸'},
        {id:5,title:'Фуракцилин Авексима шипучие таблетки',content:'Таблетки, пачка, 10шт, 20 мг',image:GetHistoryLocation+'/images/smekta.jpg',price:'от 100 ₸'}
      ]);
    return(
        results.map(result=>
            <Item2 item={result} key={result.id} />
        )
    );
};

export default ItemList2;