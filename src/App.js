import './style.css'
import SearchArea from './searchArea';
import TagList from './tagList'
import React from "react";



function App() {

  return (
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

      <div className="searchBox content">
          <SearchArea />
      </div>

      <div className="tagBox content">
        <div className="alphabet" /* style={alphabetStyle} */>
          <TagList/>
        </div>
    </div>      
  </section>
</>
  );
}
export default App;
