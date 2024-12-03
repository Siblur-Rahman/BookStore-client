import { useEffect, useState } from "react";
import BookCard from "./BookCard";

const BestSellerBooks = () => {
    const [books, setBooks] = useState();
    useEffect(()=>{
        fetch('bookData.json')
        .then(res=>res.json())
        .then(data=>setBooks(data?.slice(0, 8)))
    },[])
    return (
        <div className="">
            <BookCard books={books} headline={'Best Seller Books'}/>
        </div>
    );
};

export default BestSellerBooks;