import logo from './logo.svg';
import './App.css';
import Slider from './components/slider';



function App() {

  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "tiger" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
  ];
  const containerStyles = {
    width: "80vw",
    height: "80vh",
    margin: "50px auto",
  };
  return (
    <div>

      <div style={containerStyles}>
        <Slider slides={slides} />
      </div>
    </div>
  );

}

export default App;
