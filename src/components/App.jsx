import About from './About/About';
import Feature from './Feature/Feature';
import Header from './Header/Header';

function App() {
  return (
    <div className=''>
      <div className='grid grid-cols-2 gap-4'>
        <div className='grid grid-cols-2 gap-4'>
          <About />
          <Header />
        </div>
        <Feature />
      </div>
    </div>
  );
}

export default App;
