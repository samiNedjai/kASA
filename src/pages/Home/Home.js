import React from 'react'
import Banner from '../../components/Banner/Banner';
import data from '../../data/data.json'
import Card from '../../components/Card/Card';




 function Home() {
    const listings = data.logements
  document.title = "kasa-Accuiel";
  return (
    <div>
    <Banner/>
    <main className='gallery'>
            {listings.map(data => {
                return (
                    // Affiche chaque carte en utilisant le composant "Card"
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
        </main>
    </div>
  )
}
export default Home;
