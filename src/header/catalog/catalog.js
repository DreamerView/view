import CatalogList from './catalog-list';

const Catalog = () => {
    return(
        <div className="panel-select">
              <CatalogList item={{images:process.env.URL_STATE+'/images/pill.svg',title:'Лекарство'}} />
              <CatalogList item={{images:process.env.URL_STATE+'/images/container.svg',title:'БАДы и Витамины'}} />
              <CatalogList item={{images:process.env.URL_STATE+'/images/secure.svg',title:'Гигиенические средства'}} />
              <CatalogList item={{images:process.env.URL_STATE+'/images/cosmetic.svg',title:'Косметика'}} />
              <CatalogList item={{images:process.env.URL_STATE+'/images/book.svg',title:'Детские товары'}} />
              <CatalogList item={{images:process.env.URL_STATE+'/images/healthcare.svg',title:'Медицинские приборы'}} />
              <CatalogList item={{images:process.env.URL_STATE+'/images/favourite.svg',title:'Питание и спорт'}} />
              <CatalogList item={{images:process.env.URL_STATE+'/images/zoo.svg',title:'Зоотовары'}} />
        </div>
    )
};

export default Catalog;
