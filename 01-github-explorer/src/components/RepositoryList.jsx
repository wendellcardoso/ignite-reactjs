import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';
import { useState, useEffect } from "react";

//https://api.github.com/orgs/rocketseat/repos

export function RepositoryList(){

    const repository = {
        name: 'unform',
        description: 'Forms in React',
        link: 'https://github.com/unform/unform'
    }

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data));
    }, []);

    console.log(repositories);

    return(
        <section className="repository-list">
            <h1>Lista de repositório</h1>
            <ul>
                <RepositoryItem respository={repository} />
                <RepositoryItem respository={repository} />
                <RepositoryItem respository={repository} />
                <RepositoryItem respository={repository} />
            </ul>
        </section>
    );
}