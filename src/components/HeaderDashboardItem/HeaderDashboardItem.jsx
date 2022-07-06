import './HeaderDashboardItem.css';

const HeaderDashboardItem = ({ total, message, icon}) => {
  return (
    <section className="header-dashboard__item">
      <div className="header-dashboard__item-description">
        <h2>{total}</h2>
        <p>{message}</p>
      </div>
      <div className="header-dashboard__item-icon">
        {icon}
      </div>
    </section>
  )
};

export default HeaderDashboardItem;
