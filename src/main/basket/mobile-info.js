import BasketMobile from "./mobile";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";

const MobileBasketInfo = () => {
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
        <div className="main-block-your-basket">
            <h1 className="m-p">Ваша корзина</h1>
          <h1 className="m-p-content">У вас в корзине {local} товара</h1>
        <div className="your-text-block-place">
            {localStorage.getItem('basket-info')?show.map(basket=><BasketMobile remove={RemoveBasket} item={basket} key={basket.id}/>):""}
          {local?<div>
          <div className="size-block">
              <div className="order-block">
                <div className="place-order">
                  <h1 className="order-name">Итог заказа</h1>
                  <h1 className="two-items">{local} {word} ({total})</h1>
                </div>
              </div>
              <div className="price-place-im-tired">
                <h1 className="money">{item} ₸</h1>
              </div>
            </div>
            <button className="pay-for-it">Продолжить</button>
          </div>:""}
        </div>
      </div>
    );
};

export default MobileBasketInfo;