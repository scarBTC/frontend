import useFetch from './fetch';

function Item () {
    const { loading, error, data } = useFetch('http://localhost:1337/api/fotos?populate=foto')

    if (loading) return <p>loading...</p>
    if (error) return <p>error</p>
    console.log(data)

    return (
     <div>
        {
        data.data.map(foto => (
          <div key={foto.id} Name="img">
            <img src={`http://localhost:1337${foto.attributes.foto.data.attributes.url}`} alt="foto" />  
         
          </div>
        ))
      }
     </div>
    );
}

export default Item;

