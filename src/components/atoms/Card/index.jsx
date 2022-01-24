import './style.css';
export const Card = ({
  data: { flag, population, region, capital, name },
  onClick,
}) => {
  const InfoItem = ({ title, value }) => {
    return (
      <div className='card-item-wrapper'>
        <span className='item-title'>{title} : </span>
        <span className='item-value'>{value}</span>
      </div>
    );
  };
  return (
    <div className='card-wrapper' onClick={onClick}>
      <img src={flag} alt={name} className='flag' />
      <div className='info-item-wrapper'>
        <span className='name'>{name}</span>
        <InfoItem title='Population' value={population} />
        <InfoItem title='Region' value={region} />
        <InfoItem title='Capital' value={capital} />
      </div>
    </div>
  );
};
