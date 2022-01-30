import { useEffect, useState } from 'react';
import Item1 from "./item1";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";

const ItemList1 = () => {
    const [posts,setPosts] = useState([{id:1},{id:2},{id:3},{id:4},{id:5}]);
    useEffect(()=> {
        let status = true;
        const db = getFirestore();
        onSnapshot(collection(db, "list"),(result) => {
            if(status) setPosts(result.docs.map(doc=>doc.data()));
        });
        return () => {
            status = false;
        }
    },[]);
    return(
    <div className="b">
        {posts.map(post=>
            <Item1 item={post} key={post.id} />
        )}
    </div>
);
};

export default ItemList1;