import ShowShopInfo from "./show-shop-info";
import { useState } from "react";

const ShowShop = () => {
    const [shows] = useState([
        {id:1,images:'/images/placeholder.jpg',title:'ЗдравСити - Дифарм',adress:'г.Москва,Черняховского, д.5, корп. 1',time:'Пн-Вс 9:00-21:00',icon:'/images/open.svg',status:'Аптека открыт'},
        {id:2,images:'/images/placeholder.jpg',title:'ЗдравСити - Дифарм',adress:'г.Москва,Черняховского, д.5, корп. 1',time:'Пн-Вс 9:00-21:00',icon:'/images/open.svg',status:'Аптека открыт'},
        {id:3,images:'/images/placeholder.jpg',title:'ЗдравСити - Дифарм',adress:'г.Москва,Черняховского, д.5, корп. 1',time:'Пн-Вс 9:00-21:00',icon:'/images/open.svg',status:'Аптека открыт'}
    ]);
    return(
        shows.map(show=>
            <ShowShopInfo item={show} key={show.id} />
        )
    );
};

export default ShowShop;