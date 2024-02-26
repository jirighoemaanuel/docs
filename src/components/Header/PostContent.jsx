import { FaArrowLeft } from 'react-icons/fa';

function PostContent({ id, goBack }) {
  // Fetch the post content based on the id
  // This is just a placeholder, replace it with your actual logic
  const postContent = `This is the content of post ${id}`;
  function handleClick() {}

  return (
    <div className='laptop:max-w-[590px] tablet:max-w-[506px]'>
      <div>
        <button onClick={goBack}>
          <FaArrowLeft />
        </button>
        <a>Home</a>
      </div>
      <div className=' tablet:border tablet:border-light-10'>
        <h2></h2>
        <p>{postContent}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          ducimus maxime similique consectetur dolore velit repellat, corporis
          quia unde reiciendis magni cupiditate fugiat aspernatur quas
          praesentium qui necessitatibus consequuntur voluptates distinctio ipsa
          nisi. Eum accusantium enim vel dicta ipsum nostrum tenetur aperiam?
          Maxime laborum perferendis impedit dicta aliquam inventore! Nemo
          incidunt obcaecati laboriosam nostrum aspernatur, soluta sit inventore
          earum asperiores laudantium neque adipisci sapiente blanditiis ab
          ipsam suscipit ratione quod, beatae labore eligendi laborum, animi
          ipsa non recusandae. Eveniet enim dolorem quae. Odio quod nisi omnis
          possimus exercitationem, quisquam pariatur quam, sapiente consectetur
          optio laudantium non ipsa nostrum amet quidem!
        </p>
      </div>
    </div>
  );
}

export default PostContent;
