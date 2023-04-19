import react from "react";
import Article from "./Article"

function ArticleList({posts}){

    const listArticles = posts.map(article =>  <Article key = {article.id} title = {article.title} date = {article.date} preview = {article.preview}/>)
  
    return <main>{listArticles}</main>
}


export default ArticleList
