import About from './About/About';
import Feature from './Feature/Feature';
import Header from './Header/Header';
(' md:min-w-3/4 md:max-w-3/4');

function App() {
  return (
    <div className='flex justify-center laptop:max-w-[1200px] tablet:max-w-[810px] mx-auto '>
      <div className='flex gap-x-4 desktop:flex-row flex-col'>
        <div className='flex gap-x-4'>
          <div className=''>
            <About />
          </div>
          <div className=''>
            <Header />
          </div>
        </div>
        <div className='hidden laptop:block'>
          <Feature />
        </div>
      </div>
    </div>
  );
}

export default App;
