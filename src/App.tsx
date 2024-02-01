import DiscountPage from './components/DiscountPage';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const count: number = 10
  const content: string[] = []

  for (let i = 0; i <= count; i++) {
    content.push(i.toString())
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {content.map((item) => {
          return <Route path={`/${item}`} key={item} element={<DiscountPage />} />
        })}
      </Routes>
    </Router>
  )
}

export default App
