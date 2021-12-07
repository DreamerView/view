import PanelList from "./panel-list";
import Location from '../../locate'

const Panel = () => {
    return(
        <div className="m-p-i-b">
            <PanelList item={{images:Location+'/images/info.svg',title:'Гид'}} />
            <PanelList item={{images:Location+'/images/compass.svg',title:'Караганда'}} />
            <PanelList item={{images:Location+'/images/earth.svg',title:'Русский'}} />
        </div>
    );
};

export default Panel;
