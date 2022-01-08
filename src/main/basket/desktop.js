import GetHistoryLocation from "../../locate";
import {useState,useEffect} from 'react';
import { getFirestore,doc, onSnapshot } from "firebase/firestore";
import { useDispatch } from "react-redux";


const DesktopBasket = (info)=> {
  const [status,setStatus] = useState('');
  const [pr,setPr] = useState(0);
  const [sum,setSum] = useState(info.item.item);
  const id = info.item.key;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type:"LetProduct",put:0});
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
          setPr((s.price*1).toFixed(0));
          dispatch({type:"PutProduct",put:s.price});
          // setLazyBlock(false);
        }
      }
      else {
        if(check) { 
          setStatus({title:"404",content:"Ничего не найдено",price:"0",image:"/images/first-aid-alt.svg"});
          dispatch({type:"PutProduct",put:100});
          setPr(100);
          // setLazyBlock(false);
        }
      };
    });
    return () => {
      check=false;
    };
  },[id,dispatch]);
  // const cost = status.price;
  const cost = 100;
  const PlusSum = () => {
    setSum(sum+1);
    setPr(((sum+1)*cost).toFixed(0));
    dispatch({type:"AddProduct",put:cost});
  };
  const MinusSum = () => {
    if(sum <= 1) return 0;
    else {
      setSum(sum-1);
      setPr((pr-cost).toFixed(0));
      dispatch({type:"GetProduct",put:cost});
    }
  };
  const RemoveItem = () => {
    info.remove(info.item);
    dispatch({type:"GetProduct",put:pr});
  }
  const maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
     object.target.value = object.target.value.slice(0, object.target.maxLength)
      }
    }
    return(
        <div className="backet-p">
        <div className="img-basket-picture">
            <img className="img-backet" src={GetHistoryLocation+status.image} alt="Panakea 2" />
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
                    <input  onInput={maxLengthCheck} maxLength="3" type="number" placeholder={sum} onChange={(e)=>{setPr((e.target.value*cost).toFixed(0));setSum(e.target.value*1);dispatch({type:"LetProduct",put:e.target.value*cost});}} value={Number(sum).toString()} className="but-quantity" />
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

export default DesktopBasket;