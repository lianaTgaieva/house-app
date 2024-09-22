import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingCate from "../component/LoadingCate";
import Error from "../component/Error";

function CategoriesPage() {
    const [categ, setCateg] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError,setIsError]=useState(false);

    useEffect(() => {
        async function fetchCateH() {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://ddcf6b223ce91026.mokky.dev/cateH`);
                setCateg(response.data);
            } catch (error) {
                setIsError(true);
                console.log(error);
            }finally{
                setIsLoading(false);
            }
        }

        fetchCateH();
    }, []);
    if (isError){
        return <Error/>;
      }

    return (
        <section class="mobile-block">
            {isLoading ? <LoadingCate /> : (
                <div class="container">
                    <div class="category-house-row">
                            {categ.map((category) => (
                                <Link to={`/cate/${category.id}`} class="house-item"> 
                                    <img src={category.imgUrl} alt={category.text} class="category-item__img" />
                                    <span class="category-item__title">{category.text}</span>
                                </Link>
                    ))}
                </div>
            </div>
            )}
        </section>
    );
}

export default CategoriesPage;