import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import GetHistoryLocation from '../../locate';
import { getFirestore,collection, addDoc,doc, getDoc } from "firebase/firestore";
import  '../../data';
import { useEffect,useState } from 'react';
import ShowLoader from './show-loader';


const Show = () => {
    const {id} = useParams();
    const [lazyblock,setLazyBlock] = useState(true);
    const [look, setLook] = useState("");
    const db = getFirestore();
    const [status,setStatus] =  useState({
      title:'Загрузка',
      content:'Пожалуйста подождите',
      price:'загружаем',
      image:'/images/first-aid-alt.svg'
    });
    useEffect(()=>{
      console.log(id);
      let check = true;
      const db = getFirestore();
      getDoc(doc(db,'list',id)).then((docSnap)=>{
        if(docSnap.exists()) {
          const s = docSnap.data();
          if(check) { 
            setStatus({title:s.title,content:s.content,price:s.price,image:s.image});
            setLazyBlock(false);
          }
        }
        else console.log("error. Don't exist!");
      });
      return () => {
        check=false;
      };
    },[id],);
    useEffect(()=>{
      const toggleVisible = () => {
        const scrolled = window.pageYOffset;
        if (scrolled > 200){
          setLook("-fixed");
        } 
        else {
          setLook("");
        }
      };
      window.addEventListener('scroll', toggleVisible);
      return () => {
        window.removeEventListener('scroll', toggleVisible);
      };
    },[]);
    const Maybe = async() =>{
      try {
        const docRef = await addDoc(collection(db, "list"), {
          title: "Panakea",
          content: "Panakea App"

        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      // window.scroll({top:400,behavior:"smooth"});
    };
    return(
        <>
        {lazyblock?<ShowLoader />:
        <div>
        <Link className={`show-p-b${look}`} to={GetHistoryLocation+"/"}>
          <div className="show-p-b-p">
            <img className="show-p-b-i" src={`${GetHistoryLocation}/images/left.svg`} alt="left" />
          </div>
        </Link>
        <div className="show-product">
          <div className="show-product-2">
            <div className="show-p-p">
              <img src={GetHistoryLocation+status.image} alt="" loading="lazy" className="show-p-i" />
            </div>
          </div>
          <div className="show-product-3">
            <div className="show-p-i-b">
              <h1 className="show-p-i-b-h">
                {status.title}
              </h1>
              <p className="show-p-i-b-p">
                {status.content}
              </p>
              <p className="show-p-i-b-p">
                Средняя цена в аптеках города <b>{status.price} ₸{id}</b>
              </p>
              <div className="show-p-i-b-f">
                <button onClick={Maybe} className="show-button">
                  Купить
                </button>
                <button type="button" className="show-favourite">
                  <div className="show-f-p">
                    <img className="show-f-i" src={`${GetHistoryLocation}/images/heart-red.svg`} alt="" />
                  </div> Добавить избранное
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>}
      </>
    );
};

export default Show;