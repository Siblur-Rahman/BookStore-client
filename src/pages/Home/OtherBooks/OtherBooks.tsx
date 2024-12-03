import { useEffect, useState } from "react";
import BookCard from "../BestSellerBooks/BookCard";

const OtherBooks = () => {
    const [books, setBooks] = useState();
    useEffect(()=>{
        fetch('bookData.json')
        .then(res=>res.json())
        .then(data=>setBooks(data?.slice(4, 12)))
    },[])
    return (
        <div className="">
            <BookCard books={books} headline={'Other Books'}/>
        </div>
    );
};

export default OtherBooks;