import myWonderfulImage from "./Fakhri.jpg"
import vid from "./received_175028923802943.mp4"

import './App.css';

function App() {
  return (
    <div className="App" style={{border:"solid 1px black",maxWidth:"100vw"}}>
      <div>
      <h1 className="title red">Fakhri Abousaoud Kahouach</h1>
      <br />
      <img src={myWonderfulImage} alt="Moi 1"></img>
      <br />
      <img src="/Fakhri1.jpg" alt="Moi 2"></img>
      </div>

      <video width="320" height="240" controls>
        <source src={vid} type="video/mp4"></source>
      </video>
      
    </div>
  );
}

export default App;
