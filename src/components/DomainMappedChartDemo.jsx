import '../App.scss'
import { useMemo } from 'react'

const uses = [
    {name: 'Transport', color: '#00BD79', domains: [{name: 'Desert', score: 4}, {name: 'Urban', score: 5}]},
    {name: 'Ballistic missile operations', color: '#005EE5', domains: [{name: 'Desert', score: 7}, {name: 'Urban', score: 6}, {name: 'Space', score: 4}]}
]

const DomainMappedChartDemo = () => {
    const mappedDomains = useMemo(() => {
        const domainMap = {};

        uses.forEach(use => {
            use.domains.forEach(domain => {
                if (!domainMap[domain.name]) {
                    domainMap[domain.name] = [];
                }
                domainMap[domain.name].push({ name: use.name, color: use.color, score: domain.score });
            });
        });

        return Object.entries(domainMap).map(([domain, uses]) => ({ domain, uses }));
    }, [uses]);

    console.log(mappedDomains);

    return (
        <div className="chart-container">
            <div className="title">Uses TRL performance across domains</div>
            <div className="separator"/>
            {mappedDomains.map((domain) => {
                return (
                    <div className='domain-box'>
                        <div className="header">
                            <div className="title">{domain.domain}</div>
                        </div>
                        <div className="chart-wrap">
                            {domain.uses.map((use)=> {
                                return (
                                    <div className='use-row'>
                                        <div className='score-bar' style={{gridColumn: `1 / ${use.score + 1}`, background: `${use.color}aa`, backgroundImage: `linear-gradient(-90deg, #ffffff00 0%, #ffffffaa 100%)`}}/>
                                        <div className='score-number' style={{color: use.color}}>{use.score}</div>
                                    </div>
                                )
                            })}
                            <div className="chart-backdrop">
                                {Array.from({ length: 10 }).map((item, index) => (
                                    <div key={index} className='bg-col'/>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default DomainMappedChartDemo