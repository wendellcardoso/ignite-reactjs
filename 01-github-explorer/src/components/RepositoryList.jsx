import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList(){
    return(
        <section className="repository-list">
            <h1>Lista de repositório</h1>
            <ul>
                <RepositoryItem respository="unform1" />
                <RepositoryItem respository="unform2" />
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    );
}