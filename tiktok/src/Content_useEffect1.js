import { useEffect, useState } from "react";

const tabs = ['posts', 'comments', 'albums'];

function Content() {
  const [title, setTitle] = useState('');
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState('posts');
  const [showGoTop, setShowGoTop] = useState(false);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => {
  //       //console.log("res: ", res);
  //       return res.json();
  //     })
  //     .then(post => {
  //       setPosts(post);
  //     });
  // }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => {
        //console.log("res: ", res);
        return res.json();
      })
      .then(posts => {
        setPosts(posts);
      });

    console.log('title change');
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowGoTop(true);
      } else {
        setShowGoTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      console.log('Unmounting...');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div>
      {console.log("Content render return")}
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setType(tab)}
          style={type === tab ? {
            color: '#fff',
            backgroundColor: '#333'

          } : {}}
        >
          {tab}
        </button>
      ))}

      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title ?? post.name}</li>;
        })}
      </ul>
      {showGoTop && (
        <button
          style={{
            position: 'fixed',
            right: 20,
            bottom: 20
          }}
        >
          Go to top
        </button>
      )}

    </div>
  );
}

export default Content;