import ShowShopInfo from "./show-shop-info";
import { useState,useEffect,useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import MobileShopInfo from "./mobileshopinfo";
import ShowShopLoader from "./show-shop-loader";
import MobileShopLoader from "./mobileshoploader";
import CheckConfirm from "./confirm/сheck-confirm";
import { useDispatch } from "react-redux";

const ShowShop = () => {
    const dispatch = useDispatch();
    const num = ['1','2','3'];
    const [lazyblock,setLazyBlock] = useState(true);
    const [local,setLocal] = useState("");
    const [popup,setPopup] = useState(false);
    const [info,setInfo] = useState('');
    const isMobile = useMediaQuery({ query: `(max-width: 480px)` });
    const [shows] = useState([
        {id:1,images:process.env.URL_STATE+'/images/placeholder.jpg',title:'ЗдравСити - Дифарм',adress:'г.Москва,Черняховского, д.5, корп. 1',time:'Пн-Вс 9:00-21:00',icon:process.env.URL_STATE+'/images/open.svg',status:'Аптека открыт',price:'155.55 ₸'},
        {id:2,images:process.env.URL_STATE+'/images/placeholder.jpg',title:'ЗдравСити',adress:'г.Москва,Черняховского, д.5, корп. 1',time:'Пн-Вс 9:00-21:00',icon:process.env.URL_STATE+'/images/open.svg',status:'Аптека открыт',price:'155.55 ₸'},
        {id:3,images:process.env.URL_STATE+'/images/placeholder.jpg',title:'ЗдравСити - Апотека',adress:'г.Москва,Черняховского, д.5, корп. 1',time:'Пн-Вс 9:00-21:00',icon:process.env.URL_STATE+'/images/open.svg',status:'Аптека открыт',price:'155.55 ₸'}
    ]);
    useEffect(()=>{
        let s = true;
        setTimeout(()=>{
            if(s) setLazyBlock(false);
        },1000);
        return ()=>{
            s=false;
        }
    },[]);
    const createLocal = useCallback((info)=>{
        let s;
        if(localStorage.getItem('basket-info')) s=JSON.parse(localStorage.getItem('basket-info'));
        else s="";
        setLocal([...s,info]);
        setInfo(info);
        setPopup(true);
        dispatch({type:"Add_Local",payload:1});
    },[dispatch]);
    const closePopup = useCallback((info) => {
        setPopup(info);
    },[]);
    useEffect(()=>{
        if(local==="") return 0;
        else localStorage.setItem('basket-info',JSON.stringify(local));
    },[local])
    return(
        <div>
        {(lazyblock)?num.map((nums)=>(isMobile)?<MobileShopLoader key={nums}/>:<ShowShopLoader key={nums}/>):shows.map(show=>
            (isMobile)?<MobileShopInfo create={createLocal} item={show} key={show.id}/>:<ShowShopInfo create={createLocal} item={show} key={show.id} />
        )}
        {popup?<CheckConfirm item={info} close={closePopup}/>:""}
        </div>
    );
};

export default ShowShop;