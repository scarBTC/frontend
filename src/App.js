import './App.css';
import Header from './components/header.js';
import BodyTop from './components/bodyTop';
import Body from './components/body';
import Footer from './components/footer';
import Item from './components/item';

function App() {
  return (
    <div className="App">
      <Header />
      <BodyTop />
      <div>
        {/* <Item/> */}
      </div>
      <Body />
      <Footer/>
    </div>
  );
}

export default App;
