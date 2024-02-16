import About from './About/About';
import Feature from './Feature/Feature';
import Header from './Header/Header';

function App() {
  return (
    <div className='flex justify-center items-start gap-10'>
      <About />
      <Header />
      <Feature />
    </div>
  );
}

export default App;
