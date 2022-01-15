import { useState } from "react";
import Item2 from "./item2";

const ItemList2 = () => {
    const [results] = useState([
        {id:1,title:'Фуракцилин Авексима',content:'Таблетки, пачка, 10шт, 20 мг',image:process.env.PUBLIC_URL+'/list-images/fur.jpg',price:'от 100 ₸'},
        {id:2,title:'Фуракцилин Авексима шипучие таблетки',content:'Таблетки, пачка, 10шт, 20 мг',image:process.env.PUBLIC_URL+'/images/fur.jpg',price:'от 100 ₸'},
        {id:3,title:'Фуракцилин Авексима шипучие таблетки',content:'Таблетки, пачка, 10шт, 20 мг',image:process.env.PUBLIC_URL+'/images/fur.jpg',price:'от 100 ₸'},
        {id:4,title:'Фуракцилин Авексима шипучие таблетки',content:'Таблетки, пачка, 10шт, 20 мг',image:process.env.PUBLIC_URL+'/images/fur.jpg',price:'от 100 ₸'},
        {id:5,title:'Фуракцилин Авексима шипучие таблетки',content:'Таблетки, пачка, 10шт, 20 мг',image:process.env.PUBLIC_URL+'/images/fur.jpg',price:'от 100 ₸'}
      ]);
    return(
        results.map(result=>
            <Item2 item={result} key={result.id} />
        )
    );
};

export default ItemList2;