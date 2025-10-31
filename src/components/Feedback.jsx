import './Feedback.css';

function Feedback() {
  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Feedback</h1>
          <p className="page-subtitle">Central de feedback e comunicação da equipe</p>
        </div>
      </div>

      <div className="feedback-content">
        <div className="text-center py-5">
          <i className="bi bi-people display-1 text-secondary mb-4"></i>
          <h3 className="mb-3">Área de Feedback</h3>
          <p className="text-secondary">
            Esta seção permite gerenciar feedback de clientes e equipes.
          </p>
          <span className="badge bg-danger rounded-pill mt-3">2 novos feedbacks</span>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
