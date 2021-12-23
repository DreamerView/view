import SearchResult from "./search-result";
import { useEffect,useRef,useState } from "react";


const Search = () => {
    const focus = useRef();
    const [check,setCheck] = useState('');
    useEffect(()=>{
        setCheck(true);
        const CheckEvent = ()=> {
            setCheck(true);
        };
        const CheckRemove = ()=> {
            setCheck(false);
        };
        focus.current.addEventListener('focus',CheckEvent);
        focus.current.addEventListener('blur',CheckRemove);
    },[]);
    return(
        <>
        <div className="m-s">
            <input ref={focus} spellCheck="false" type="text" placeholder="Какой препарат мы будем искать?" className="m-s-1" />
        </div>
        {check?<SearchResult/>:<div/>}
        </>
  );
};

export default Search;