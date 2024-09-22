import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import backIcon from "../assets/images/кнопка назад (1).svg"; 
import LoadingCard from "../component/LoadingCard";
import Error from "../component/Error";

function HomeDetail() {
  const { id } = useParams();  
  const [cateH, setCateH] = useState({}); 
  const [isLoading, setIsLoading]= useState(false); 
  const [isError,setIsError]=useState(false);


  useEffect(() => {
    async function fetchCateH() {
      try {
        setIsLoading(true);
        const response = await axios.get(`https://ddcf6b223ce91026.mokky.dev/cateH/${id}`);
        setCateH(response.data);
      } catch (error) {
        setIsLoading(true);
        console.log(error);
      }finally{
        setIsLoading(false);
      }
    }

    fetchCateH();
  }, [id]);
  if (isError){
    return <Error/>;
  }

  return (
    <section class="mobile-block">
      <div class="back-button">
        <Link to="/cate" class="back-button">
          <div class="container">
            <img src={backIcon} alt="back icon" />
          </div>
        </Link>
      </div>
      {isLoading ? <LoadingCard/> : (
      <div class="container">
        <div class="house-detail-block">
          <h3 class="house-card__title">{cateH.text}</h3>
          <p class="description">{cateH.description}</p>
          <img src={cateH.imageUrl} alt={cateH.text} class="house-card__img" />
          <span class="author">{cateH.author}</span>
          <br></br>
          <Link to="/email" class="tag-button">{cateH.tagButton}</Link>
        </div>
      </div>
      )}
    </section>
  );
}
export default HomeDetail;