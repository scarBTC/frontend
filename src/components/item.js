import useFetch from './fetch';

function Item () {
    const { loading, error, data } = useFetch('http://localhost:1337/api/simple-texts')

    if (loading) return <p>loading...</p>
    if (error) return <p>error</p>
    console.log(data)

    return (
     <div>
        {
        data.data.map(simpletext => (
          <div key={simpletext.id} Name="txt">
            <p>{simpletext.attributes.title}</p>
            <p>{simpletext.attributes.info}</p>
          </div>
        ))
      }
     </div>
    );
}

export default Item;

