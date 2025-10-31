import './Dashboard.css';

function Dashboard() {
  const stats = [
    {
      title: 'Projetos no Prazo',
      value: '87%',
      change: '+5%',
      subtitle: 'vs período anterior',
      description: 'Taxa de cumprimento de prazos',
      icon: 'bi-clock-history',
      iconBg: '#dbeafe'
    },
    {
      title: 'Margem de Lucro',
      value: '23.4%',
      change: '+2.1%',
      subtitle: 'vs período anterior',
      description: 'Margem média dos projetos',
      icon: 'bi-currency-dollar',
      iconBg: '#dbeafe'
    },
    {
      title: 'Índice de Qualidade',
      value: '94.2%',
      change: '+1.8%',
      subtitle: 'vs período anterior',
      description: 'Satisfação do cliente',
      icon: 'bi-check-circle',
      iconBg: '#dbeafe'
    },
    {
      title: 'Instalações Ativas',
      value: '127',
      change: '+12',
      subtitle: 'vs período anterior',
      description: 'Projetos em andamento',
      icon: 'bi-graph-up-arrow',
      iconBg: '#dbeafe'
    }
  ];

  const statusData = [
    { label: 'Em Andamento', value: 156, percentage: 54.7, color: '#3b82f6' },
    { label: 'Concluído', value: 98, percentage: 34.4, color: '#22c55e' },
    { label: 'Atrasado', value: 23, percentage: 8.1, color: '#f59e0b' },
    { label: 'Crítico', value: 8, percentage: 2.8, color: '#ef4444' }
  ];

  const countryData = [
    { name: 'Brasil', value: 127 },
    { name: 'México', value: 89 },
    { name: 'Argentina', value: 54 },
    { name: 'Chile', value: 33 },
    { name: 'Colômbia', value: 28 },
    { name: 'Peru', value: 24 }
  ];

  const maxValue = Math.max(...countryData.map(d => d.value));

  return (
    <div className="page-container">
      <div className="page-header d-flex justify-content-between align-items-start">
        <div>
          <h1 className="page-title">Dashboard de Supervisão</h1>
          <p className="page-subtitle">Acompanhamento em tempo real das instalações OTIS na América Latina</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary btn-sm">
            <i className="bi bi-funnel me-2"></i>
            Últimos 30 dias
          </button>
          <button className="btn btn-outline-secondary btn-sm">
            <i className="bi bi-arrow-clockwise me-2"></i>
            Atualizar
          </button>
          <button className="btn btn-outline-secondary btn-sm">
            <i className="bi bi-download me-2"></i>
            Exportar
          </button>
        </div>
      </div>

      <div className="row g-3 mb-4">
        {stats.map((stat, index) => (
          <div key={index} className="col-12 col-md-6 col-xl-3">
            <div className="stat-card">
              <div className="stat-header">
                <div>
                  <div className="stat-title">{stat.title}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-change positive">
                    <i className="bi bi-arrow-up"></i>
                    {stat.change} {stat.subtitle}
                  </div>
                  <div className="stat-description">{stat.description}</div>
                </div>
                <div className="stat-icon" style={{ backgroundColor: stat.iconBg }}>
                  <i className={`bi ${stat.icon}`}></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-3 mb-4">
        <div className="col-12 col-lg-6">
          <div className="chart-card">
            <div className="chart-header">
              <i className="bi bi-triangle text-primary me-2"></i>
              <h3>Distribuição por Status</h3>
            </div>
            <div className="chart-body">
              <div className="donut-chart">
                <svg viewBox="0 0 200 200" className="donut-svg">
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#3b82f6" strokeWidth="40" strokeDasharray="301 424" strokeDashoffset="0" />
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#22c55e" strokeWidth="40" strokeDasharray="146 424" strokeDashoffset="-301" />
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#f59e0b" strokeWidth="40" strokeDasharray="34 424" strokeDashoffset="-447" />
                  <circle cx="100" cy="100" r="70" fill="none" stroke="#ef4444" strokeWidth="40" strokeDasharray="12 424" strokeDashoffset="-481" />
                </svg>
              </div>
              <div className="chart-legend">
                {statusData.map((item, index) => (
                  <div key={index} className="legend-item">
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <span className="legend-dot" style={{ backgroundColor: item.color }}></span>
                      <span className="legend-label">{item.label}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span className="legend-value">{item.value}</span>
                      <span className="legend-percentage">{item.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="chart-card">
            <div className="chart-header">
              <i className="bi bi-bar-chart text-primary me-2"></i>
              <h3>Performance por País</h3>
            </div>
            <div className="chart-body">
              <div className="bar-chart">
                {countryData.map((country, index) => (
                  <div key={index} className="bar-item">
                    <div className="bar-label">{country.name}</div>
                    <div className="bar-container">
                      <div
                        className="bar-fill"
                        style={{ width: `${(country.value / maxValue) * 100}%` }}
                      ></div>
                    </div>
                    <div className="bar-value">{country.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
