import SearchItem from "./search-item";

const SearchResult = (result) => {
    // console.log(result.item);
    return(<div className="block-search">
      {result.item.map((items)=>
        (<SearchItem result={items} key={items.id} />)
      )}
    <div className="find-for-request-block">
        <div className="find-for-request-place-text">
          <h1 className="find-for-request-text">Найти еще по запросу <b>{result.result?result.result:"..."}</b></h1>
        </div>
    </div>
  </div>
  );
};

export default SearchResult;