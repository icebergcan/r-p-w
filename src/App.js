import './style.css'
import searchIcon from './assets/icons/searchIcon.png'
import Tag from './tag'
import Search from './search';
import completeTag from './tagList'

function App() {
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

          <div class="eng">
          <div class="alphabet">

                    <completeTag/>

                </div>
          </div>      
          <div class="rus">
                <div class="alphabet">

                    <div class="listSection" id="c">CAT</div>
                    <div class="listSection">Chengong</div>
                    <div class="listSection" id="h">Heli</div>
                    <div class="listSection">Hitiac</div>
                    <div class="listSection" id="k">Komatsu</div>
                    <div class="listSection" id="l">Livgong</div>
                    <div class="listSection" id="s">Shantui</div>
                    <div class="listSection">Shaanxi</div>
                    <div class="listSection" id="x">Xyma</div>
                    <div class="listSection" >XCcling</div>
                    
                </div>
          </div>
    </div>      
  </section>
    <footer></footer>
</>
  );
}

export default App;
