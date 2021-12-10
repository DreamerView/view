import ShowShopInfo from "./show-shop-info";
import { useState } from "react";
import GetHistoryLocation from "../../../locate";
import { useMediaQuery } from "react-responsive";
import MobileShopInfo from "./mobileshopinfo";

const ShowShop = () => {
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
    const [shows] = useState([
        {id:1,images:GetHistoryLocation+'/images/placeholder.jpg',title:'ЗдравСити - Дифарм',adress:'г.Москва,Черняховского, д.5, корп. 1',time:'Пн-Вс 9:00-21:00',icon:GetHistoryLocation+'/images/open.svg',status:'Аптека открыт',price:'155.55 ₸'},
        {id:2,images:GetHistoryLocation+'/images/placeholder.jpg',title:'ЗдравСити - Дифарм',adress:'г.Москва,Черняховского, д.5, корп. 1',time:'Пн-Вс 9:00-21:00',icon:GetHistoryLocation+'/images/open.svg',status:'Аптека открыт',price:'155.55 ₸'},
        {id:3,images:GetHistoryLocation+'/images/placeholder.jpg',title:'ЗдравСити - Дифарм',adress:'г.Москва,Черняховского, д.5, корп. 1',time:'Пн-Вс 9:00-21:00',icon:GetHistoryLocation+'/images/open.svg',status:'Аптека открыт',price:'155.55 ₸'}
    ]);
    return(
        shows.map(show=>
            (isMobile)?<MobileShopInfo item={show} key={show.id}/>:<ShowShopInfo item={show} key={show.id} />
        )
    );
};

export default ShowShop;