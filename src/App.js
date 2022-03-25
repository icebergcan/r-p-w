import './style.css'
import Search from './search';
import TagList from './tagList'
import {SearchResult, SearchResultCount} from './searchResult';


function App() {


  let pageContent

  function fillPage () {if (SearchResultCount > 0) {pageContent = <SearchResult/> 
} else {pageContent = <TagList/>}}

  fillPage()

console.log(pageContent)
  return (
<>
    <header></header>
  <section>
      <div class="navigation">
          <div class="content menu">
              <img src={"assets/icons/home.png"} alt="" />
              <p>/</p>
              <a href="">Барахолка</a>
              <p>/</p>
              <a href="">Редактировать теги</a>
          </div>
      </div>
      <div class="titleBox">
          <div class="content title">Редактировать теги</div>

      </div>
      <div class="searchMainBox">
          <div class="searchBox content">
              <Search />
              <Search />
              <div class="plusTag">
                + добавить тег
              </div>
          </div>
      </div>

      <div class="tagBox content">
        <div className="alphabet" /* style={alphabetStyle} */>
          {pageContent}
        </div>
    </div>      
  </section>
    <footer></footer>
</>
  );
}
export default App;
