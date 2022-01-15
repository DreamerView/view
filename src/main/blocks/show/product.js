import ProductInfo from "./product-info";
import { useState,useMemo } from "react";
import { getFirestore,doc, getDoc } from "firebase/firestore";
import  '../../../data';
import ProductInfoLoader from "./product-info-loader";
import { useParams } from "react-router-dom";

const Product = () => {
    const {id} = useParams();
    const [lazyblock,setLazyBlock] = useState('');
    const [ProductItem,setProductItem] = useState([
        {id:1,images:process.env.URL_STATE+'/images/factory.svg',title:'Производитель',content:"Загружаем данные. Пожалуйста подождите."},
        {id:2,images:process.env.URL_STATE+'/images/security.svg',title:'Фармакотерапевтическая группа',content:"Загружаем данные. Пожалуйста подождите."},
        {id:3,images:process.env.URL_STATE+'/images/forads.svg',title:'Действующее вещество:',content:"Загружаем данные. Пожалуйста подождите."},
        {id:4,images:process.env.URL_STATE+'/images/lekform.svg',title:'Лекарственная форма:',content:"Загружаем данные. Пожалуйста подождите."}
    ]);
    useMemo(()=>{
        setLazyBlock(false);
        let check = true;
        const db = getFirestore();
        getDoc(doc(db,'list',id)).then((docSnap)=>{
          if(docSnap.exists()) {
            const s = docSnap.data();
            if(check) { 
                setProductItem([
                    {id:1,images:process.env.URL_STATE+'/images/factory.svg',title:'Производитель',content:s.production},
                    {id:2,images:process.env.URL_STATE+'/images/security.svg',title:'Фармакотерапевтическая группа',content:s.pharm_group},
                    {id:3,images:process.env.URL_STATE+'/images/forads.svg',title:'Действующее вещество:',content:s.active},
                    {id:4,images:process.env.URL_STATE+'/images/lekform.svg',title:'Лекарственная форма:',content:s.form}
                ]);
                setLazyBlock(true);
            }
          }
          else console.log("error. Don't exist!");
        });
        console.log('updated');
        return () => {
          check=false;
        };
      },[id]);
    return(
        <div>
        
        {lazyblock ? ProductItem.map(product=>{
            return(<ProductInfo item={product} key={product.id} />);
        }):<ProductInfoLoader/>}
        </div>
    );
};

export default Product;