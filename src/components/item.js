import useFetch from './fetch';

function Item () {
    const { loading, error, data } = useFetch('http://localhost:1337/api/simple-texts')

    if (loading) return <p>loading...</p>
    if (error) return <p>error</p>

    return (
     <div>
        {
        data.map(simpletext => (
          <div key={simpletext.id} className="foto-1">
            <p>{simpletext.title}</p>
            <p>{simpletext.info}</p>
          </div>
        ))
      }
     </div>
    );
}

export default Item;

