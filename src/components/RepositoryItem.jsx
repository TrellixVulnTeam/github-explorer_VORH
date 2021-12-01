export function RepositoryItem (props){
    return (
        <li>
            <strong>{props.repository.name ?? 'Default'}</strong> 
            <p>{props.repository.description}</p>

            <a href={props.repository.link}>
                Acessar Repositório
            </a>
        </li>
    );
}
// ?? é semelhante a ||. Usei para definir um nome quando repositório estiver vazio