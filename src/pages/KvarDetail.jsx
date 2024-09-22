import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import backIcon from "../assets/images/кнопка назад (1).svg"; 
import LoadingCard from "../component/LoadingCard";
import Error from "../component/Error";
function KvarDetail() {
    const { id } = useParams();  
    const [categ, setCate] = useState({}); 
    const [isLoading, setIsLoading]= useState(false); 
    const [isError,setIsError]=useState(false);


    useEffect(() => {
        async function fetchCate() {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://ddcf6b223ce91026.mokky.dev/categ/${id}`);
                setCate(response.data);  
            } catch (error) {
              setIsError(true);
                console.log(error); 
            } finally {
                setIsLoading(false);
            }
        }

        fetchCate();
    }, [id]); 
    if (isError){
      return <Error/>;
    } 

    return (
        <section class="mobile-block">
            <div class="back-button">
                <Link to="/cateKvar" class="back-button">
                    <div class="container">
                        <img src={backIcon} alt="back icon" />
                    </div>
                </Link>
            </div>
            {isLoading ? <LoadingCard/> : (
            <div class="container">
                <div class="house-detail-block">
                    <h3 class="house-card__title">{categ.name}</h3>
                    <p class="description">{categ.description}</p>
                    <img src={categ.imageUrl} alt={categ.name} class="house-card__img" />
                    <span class="author">{categ.author}</span>
                    <br></br>
                    <Link to="/email" class="tag-button">{categ.tagButton}</Link>
                </div>
            </div>
            )}
        </section>
    );
}

export default KvarDetail;