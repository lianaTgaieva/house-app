import { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
import LoadingContSps from "../component/LoadingContSps";
import Error from "../component/Error";

function Contactps() {
    const [isLoading, setIsLoading] = useState(true); 
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = () => {
            try {
                const timer = setTimeout(() => {
                    setIsLoading(false); 
                }, 2000);

                return () => clearTimeout(timer); 
            } catch (error) {
                setIsError(true); 
                console.log(error); 
            } finally {
                setIsLoading(false); 
            }
        };

        fetchData();
    }, []);

    if (isError) {
        return <Error />;
    }

    return (
        <section class="mobile-block">
            {isLoading ? (
                <LoadingContSps />  
            ) : (
                <div class="container">
                    <h3 class="contact-title">Благодарим вас!</h3>
                    <div class="contacts-details">
                        <p> В течение 10 минут с вами свяжется наш менеджер </p>
                        <Link to="/cont" class="glav">Контакты</Link>
                    </div>
                    <div class="contacts-description">
                        Элитные дома — стиль жизни, доступный вам!
                    </div>
                </div>
            )}
        </section>
    );
}

export default Contactps;