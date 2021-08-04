import logo from './logo.svg';
import './App.css';
import einstain from './einstein.jpg'
import './style.css';

function App() {
  return (
    <div className="container" style={{border:"solid 1px black",maxWidth:"100vw"}}>
      <h1 className='text-center'>Albert Einstein AND steve jobs</h1>
     <div className="row">
     <h1 className="title">med dehmani temani</h1>
     <div className="col-md-4">
     <img src={einstain} alt ='Image_einstain' style={{ width: "50vw", height: "50vh"}} />
     </div>
     <div >
     <img src="/public/assets/stevejobs.jpg" alt="Image_steve" style={{ width: "50vw", height: "50vh"}} />
     </div>
     <iframe width="100%" height="300"
            src="https://www.youtube.com/embed/sM5LtcfazvM"
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          <div>
            <p>Mortadha Ftiti ft. Sanfara - Cheda W Tzoul [Music Video] (2021) / مرتضى فتيتي وسنفرة - شدّة وتزول</p>
            <p>6,333,933 views Premiered Jun 3, 2021</p>
          </div>
     </div>
    </div>
  );
}

export default App;
