import Layout from "../../components/Layout";
import Title from "../../components/Title";

export default function Post({post}) {
  return (<div>
      <Layout>
          <div className="card">
          <Title>Posts #{post.id} | {post.title}</Title>
          <p>{post.body}</p>
          </div>
          <style jsx>
      {`
        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
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


export async function getServerSideProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await res.json();
    return {
      props: {
        post
      }
    }
  }