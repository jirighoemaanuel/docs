import logo from '../../assets/htmltag.webp';
import img1 from '../../assets/img1.webp';
import Post from './Post.jsx';
import { useState } from 'react';
import PostContent from './PostContent';

function Header() {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (postId) => {
    setSelectedPost(postId);
  };

  return (
    <div className=''>
      {selectedPost === null && (
        <>
          <div className='flex justify-center items-center mt-2'>
            <div className=''>
              <div className='flex gap-6 mb-8 px-4'>
                <img className='hidden laptop:block w-20' src={logo} alt='' />
                <div className='pr-20'>
                  <div className='gap-2 mb-2'>
                    <h1 className='text-xl text-light-100 font-bold inline'>
                      Semicolon
                    </h1>
                    <h3 className='text-lg inline font-semibold'>
                      , <p className='inline mx-1'>A Dev Blog</p>
                    </h3>
                  </div>
                  <div>
                    <p className='font-semibold'>
                      I design and code beautifully simple things, and
                      occasionally I write about them.
                    </p>
                  </div>
                </div>
              </div>
              <hr className='text-light-10 my-1 mb-10 mx-2' />
            </div>
          </div>
        </>
      )}
      <div className='bg-dark-100 flex flex-col gap-y-6 rounded-lg'>
        {selectedPost !== null ? (
          <PostContent id={selectedPost} goBack={() => setSelectedPost(null)} />
        ) : (
          [1, 2, 3, 4, 5, 6].map((postId) => (
            <Post
              key={postId}
              img={img1}
              onClick={() => handlePostClick(postId)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Header;
