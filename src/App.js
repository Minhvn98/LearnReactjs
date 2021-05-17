import About from './About'
import Home from './Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './temperatures.scss'
import Footer from './Footer'
import Report from './Report'

function App() {
  return (
    <Router>
      <main>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/reports/:scale" component={Report} />
      </main>
      <Footer />
    </Router>
  )
}

export default App
