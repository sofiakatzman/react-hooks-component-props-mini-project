import react from "react";
import Article from "./Article"

function ArticleList({articles}){

    const listArticles = articles.map(article =>  <Article key = {article.id} title = {article.title} date = {article.date || "January 1, 1970"} preview = {article.preview}/>)
  
    return <main> {listArticles}</main>
}


export default ArticleList
