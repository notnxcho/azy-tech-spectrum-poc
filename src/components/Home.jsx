import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', minHeight: '100vh'}}>
      <h1>Nacho's playground</h1>
      <Link to="/chart">Chart Demo</Link>
      <Link to="/domainchart">Domain Chart Demo</Link>
      <Link to="/assessment">Assessment Demo</Link>
    </div>
  )
}

export default Home
