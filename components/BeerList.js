import Link from 'next/link'

const BeerList =({beer}) =>{


   
    return (
        <div>
            <h1>{beer.name}</h1>
            <p>{beer.description}</p>
            <Link href={'/beers/'+ beer.id} key={beer.id} >
                 <a>Details</a>
            </Link>
    
        </div>
    
    )


}


export default BeerList