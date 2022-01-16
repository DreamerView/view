import {useState,useEffect,memo} from 'react';
import { getFirestore,doc, onSnapshot } from "firebase/firestore";
import { useDispatch } from "react-redux";


const DesktopBasket = (info)=> {
  const [status,setStatus] = useState('');
  const [pr,setPr] = useState(0);
  const [sum,setSum] = useState(info.item.item);
  const [animation,setAnimation] = useState('');
  const id = info.item.key;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type:"LetProduct",put:0});
    dispatch({type:"LetTotalItem",send:0});
  }, [dispatch]);
 
  useEffect(()=>{
    // setLazyBlock(true);
    let check = true;
    const db = getFirestore();
    onSnapshot(doc(db,'list',id),(docSnap)=>{
      if(docSnap.exists()) {
        const s = docSnap.data();
        if(check) { 
          setStatus({title:s.title,content:s.content,price:s.price,image:s.image,id:s.id});
          setPr((s.price*info.item.item).toFixed(0));
          dispatch({type:"PutProduct",put:s.price*info.item.item});
          dispatch({type:"AddTotalItem",send:info.item.item});
          // setLazyBlock(false);
        }
      }
      else {
        if(check) { 
          setStatus({title:"404",content:"Ничего не найдено",price:"0",image:"/images/first-aid-alt.svg"});
          dispatch({type:"PutProduct",put:100});
          dispatch({type:"AddTotalItem",send:1});
          setPr(100);
          // setLazyBlock(false);
        }
      };
    });
    return () => {
      check=false;
    };
  },[id,dispatch,info.item.item]);
  const cost = status.price;
  // const cost = 100;
  const PlusSum = () => {
    if(sum >= 100) return 0;
    setSum(sum+1);
    setPr(((sum+1)*cost).toFixed(0));
    dispatch({type:"AddProduct",put:cost});
    dispatch({type:"AddTotalItem",send:1});
    info.change({s:sum+1,id:info.item.id})
  };
  const MinusSum = () => {
    if(sum <= 1) return 0;
    else {
      setSum(sum-1);
      setPr((pr-cost).toFixed(0));
      dispatch({type:"GetProduct",put:cost});
      dispatch({type:"GetTotalItem",send:1});
      info.change({s:sum-1,id:info.item.id})
    }
  };
  const RemoveItem = () => {
    setTimeout(()=>{
      info.remove(info.item);
      dispatch({type:"GetProduct",put:pr});
      dispatch({type:"GetTotalItem",send:sum});
    },200)
    setAnimation('animation');
  };
  const maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
     object.target.value = object.target.value.slice(0, object.target.maxLength)
    }
    const s = isNaN(object.target.value)
    if(s === true) {
      object.target.value = sum;
    }
  };
  const CheckValue = (object) => {
    if(object.target.value.length===0 || object.target.value.slice(0, object.target.maxLength)==='0') {
      setSum(1);
      setPr(cost);
      dispatch({type:'AddProduct',put:cost});
      dispatch({type:'AddTotalItem',send:1});
      info.change({s:1,id:info.item.id})
    }
  }
  return(
        <div className={`backet-p ${animation}`}>
        <div className="img-basket-picture">
            <img className="img-backet" src={process.env.PUBLIC_URL+status.image} alt="Panakea 2" />
        </div>
        <div className="id-b">
          <h1 className="id-b-t1">{info.item.from}</h1>
          <h1 className="id-b-t2">{status.title}</h1>
          <h1 className="id-b-t3">ID: {status.id}</h1>
        </div>
        <div className="quantity-block">
            <div className="quantity">
                <button onClick={MinusSum} className="but">-</button>
                <div className="but-quantity-block">
                    <input onBlur={CheckValue} pattern='[0-9]{2}' onInput={maxLengthCheck} maxLength="2" type="tel" placeholder={sum} onChange={(e)=>{setPr((e.target.value*cost).toFixed(0));setSum(e.target.value*1);dispatch({type:'GetProduct',put:pr});dispatch({type:'AddProduct',put:e.target.value*cost});dispatch({type:'GetTotalItem',send:sum});dispatch({type:'AddTotalItem',send:(e.target.value*1)});info.change({s:(e.target.value*1),id:info.item.id})}} value={Number(sum).toString()} className="but-quantity" />
                </div>
                <button onClick={PlusSum} className="but-p">+</button>
            </div>
        </div>
        <div className="priceb">
          <h1 className="price-backet">{pr} ₸</h1>
          <button className="add">Добавить в избранное</button>
          <button onClick={RemoveItem} className="delete">Удалить из корзины</button>
        </div>
      </div>
  );
};

export default memo(DesktopBasket);