import './style.css'
import SearchArea from './searchArea';
import TagList from './tagList'
import React from "react";

export const App = () => (



<>
    <header></header>
    <section>
      <div className="navigation">
          <div className="content menu">
              <img src={"assets/icons/home.png"} alt="" />
              <p>/</p>
              <a href="">Барахолка</a>
              <p>/</p>
              <a href="">Редактировать теги</a>
          </div>
      </div>


      <div className="content title">Редактировать теги</div>

      <SearchArea />

      <div className="tagBox content">
          <TagList/>
      </div>      
  </section>
</>

);


