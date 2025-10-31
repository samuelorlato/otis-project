import './Sidebar.css';

function Sidebar({ currentView, onViewChange }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'bi-bar-chart' },
    { id: 'map', label: 'Mapa Regional', icon: 'bi-globe' },
    { id: 'projects', label: 'Projetos', icon: 'bi-file-text', badge: 4 },
    { id: 'feedback', label: 'Feedback', icon: 'bi-people', badge: 2, badgeColor: 'danger' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <i className="bi bi-building"></i>
          <span>OTIS Tracker</span>
        </div>
        <button className="btn-close-sidebar">
          <i className="bi bi-x-lg"></i>
        </button>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${currentView === item.id ? 'active' : ''}`}
            onClick={() => onViewChange(item.id)}
          >
            <i className={`bi ${item.icon}`}></i>
            <span>{item.label}</span>
            {item.badge && (
              <span className={`badge bg-${item.badgeColor || 'secondary'} rounded-pill`}>
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="status-section">
          <div className="status-title">Status Geral</div>
          <div className="status-item">
            <span>Projetos Ativos</span>
            <span className="status-value">127</span>
          </div>
          <div className="status-item">
            <span>Alertas</span>
            <span className="status-value text-warning">
              <i className="bi bi-exclamation-circle"></i> 3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
