import DesktopBasket from "./desktop";
import { useState,useEffect,memo} from "react";
import { useDispatch,useSelector } from "react-redux";

const DesktopBasketInfo = () => {
    const dispatch = useDispatch();
    const item = useSelector(state => state.item);
    const local = useSelector(state=> state.cash);
    const total = useSelector(state=> state.total);
    const [store,setStore] = useState({l:[],n:0});
    const [check,setCheck] = useState('');
    useEffect(()=>{
      if(localStorage.getItem('basket-info')) {
        setStore({l:JSON.parse(localStorage.getItem('basket-info')),n:JSON.parse(localStorage.getItem('basket-info')).length})
      }
    },[])
    const [show,setShow] = useState(store.l);
    const [num,setNum] = useState(store.n);
    const RemoveBasket = (basket) => {
        setShow(show.filter(p=>p.id !==basket.id));
        setNum(num-1);
        setCheck('yes');
        dispatch({type:"Minus_Local",payload:1});
      };
    useEffect(()=>{
        setShow(store.l);
    },[store.l]);
    useEffect(() => {
        if(check==='yes') localStorage.setItem('basket-info',JSON.stringify(show));
    }, [check,show]);
    let word;
    switch(local) {
      case 1: word='товар';break;
      default: word='товара';break;
    }
    return(
        <div className="m">
        <div className="b-backet">
        <h1 className="u-backet">Ваша корзина</h1>
        <h1 className="product-b">У вас в корзине {local} {word}</h1>
        <div className="grid-backet">
            {localStorage.getItem('basket-info')?show.map(basket=><DesktopBasket remove={RemoveBasket} item={basket} key={basket.id}/>):""}
        </div>
        {local?<div className="payment">
            <div className="payment-block">
                <div className="payment-flex">
                <div className="price-payment-0">
                <h1 className="result">Итог заказа</h1>
                <h1 className="quantity-payment">{local} {word} ({total})</h1>
                </div>
                <div className="price-payment-1">
                <h1 className="price-payment">{item} ₸</h1>
                </div>
                </div>
                <button className="pay">Продолжить</button>
            </div>
        </div>:""}
      </div>
    </div>
    );
};

export default memo(DesktopBasketInfo);