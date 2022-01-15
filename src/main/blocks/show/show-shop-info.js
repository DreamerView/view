import {memo,useEffect,useState} from 'react';
import { useParams,Link } from "react-router-dom";

const ShowShopInfo = (info) => {
    const {id} = useParams();
    const [s,setS] = useState('');
    useEffect(()=>{
        if(localStorage.getItem('basket-info')) setS(JSON.parse(localStorage.getItem('basket-info')).find(s=>s.from===info.item.title && s.key===id));
        else setS('');
    },[info.item.title,id]);
    return(
                    <div className="b-m">
                    <div className="i">
                        <div className="i-m">
                        <div className="i-m-p">
                            <img className="i-m-i" src={info.item.images} loading="lazy" alt="пасхалка" />
                        </div>
                        </div>
                        <div className="b-t-p">
                                <div className="z-c-pb">
                                    <h1 className="z-c">{info.item.title}</h1>
                                    <p className="p-t">{info.item.adress}</p>
                                </div>
                                <div className="p">
                                    <div className="t-p">
                                    <div className="t-p-b">
                                        <div className="i-g">
                                        <img src={process.env.PUBLIC_URL+"/images/clock.svg"} alt="Panakea Show" loading="lazy" className="i-g-p" />
                                        <div className="t-t-p">
                                            <h1 className="t-t">{info.item.time}</h1>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="t-p2">
                                    <div className="t-p-b">
                                        <div className="i-g">
                                        <img src={info.item.icon} alt="Panakea Show" loading="lazy" className="i-g-p" />
                                        <div className="t-t-p">
                                            <h1 className="t-t">{info.item.status}</h1>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                        </div>
                        <div className="p-r">
                        <h1 className="h">{info.item.price}</h1>
                        {s?<Link onClick={()=>{window.scrollTo({top:0})}} to={'/basket'} className="p-r-b">В корзину</Link>:<button onClick={()=>{info.create({id:Date.now(),key:id,item:1,from:info.item.title});setS('yes');}} type="button" className="p-r-b">Выбрать</button>}
                        </div>
                    </div>
                    </div>
    );
};

export default memo(ShowShopInfo);