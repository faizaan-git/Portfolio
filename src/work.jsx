import './work.css';

function Work() {
  const works = [
    
    {
      id: 6,
      title: 'Agri-ML',
      description: 'Agriculture-related ML project with data processing, prediction, and advisory features for farming applications.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=250&fit=crop&crop=center',
      github: 'https://github.com/SanthoshMB08/Agri-'
    },
  ];

  return (
    <div className="work-section">
      <div className="work-content">
        <div className="work-header">
          <h1 className="work-title">My Works</h1>
          <p className="work-description">I have worked on projects across multiple technologies and domains, gaining broad development <br/>experience while specializing in backend engineering. My projects focus on building scalable APIs,<br/> backend systems, and data-driven solutions using modern backend technologies and databases.<br/>
           <a href='https://github.com/Faizaan-git' className="work-link"> Check git hub for project→</a></p>
        </div>
        <div className="works-grid">
          {works.map(work => (
            <div key={work.id} className="work-item">
              <img src={work.image} alt={work.title} />
              <h3>{work.title}</h3>
              <p>{work.description}</p>
              <a href={work.github} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
