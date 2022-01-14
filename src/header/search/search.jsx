import SearchResult from "./search-result";
import { useEffect,useRef,useState } from "react";
import  '../../data';
import { getFirestore,collection,onSnapshot,query,orderBy,startAt,endAt,limit} from "firebase/firestore";
import SearchLoader from "./search-loader";
import { useSelector,useDispatch } from "react-redux";


const Search = () => {
    const focus = useRef();
    const [check,setCheck] = useState('');
    const [send,setSend] = useState([{}]);
    const [inputChange,setInputChange] = useState('');
    const [lazyblock,setLazyBlock] = useState('');
    const search = useSelector(state => state.search);
    const dispatch = useDispatch();
    useEffect(()=>{
        setCheck(false);
        const CheckEvent = ()=> {
            setCheck(true);
            dispatch({type:'SetHeader',set:false});
        };
        const CheckRemove = ()=> {
            setTimeout(()=>{
                setCheck(false);
                dispatch({type:'SetHeader',set:true});
            },250);
        };
        focus.current.addEventListener('focus',CheckEvent);
        focus.current.addEventListener('blur',CheckRemove);
    },[dispatch]);
    useEffect(()=>{
        focus.current.value = search;
    },[search])
    useEffect(()=>{
        setLazyBlock(false);
        let status = true;
        const getResult = async() => {
            const db = getFirestore();
            if(status) onSnapshot(collection(db,'list'),(result)=>{
                setSend(result.docs.map((res)=>({...res.data(),id:res.id})));
                setLazyBlock(true);
            })
        };
        getResult();
        return () => {
            status=false;
        }
    },[]);
    useEffect(()=>{
        const Registr = (result) => {
            return result.charAt(0).toUpperCase() + result.slice(1);
        };
        const InputChange = () => {
            const db = getFirestore();
            const q = query(collection(db,"list"),orderBy("title"),startAt(Registr(inputChange)),endAt(Registr(inputChange)+"\uf8ff"),limit(3));
            onSnapshot(q,result=>{
                setSend(result.docs.map((res)=>
                (
                    {...res.data()})
                )
                );
            });
        };
        InputChange();
    },[inputChange]);
    return(
        <>
        {check?<div className="m-s-fixed"/>:''}
        <div className="m-s">
            <input ref={focus} spellCheck="false" type="text" placeholder="Какой препарат мы будем искать?" onChange={(e)=>{setInputChange(e.target.value)}} className="m-s-1" />
        </div>
        {check?lazyblock?<SearchResult item={send} result={inputChange} key={new Date()} />:<SearchLoader/>:<div/>}
        </>
  );
};

export default Search;