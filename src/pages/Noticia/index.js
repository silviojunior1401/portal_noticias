import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./noticia.css";
import api from "../../services/api";

function Noticia() {
	const { title } = useParams();
	const [noticia, setNoticia] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function loadNoticia() {
			try {
				const res = await api.get("", {
					params: { q: '"' + title + '"' },
				});

				if (res.data.articles.length) {
					setNoticia(res.data.articles[0]);
					setLoading(false);
				} else {
					console.log("NOTÍCIA NÃO ENCONTRADA");
				}
			} catch {
				console.log("NOTÍCIA NÃO ENCONTRADA");
			}
		}

		loadNoticia();
	}, [title]);

	if (loading) {
		return (
			<div className="noticia-info">
				<h2>Carregando noticia...</h2>
			</div>
		);
	}

	return (
		<div className="noticia-info">
			<h1>{noticia.title}</h1>
			<img src={noticia.image} alt={noticia.title} />

			<br />
			<h4>{noticia.description}</h4>
			{/* <span>{noticia.content}</span> */}
			<br />
			<a href={noticia.url} target="_blank" rel="noreferrer">
				Ir para notícia
			</a>
		</div>
	);
}

export default Noticia;
