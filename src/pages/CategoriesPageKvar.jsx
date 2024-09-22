import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingCate from "../component/LoadingCate"; 
import Error from "../component/Error";

function CategoriesPageKvar() {
    const [categ, setCateg] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError,setIsError]=useState(false);

    useEffect(() => {
        async function fetchCateg() {
            try {
                setIsLoading(true);
                const response = await axios.get("https://ddcf6b223ce91026.mokky.dev/categ");
                setCateg(response.data);
            } catch (error) {
                setIsError(true);
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchCateg();
    }, []);
    if (isError){
        return <Error/>;
      }


    return (
        <section class="mobile-block">
            {isLoading ? <LoadingCate /> : (
                <div class="container">
                    <div class="category-house-row">
                        {categ.map((cate) => (
                            <Link to={`/cateKvar/${cate.id}`} class="house-item" key={cate.id}> 
                                <img src={cate.img} alt={cate.name} class="category-item__img" />
                                <span class="category-item__title">{cate.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}

export default CategoriesPageKvar;