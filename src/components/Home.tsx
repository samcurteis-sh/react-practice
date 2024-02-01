import Tile from './common/Tile'

function Home() {
  const count: number = 10
  const content: string[] = []

  for (let i = 0; i <= count; i++) {
    content.push(i.toString())
  }

  return (
    <div className='tileContainer'>
        <h1>Home</h1>
    {content.map((item) => {
      return <Tile content={item} key={item} id={item} />
    })}
    </div>
  )
}

export default Home