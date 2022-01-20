import Link from 'next/link';
import Layout from '../../components/Layout';
import Title from '../../components/Title';

export default function Posts({posts}) {
  return (<div>
      <Layout>
      <Title>Los Posts</Title>
      <div className="grid">
      {posts.map(post =>{
          return <div className="card">
              <Link href={`/posts/${post.id}`}>
              <a>
                <h1>{post.id} - {post.title}</h1>
                <p>{post.body}</p>
                </a>
            </Link>
          </div>
      })}
      </div>
      <style jsx>
        {`
          .grid {
            display: flex;
            flex-wrap: wrap;
            max-width: 800px;
            margin-top: 2rem;
          }
          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            color: black;
            text-decoration: none;
            border: 2px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }
          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }
          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }
          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }
        `}
      </style>
      </Layout>
  </div>);
}


export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
  
    return {
      props: {
        posts
      }
    }
  }