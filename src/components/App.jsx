import About from './About/About';
import Feature from './Feature/Feature';
import Header from './Header/Header';

function App() {
  return (
    <div className='my-10 w-full'>
      <div className='xl:grid xl:grid-cols-3 gap-x-6'>
        <div className='grid md:grid-cols-1-2 xl:grid-cols-2-1 gap-x-6 xl:col-span-2 '>
          <div className=''>
            <About />
          </div>
          <div className=''>
            <Header />
          </div>
        </div>
        <div className='hidden xl:block'>
          <Feature />
        </div>
      </div>
    </div>
  );
}

export default App;
