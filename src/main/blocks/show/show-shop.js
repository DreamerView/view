import ShowShopInfo from "./show-shop-info";
import { useState,useEffect } from "react";
import GetHistoryLocation from "../../../locate";
import { useMediaQuery } from "react-responsive";
import MobileShopInfo from "./mobileshopinfo";
import ShowShopLoader from "./show-shop-loader";
import MobileShopLoader from "./mobileshoploader";

const ShowShop = () => {
    const num = ['1','2','3'];
    const [lazyblock,setLazyBlock] = useState(true);
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
    const [shows] = useState([
        {id:1,images:GetHistoryLocation+'/images/placeholder.jpg',title:'ЗдравСити - Дифарм',adress:'г.Москва,Черняховского, д.5, корп. 1',time:'Пн-Вс 9:00-21:00',icon:GetHistoryLocation+'/images/open.svg',status:'Аптека открыт',price:'155.55 ₸'},
        {id:2,images:GetHistoryLocation+'/images/placeholder.jpg',title:'ЗдравСити - Дифарм',adress:'г.Москва,Черняховского, д.5, корп. 1',time:'Пн-Вс 9:00-21:00',icon:GetHistoryLocation+'/images/open.svg',status:'Аптека открыт',price:'155.55 ₸'},
        {id:3,images:GetHistoryLocation+'/images/placeholder.jpg',title:'ЗдравСити - Дифарм',adress:'г.Москва,Черняховского, д.5, корп. 1',time:'Пн-Вс 9:00-21:00',icon:GetHistoryLocation+'/images/open.svg',status:'Аптека открыт',price:'155.55 ₸'}
    ]);
    useEffect(()=>{
        let s = true;
        setTimeout(()=>{
            if(s) setLazyBlock(false);
        },3000);
        return ()=>{
            s=false;
        }
    },[])
    return(
        <div>
        {(lazyblock)?num.map((nums)=>(isMobile)?<MobileShopLoader key={nums}/>:<ShowShopLoader key={nums}/>):shows.map(show=>
            (isMobile)?<MobileShopInfo item={show} key={show.id}/>:<ShowShopInfo item={show} key={show.id} />
        )}
        </div>
    );
};

export default ShowShop;