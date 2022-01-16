import { useState,useEffect } from "react";
import PanelList from "./panel-list";

const Panel = () => {
    const [city,setCity] = useState('Loading');
    useEffect(()=>{
        fetch('http://ip-api.com/json')
        .then(function (response) {
            return response.json();
        })
        .then(function (payload) {
            setCity(payload.city);
        });
    },[]);

    return(
        <div className="m-p-i-b">
            <PanelList item={{images:process.env.PUBLIC_URL+'/images/info.svg',title:'Гид'}} />
            <PanelList item={{images:process.env.PUBLIC_URL+'/images/compass.svg',title:city}} />
            <PanelList item={{images:process.env.PUBLIC_URL+'/images/earth.svg',title:'Русский'}} />
        </div>
    );
};

export default Panel;
