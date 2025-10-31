import { useState } from 'react';
import './MapaRegional.css';

function MapaRegional() {
  const [selectedCountry, setSelectedCountry] = useState('Brasil');
  const [activeTab, setActiveTab] = useState('geral');
  const [searchCity, setSearchCity] = useState('');

  const countries = [
    { name: 'Brasil', projects: 127 },
    { name: 'México', projects: 89 },
    { name: 'Argentina', projects: 54 },
    { name: 'Chile', projects: 33 },
    { name: 'Colômbia', projects: 28 },
    { name: 'Peru', projects: 24 }
  ];

  const cities = [
    {
      name: 'São Paulo',
      demand: 'Alta Demanda',
      demandClass: 'high',
      projects: 45,
      completion: 85,
      revenue: '$2.1M',
      status: 'green'
    },
    {
      name: 'Rio de Janeiro',
      demand: 'Demanda Moderada',
      demandClass: 'moderate',
      projects: 28,
      completion: 78,
      revenue: '$1.4M',
      status: 'orange'
    },
    {
      name: 'Belo Horizonte',
      demand: 'Demanda Moderada',
      demandClass: 'moderate',
      projects: 18,
      completion: 82,
      revenue: '$0.9M',
      status: 'orange'
    },
    {
      name: 'Brasília',
      demand: 'Baixa Demanda',
      demandClass: 'low',
      projects: 15,
      completion: 90,
      revenue: '$0.7M',
      status: 'green'
    }
  ];

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchCity.toLowerCase())
  );

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Mapa Regional</h1>
          <p className="page-subtitle">Visão geográfica das operações OTIS na América Latina</p>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-12 col-lg-4">
          <div className="filter-card">
            <div className="filter-header">
              <i className="bi bi-funnel text-primary"></i>
              <h3>Filtrar por País</h3>
            </div>
            <div className="country-list">
              {countries.map((country) => (
                <button
                  key={country.name}
                  className={`country-item ${selectedCountry === country.name ? 'active' : ''}`}
                  onClick={() => setSelectedCountry(country.name)}
                >
                  <span className="country-name">{country.name}</span>
                  <span className="country-badge">{country.projects}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-8">
          <div className="map-card">
            <div className="map-tabs">
              <button
                className={`map-tab ${activeTab === 'geral' ? 'active' : ''}`}
                onClick={() => setActiveTab('geral')}
              >
                Visão Geral
              </button>
              <button
                className={`map-tab ${activeTab === 'cidades' ? 'active' : ''}`}
                onClick={() => setActiveTab('cidades')}
              >
                Cidades
              </button>
            </div>

            {activeTab === 'geral' && (
              <div className="tab-content-area">
                <div className="country-overview">
                  <div className="overview-header">
                    <i className="bi bi-globe2"></i>
                    <h2>{selectedCountry} - Visão Geral</h2>
                  </div>

                  <div className="row g-3 mb-4">
                    <div className="col-6 col-md-3">
                      <div className="metric-box">
                        <i className="bi bi-file-text metric-icon"></i>
                        <div className="metric-value">127</div>
                        <div className="metric-label">Total de Projetos</div>
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="metric-box">
                        <i className="bi bi-clock metric-icon"></i>
                        <div className="metric-value">89</div>
                        <div className="metric-label">Em Andamento</div>
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="metric-box">
                        <i className="bi bi-graph-up metric-icon"></i>
                        <div className="metric-value">94.2%</div>
                        <div className="metric-label">Eficiência</div>
                      </div>
                    </div>
                    <div className="col-6 col-md-3">
                      <div className="metric-box">
                        <i className="bi bi-bullseye metric-icon"></i>
                        <div className="metric-value">$5.8M</div>
                        <div className="metric-label">Receita (YTD)</div>
                      </div>
                    </div>
                  </div>

                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <div className="progress-card">
                        <h4>Taxa de Conclusão</h4>
                        <div className="progress-info">
                          <span>Concluídos</span>
                          <span className="fw-bold">30%</span>
                        </div>
                        <div className="progress" style={{ height: '12px' }}>
                          <div className="progress-bar" style={{ width: '30%' }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="progress-card">
                        <h4>Crescimento Anual</h4>
                        <div className="progress-info">
                          <span>Crescimento</span>
                          <span className="fw-bold text-success">+12.5%</span>
                        </div>
                        <div className="progress" style={{ height: '12px' }}>
                          <div className="progress-bar bg-success" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'cidades' && (
              <div className="tab-content-area">
                <div className="cities-search mb-3">
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <i className="bi bi-search"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Buscar cidade..."
                      value={searchCity}
                      onChange={(e) => setSearchCity(e.target.value)}
                    />
                  </div>
                </div>

                <div className="cities-grid">
                  {filteredCities.map((city) => (
                    <div key={city.name} className={`city-card border-${city.demandClass}`}>
                      <div className="city-header">
                        <h3>{city.name}</h3>
                        <span className={`demand-badge ${city.demandClass}`}>
                          {city.demand}
                        </span>
                      </div>
                      <div className="city-stats">
                        <div className="city-stat">
                          <span className="stat-label">Projetos</span>
                          <span className="stat-value">{city.projects}</span>
                        </div>
                        <div className="city-stat">
                          <span className="stat-label">Conclusão</span>
                          <span className="stat-value">{city.completion}%</span>
                        </div>
                      </div>
                      <div className="city-footer">
                        <div className="city-stat">
                          <span className="stat-label">Receita</span>
                          <span className="stat-value">{city.revenue}</span>
                        </div>
                        <div className="city-stat">
                          <span className="stat-label">Status</span>
                          <span className={`status-dot ${city.status}`}></span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="footer-text mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-secondary small">
            OTIS LATAM Tracker<br />
            Desenvolvido para Challenge FIAP 2025
          </div>
          <div className="text-secondary small text-end">
            © 2025 OTIS Elevator Company. Sistema de Tracking Regional.
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapaRegional;
