import { useState,useEffect } from "react";
import GetHistoryLocation from "../../locate";
import { getFirestore,doc, onSnapshot } from "firebase/firestore";
import { useDispatch } from "react-redux";

const BasketMobile = (info) => {
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
          <div className="main-of-main">
            <div className="block-one-img-and-glakso">
              <div className="img-and-glakso">
                <div className="img-and-place">
                  <div className="relative-and-absolute">
                    <img className="img-size" src={GetHistoryLocation+status.image} alt="Panakea images" loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="leader-text">
                <div className="place-glakso">
                  <h1 className="glakso-text-green">{info.item.from}</h1>
                </div>
                <div className="place-furak">
                  <h1 className="furak-text">{status.title}</h1>
                </div>
                <div className="place-furak">
                  <h1 className="id-text">ID: {status.id}</h1>
                </div>
              </div>
            </div>
            <div className="w">
              <div className="we">
                <div className="place-scary-turn-off">
                  <div className="scary-turn-off">
                    <button type="button" onClick={MinusSum} className="button-minus">-</button>
                    <div className="one-block">
                    <input onInput={maxLengthCheck} maxLength="3" type="number" placeholder={sum} onChange={(e)=>{setPr((e.target.value*cost).toFixed(0));setSum(e.target.value*1);dispatch({type:"LetProduct",put:e.target.value*cost});}} value={Number(sum).toString()} className="but-quantity" />
                    </div>
                    <button type="button" onClick={PlusSum} className="button-plus">+</button>
                  </div>
                </div>
                <div className="place-price">
                  <h1 className="price">{pr} ₸</h1>
                </div>
              </div>
              <div className="grid">
                <div className="place-favorite">
                  <button className="favorite">Добавить в избранное</button>
                </div>
                <div className="del-from-favorite">
                  <button onClick={RemoveItem} className="unfavorite">Удалить из корзины</button>
                </div>
              </div>
            </div>
          </div>
    );
};

export default BasketMobile;