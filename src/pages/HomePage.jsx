import PostList from "../component/PostList";
function HomePage(){
    return(
        <section class="mobile-block">
            <div class="mobile-block__header is-secondary">
                Категории
            </div>
            <PostList />
        </section>
    );
}

export default HomePage;