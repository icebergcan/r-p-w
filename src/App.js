import './style.css'
import SearchArea from './searchArea';
import TagList from './tagList'
import React from "react";

export const App = () => (



<>
    <section>
      <div className="content title">Редактировать теги</div>

      <SearchArea />

      <div className="tagBox content">
          <TagList/>
      </div>      
    </section>
</>

);


