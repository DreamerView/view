import { useState,useEffect,memo } from "react";
import GetHistoryLocation from "../../locate";
import { getFirestore,doc, onSnapshot } from "firebase/firestore";
import { useDispatch } from "react-redux";

const BasketMobile = (info) => {
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
          setPr((s.price*1).toFixed(0));
          dispatch({type:"PutProduct",put:s.price});
          dispatch({type:"AddTotalItem",send:1});
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
  },[id,dispatch]);
  const cost = status.price;
  // const cost = 100;
  const PlusSum = () => {
    if(sum >= 100) return 0;
    setSum(sum+1);
    setPr(((sum+1)*cost).toFixed(0));
    dispatch({type:"AddProduct",put:cost});
    dispatch({type:"AddTotalItem",send:1});
  };
  const MinusSum = () => {
    if(sum <= 1) return 0;
    else {
      setSum(sum-1);
      setPr((pr-cost).toFixed(0));
      dispatch({type:"GetProduct",put:cost});
      dispatch({type:"GetTotalItem",send:1});
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
    }
  }
    return(
          <div className={`main-of-main ${animation}`}>
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
                      <input onBlur={CheckValue} onInput={maxLengthCheck} maxLength="2" type="tel" pattern='[0-9]{2}' placeholder={sum} onChange={(e)=>{setPr((e.target.value*cost).toFixed(0));setSum(e.target.value*1);dispatch({type:'GetProduct',put:pr});dispatch({type:'AddProduct',put:e.target.value*cost});dispatch({type:'GetTotalItem',send:sum});dispatch({type:'AddTotalItem',send:(e.target.value*1)});}} value={Number(sum).toString()} className="but-quantity" />
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

export default memo(BasketMobile);