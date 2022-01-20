import Link from "next/link";

export default function Navbar() {
  return (<nav className="header">
      <Link href={"/"}>
          <a>
          HOME
          </a>
          </Link>
      <Link href={"/users"}>
      <a>
          USERS
          </a>
          </Link>
      <Link href={"/posts"}>
      <a>
          POSTS
          </a>
          </Link>
      <style jsx>
        {`
          nav {
            padding-top: 30px;
            
          }
          a {
            padding: 0 10px;
            font-size: 2.5rem;
            text-decoration: none;
          }
        `}
      </style>
          
  </nav>
  
  );
}
