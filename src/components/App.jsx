import About from './About/About';
import Feature from './Feature/Feature';
import Header from './Header/Header';

function App() {
  return (
    <div
      className='flex justify-center min-h-screen my-5 mx-8 animate-jiggly'
      style={{ minHeight: '100vh' }}
    >
      <div
        className='flex gap-x-6 h-full laptop:max-w-[1200px] tablet:max-w-[810px] '
        style={{ minHeight: '100%' }}
      >
        <div className='flex gap-x-6 flex-col tablet:flex-row gap-y-6 mx-4 tablet:mx-0'>
          <div
            className='mx-auto About'
            style={{
              opacity: 0, // hide initially
              animation: 'ripple 0.2s ease-out forwards',
              animationDelay: '0s', // About appears first
            }}
          >
            <About />
          </div>
          <div
            className='Header'
            style={{
              opacity: 0, // hide initially
              animation: 'ripple 0.4s ease-out forwards',
              animationDelay: '0.1s', // Header appears second
            }}
          >
            <Header />
          </div>
        </div>
        <div
          className='hidden laptop:block Feature'
          style={{
            opacity: 0, // hide initially
            animation: 'ripple 0.6s ease-out forwards',
            animationDelay: '0.3s', // Feature appears last
          }}
        >
          <Feature />
        </div>
      </div>
    </div>
  );
}

export default App;
