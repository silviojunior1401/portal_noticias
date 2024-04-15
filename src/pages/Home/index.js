import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
    const [noticias, setNoticias] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getNoticias() {
            try {
                const res = await api.get();

                setNoticias(res.data.articles);
                setLoading(false);
            } catch (e) {
                console.log(e);
            }
        }

        getNoticias();
    }, []);

    if (loading) {
        return (
            <div className="loading">
                <h2>Carregando noticias...</h2>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="lista-noticias">
                {noticias.map((noticia) => {
                    return (
                        <article key={noticia.title}>
                            <strong>{noticia.title}</strong>
                            <img
                                src={noticia.image}
                                alt={noticia.title}
                            />
                            <Link to={`/noticia/${noticia.title}`}>Acessar</Link>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;
