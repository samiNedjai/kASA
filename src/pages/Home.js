import React from 'react'
import Banner from '../components/Banner';
import datas from '../data/data.json'
import Card from '../components/Card';




 function Home() {
  document.title = "kasa-Accuiel";
  return (
    <div>
    <Banner/>
    <main className='gallery'>
            {datas.map(data => {
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
