import PanelList from "./panel-list";

const Panel = () => {
    return(
        <div className="m-p-i-b">
            <PanelList item={{images:process.env.URL_STATE+'/images/info.svg',title:'Гид'}} />
            <PanelList item={{images:process.env.URL_STATE+'/images/compass.svg',title:'Караганда'}} />
            <PanelList item={{images:process.env.URL_STATE+'/images/earth.svg',title:'Русский'}} />
        </div>
    );
};

export default Panel;
