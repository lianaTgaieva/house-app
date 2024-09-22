import { useEffect, useState } from "react"; 
import LoadingCont from "../component/LoadingCont";
import Error from "../component/Error";

function Contact() {
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
        <section className="mobile-block">
            {isLoading ? (
                <LoadingCont /> 
            ) : (
                <div class="container">
                    <h3 class="contact-title">Наши контакты:</h3>
                    <div class="contact-details">
                        <p>87051234567 (Менеджер)</p>
                        <p>87089876543 (Директор)</p>
                        <p>4355 (Call-center)</p>
                        <p>87471239876 (Консультация)</p>
                        <p>dreamhouse@gmail.com</p>
                        <p>dreamhouse1@gmail.com</p>
                    </div>
                    <div class="contact-description">
                        Мы приносим изысканные дома для жизни вашей мечты!
                    </div>
                </div>
            )}
        </section>
    );
}

export default Contact;