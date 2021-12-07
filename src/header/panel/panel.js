import PanelList from "./panel-list";

const Panel = () => {
    return(
        <div className="m-p-i-b">
            <PanelList item={{images:'/images/info.svg',title:'Гид'}} />
            <PanelList item={{images:'/images/compass.svg',title:'Караганда'}} />
            <PanelList item={{images:'/images/earth.svg',title:'Русский'}} />
        </div>
    );
};

export default Panel;
