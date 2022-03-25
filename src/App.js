import './style.css'
import searchIcon from './assets/icons/searchIcon.png'
import Tag from './tag'
import Search from './search';
import TagList from './tagList'

function App() {

  let sectionCount = '1fr 1fr'

  let alphabetStyle = {
    gridAutoFlow: 'column',
    gridTemplateRows: sectionCount
  };

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
        <div className="alphabet" style={alphabetStyle}>
          <TagList/>  
        </div>
    </div>      
  </section>
    <footer></footer>
</>
  );
}

export default App;
