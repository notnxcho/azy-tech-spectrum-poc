import './App.scss';


const techs = [
  {name: 'Armored Vehicle', minScore: 4, maxScore: 7},
  {name: 'Armored Attack Drone', minScore: 3, maxScore: 5},
  {name: 'Infrared telescopic intelligence deployable satellite', minScore: 2, maxScore: 2},
  {name: 'Infrared telescopic intelligence deployable satellite', minScore: 5, maxScore: 5},
  {name: 'Armored Vehicle', minScore: 4, maxScore: 7},
]


function App() {
  return (
    <div className="App">
      <div className='widget-container'>
        <div className='header'>
          <h3>Tech TRL spectrum</h3>
        </div>
        <div className="chart-wrapper">
          <div className='tech-scrollable-container'>
            {techs.map((tech, index) => {
              return (
                <div className='tech-row-wrap'>
                  <div className='spectrum-region' style={{gridColumn: `${tech.minScore} / ${tech.maxScore + 1}`, justifyContent: `${tech.minScore >= 5 ? 'flex-end' : 'flex-start'}`}}>
                    <div 
                      className="text-wrap" 
                      // style={{alignItems: `${tech.minScore >= 5 ? 'flex-end' : 'flex-start'}`}}  
                    >
                      <div className="sys-type">Hybrid</div>
                      <div className='tech-name'>{tech.name}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="chart-background">
            {Array.from({ length: 9 }).map(( item, index) => (
              <div key={index} className='bg-col'>
                <div>{index + 1}</div>
                <div>{index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
