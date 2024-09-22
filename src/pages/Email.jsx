import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingEmail from "../component/LoadingEmail";
import Error from "../component/Error"; 

function Email() {
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
        <section class="contact-form-section">
            {isLoading ? (
                <LoadingEmail />  
            ) : (
                <div class="container">
                    <form class="contact-form">
                        <label htmlFor="email" class="vse-span">Введите ваш email:</label>
                        <input type="email" id="email" name="email" placeholder="Email" required class="vse" />
                    </form>
                    <form class="contact-form">
                        <label htmlFor="phone" class="vse-span">Введите ваш номер телефона:</label>
                        <input type="tel" id="phone" name="phone" placeholder="87070000000" required class="vse" />
                    </form>
                    
                    <form class="contact-form">
                        <label htmlFor="name" class="vse-span">Введите ваше Ф.И.О:</label>
                        <input type="text" id="name" name="name" placeholder="Ф.И.О" required class="vse" />
                    </form>
                    <Link to="/sps" type="submit" class="vse-button">Отправить</Link>
                </div>
            )}
        </section>
    );
}

export default Email;