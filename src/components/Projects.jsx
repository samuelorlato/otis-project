import { useState } from 'react';
import './Projects.css';

function Projects() {
  const [activeTab, setActiveTab] = useState('lista');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'BR001',
      name: 'Torre Empresarial Faria Lima',
      location: 'São Paulo, Brasil',
      type: 'comercial',
      client: 'Construtora Cyrela',
      progress: 65,
      deadline: '29/04/2024',
      budget: '$292,500',
      totalBudget: '$450,000',
      supervisor: 'Carlos Silva',
      phase: 'Fabricação',
      status: 'manufacturing',
      alert: 'Atraso na entrega de componentes críticos',
      team: {
        montadores: { allocated: 3, needed: 5, status: 'limited' },
        ajustadores: { allocated: 1, needed: 2, status: 'sufficient' },
        supervisores: { allocated: 1, needed: 1, status: 'sufficient' }
      }
    }
  ];

  const summaryStats = [
    { label: 'Total', value: 5, color: '#0f172a' },
    { label: 'Atrasados', value: 1, color: '#f59e0b' },
    { label: 'Em Produção', value: 2, color: '#2563eb' },
    { label: 'Concluídos', value: 1, color: '#22c55e' },
    { label: 'Taxa Conclusão', value: '20%', color: '#64748b' }
  ];

  return (
    <div className="page-container">
      <div className="page-header d-flex justify-content-between align-items-start">
        <div>
          <h1 className="page-title">Gestão de Projetos</h1>
          <p className="page-subtitle">Acompanhamento detalhado de cada projeto de instalação</p>
        </div>
        <button className="btn btn-outline-secondary btn-sm">
          <i className="bi bi-download me-2"></i>
          Exportar
        </button>
      </div>

      <div className="row g-3 mb-4">
        {summaryStats.map((stat, index) => (
          <div key={index} className="col">
            <div className="summary-stat-card">
              <div className="summary-value" style={{ color: stat.color }}>{stat.value}</div>
              <div className="summary-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-card">
        <div className="projects-tabs">
          <button
            className={`projects-tab ${activeTab === 'lista' ? 'active' : ''}`}
            onClick={() => setActiveTab('lista')}
          >
            Lista de Projetos
          </button>
          <button
            className={`projects-tab ${activeTab === 'cronograma' ? 'active' : ''}`}
            onClick={() => setActiveTab('cronograma')}
          >
            Cronograma
          </button>
        </div>

        <div className="projects-content">
          {activeTab === 'lista' && (
            <>
              <div className="search-filter-bar">
                <div className="input-group flex-grow-1">
                  <span className="input-group-text bg-white">
                    <i className="bi bi-search"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Buscar por projeto, cidade ou cliente..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="input-group" style={{ width: 'auto' }}>
                  <span className="input-group-text bg-white">
                    <i className="bi bi-funnel"></i>
                  </span>
                  <select className="form-select">
                    <option>Todos (5)</option>
                    <option>Em andamento</option>
                    <option>Atrasados</option>
                    <option>Concluídos</option>
                  </select>
                </div>
              </div>

              <div className="projects-list">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="project-item"
                    onClick={() => setSelectedProject(selectedProject?.id === project.id ? null : project)}
                  >
                    <div className="project-main">
                      <div className="project-header-row">
                        <div className="project-title-section">
                          <h3 className="project-name">{project.name}</h3>
                          <div className="project-meta">
                            <span>
                              <i className="bi bi-geo-alt"></i> {project.location}
                            </span>
                            <span>
                              <i className="bi bi-building"></i> {project.type}
                            </span>
                          </div>
                          <div className="project-client">Cliente: {project.client}</div>
                        </div>
                        <div className="project-badge-section">
                          <span className={`phase-badge ${project.status}`}>{project.phase}</span>
                          <span className="project-id">ID: {project.id}</span>
                        </div>
                      </div>

                      <div className="project-progress-section">
                        <div className="progress-header">
                          <span className="progress-label">Progresso Geral</span>
                          <span className="progress-percentage">{project.progress}%</span>
                        </div>
                        <div className="progress" style={{ height: '10px' }}>
                          <div
                            className="progress-bar"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="project-details-grid">
                        <div className="detail-item">
                          <i className="bi bi-calendar-event"></i>
                          <div>
                            <div className="detail-label">Prazo</div>
                            <div className="detail-value">{project.deadline}</div>
                          </div>
                        </div>
                        <div className="detail-item">
                          <i className="bi bi-currency-dollar"></i>
                          <div>
                            <div className="detail-label">Orçamento</div>
                            <div className="detail-value">{project.budget} / {project.totalBudget}</div>
                          </div>
                        </div>
                        <div className="detail-item">
                          <i className="bi bi-person"></i>
                          <div>
                            <div className="detail-label">Supervisor</div>
                            <div className="detail-value">{project.supervisor}</div>
                          </div>
                        </div>
                        <div className="detail-item">
                          <i className="bi bi-clock"></i>
                          <div>
                            <div className="detail-label">Fase</div>
                            <div className="detail-value">{project.phase}</div>
                          </div>
                        </div>
                      </div>

                      {project.alert && (
                        <div className="project-alert">
                          <i className="bi bi-exclamation-triangle"></i>
                          <span>{project.alert}</span>
                        </div>
                      )}

                      {selectedProject?.id === project.id && (
                        <div className="project-expanded">
                          <div className="expanded-header">
                            <i className="bi bi-people"></i>
                            <h4>Controle de Equipe - {project.name}</h4>
                          </div>
                          <div className="expanded-subtitle">
                            Comparação: Disponível vs Necessário
                          </div>

                          <div className="team-cards">
                            {Object.entries(project.team).map(([role, data]) => {
                              const roleNames = {
                                montadores: 'Montadores',
                                ajustadores: 'Ajustadores',
                                supervisores: 'Supervisores'
                              };
                              const roleIcons = {
                                montadores: 'bi-tools',
                                ajustadores: 'bi-gear',
                                supervisores: 'bi-clipboard-check'
                              };
                              const roleDescriptions = {
                                montadores: 'Responsáveis pela montagem do elevador',
                                ajustadores: 'Técnicos especializados em ajustes finos',
                                supervisores: 'Supervisão técnica e controle de qualidade'
                              };

                              return (
                                <div key={role} className="team-card">
                                  <div className="team-card-header">
                                    <i className={`bi ${roleIcons[role]}`}></i>
                                    <div>
                                      <h5>{roleNames[role]}</h5>
                                      <p>{roleDescriptions[role]}</p>
                                    </div>
                                  </div>
                                  <div className="team-ratio">
                                    <span>Disponível/Necessário</span>
                                    <span className="ratio-value">{data.allocated}/{data.needed}</span>
                                  </div>
                                  <div className="progress mb-2" style={{ height: '8px' }}>
                                    <div
                                      className={`progress-bar ${
                                        data.status === 'limited' ? 'bg-warning' : 'bg-success'
                                      }`}
                                      style={{ width: `${(data.allocated / data.needed) * 100}%` }}
                                    ></div>
                                  </div>
                                  <div className="team-status">
                                    <span>Alocados: {data.allocated}</span>
                                    <span className={`status-badge ${data.status}`}>
                                      {data.status === 'limited' ? 'Limitado' : 'Suficiente'}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          <div className="analysis-section">
                            <div className="analysis-header">
                              <i className="bi bi-graph-up-arrow"></i>
                              <span>Análise Detalhada</span>
                            </div>
                            <div className="analysis-items">
                              <div className="analysis-item deficit">
                                <i className="bi bi-tools"></i>
                                <div>
                                  <strong>Montadores</strong>
                                  <span>3 de 4 alocados</span>
                                </div>
                                <div className="analysis-indicator">
                                  <i className="bi bi-dash-circle"></i>
                                  <span>-1</span>
                                </div>
                                <span className="analysis-percent">80%</span>
                              </div>
                              <div className="analysis-item ok">
                                <i className="bi bi-gear"></i>
                                <div>
                                  <strong>Ajustadores</strong>
                                  <span>1 de 2 alocados</span>
                                </div>
                                <div className="analysis-indicator ok-indicator">
                                  <i className="bi bi-check-circle"></i>
                                  <span>OK</span>
                                </div>
                                <span className="analysis-percent">100%</span>
                              </div>
                              <div className="analysis-item ok">
                                <i className="bi bi-clipboard-check"></i>
                                <div>
                                  <strong>Supervisores</strong>
                                  <span>1 de 1 alocados</span>
                                </div>
                                <div className="analysis-indicator ok-indicator">
                                  <i className="bi bi-check-circle"></i>
                                  <span>OK</span>
                                </div>
                                <span className="analysis-percent">100%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'cronograma' && (
            <div className="cronograma-view">
              <div className="text-center py-5 text-secondary">
                <i className="bi bi-calendar3 display-4 mb-3"></i>
                <p>Vista de cronograma em desenvolvimento</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;
