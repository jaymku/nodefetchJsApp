// pages/index.js
export default function Home({ posts }) {
    return (
      <div>
        <h1>Posts</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/posts');
    const posts = await res.json();
  
    return {
      props: {
        posts,
      },
    };
  }
  