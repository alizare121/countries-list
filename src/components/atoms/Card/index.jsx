import { useContext } from 'react';
import { ThemeContext } from '@components';
import './style.css';


export const InfoItem = ({ title, value, tag }) => {
  const [_, { theme }] = useContext(ThemeContext);
  const isArrayValue = Array.isArray(value);
  const itemStyle = {
    backgroundColor: theme.elementBg,
    color: theme.color,
    padding: '4px 10px',
    margin: '0 0 0 5px',
    borderRadius: '5px',

  };
  return (
    <div className='card-item-wrapper'>
      <span className='item-title'>{title} : </span>
      {!isArrayValue && <span className='item-value'>{value || ''}</span>}
      {isArrayValue && (
        <div className='list-item-wrapper'>
          {value.map((item, index) => {
            const isLastItem = index === value.length - 1;
            const separator = !isLastItem && !tag && ',';
            return (
              <span className={`item-value ${tag && 'item-tag-value'}`} style={tag && itemStyle}>
                {tag ? item : item.name || ''} {separator}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};


export const Card = ({
  data: { flag, population, region, capital, name },
  onClick,
}) => {
  return (
    <div className='card-wrapper' onClick={onClick}>
      <img src={flag} alt={name} className='flag' loading='lazy' />
      <div className='info-item-wrapper'>
        <span className='name'>{name}</span>
        <InfoItem title='Population' value={population} />
        <InfoItem title='Region' value={region} />
        <InfoItem title='Capital' value={capital} />
      </div>
    </div>
  );
};
