import React, { useState, useEffect} from 'react'
import axios from 'axios'
import MainNav from '../../components/navigation/MainNav'
import NewsCard from '../../components/newscard/NewsCard'

const CryptoNews = () => {

const [ allNews, setAllNews] = useState([])

useEffect(()=>{
    axios.get("http://localhost:4000/api/posts").then(res => {
        setAllNews(res.data.posts)
        console.log(res.data.posts)
    }).catch(err => console.log(err))
},[])

    return (
        <div style={{margin: "0 auto"}}>
            <MainNav />
            <div style={{marginTop: "100px"}}>
                {allNews.map((post, key) => <NewsCard {...post} key={key}/>)}
            </div>
            
        </div>
    )
}

export default CryptoNews
