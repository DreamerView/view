// import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import GetHistoryLocation from '../../locate';
import { getFirestore,collection, addDoc,doc, getDoc } from "firebase/firestore";
import  '../../data';
import { useEffect,useState } from 'react';

const Show = (props) => {
    // const {id} = useParams();
    const db = getFirestore();
    const [title,setTitle] =  useState('Загрузка данных');
    const [content,setContent] = useState('Пожалуйста подождите');
    const [price,setPrice] = useState('загружаем');
    const [image,setImage] = useState('/images/first-aid-alt.svg')
    useEffect(()=>{
      const db = getFirestore();
      getDoc(doc(db,'list','1fXhVDolCicMKjr2TFh7')).then((docSnap)=>{
        if(docSnap.exists()) {
          let s = docSnap.data();
          setTitle(s.title);
          setContent(s.content);
          setPrice(s.price);
          setImage(s.image);
        }
        else console.log("error. Don't exist!");
      });
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
        <Link className="show-p-b" to={GetHistoryLocation+"/"}>
          <div className="show-p-b-p">
            <img className="show-p-b-i" src={`${GetHistoryLocation}/images/left.svg`} alt="left" />
          </div>
        </Link>
        <div className="show-product">
          <div className="show-product-2">
            <div className="show-p-p">
              <img src={GetHistoryLocation+image} alt="" loading="lazy" className="show-p-i" />
            </div>
          </div>
          <div className="show-product-3">
            <div className="show-p-i-b">
              <h1 className="show-p-i-b-h">
                {title}
              </h1>
              <p className="show-p-i-b-p">
                {content}
              </p>
              <p className="show-p-i-b-p">
                Средняя цена в аптеках города <b>{price} ₸</b>
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
      </>
    );
};

export default Show;