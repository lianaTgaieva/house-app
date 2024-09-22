import { Link } from "react-router-dom";

function PostCard({ post }) {
  const linkTo = post.title === "Квартиры" ? "/cateKvar" : "/cate";

  return (
    <Link to={linkTo} className="home-card">
      <div className="container">
        <h3 className="home-card__title">{post.title}</h3>
        <span className="home-card__cena">{post.cena}</span>
      </div>
      {post.photo && ( 
              <div className="doma">
               <h4 className="text-tit">{post.text}</h4>
               <span className="text-tet">{post.texti}</span>
                <img src={post.photo} alt="Дом" />
              </div>
      )}
    </Link>
  );
}

export default PostCard;