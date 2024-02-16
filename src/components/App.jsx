import About from './About/About';
import Feature from './Feature/Feature';
import Header from './Header/Header';

function App() {
  return (
    <div className='flex justify-around items-start gap-10'>
      {/* <div className='w-60 sticky top-0'> */}
        <About />
      {/* </div> */}
      <header className='flex-grow'>
        <Header />
      </header>
      {/* <div className='w-60 sticky top-0'> */}
        <Feature />
      {/* </div> */}
    </div>
  );
}

export default App;
