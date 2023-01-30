import PropTypes from "prop-types";
import css from './Statistics.module.css'


export const Statistics = ({stats, title}) => {
    return(
<section className={css.statistics}>
  {title && <h2 className={css.title}>{title}</h2>}
  <ul className={css['stat-list']}>
  {stats.map(stat => {
          return (
    <li className={css.item} key={stat.id}>
      <span className={css.label}>{stat.label}</span>
      <span className={css.percentage}>{stat.percentage}%</span>
    </li>
    );
})}
  </ul>
</section>)
}

Statistics.protoType = {
stats: PropTypes.shape({
    label: PropTypes.string,
percentage: PropTypes.number
}).isRequired,
title: PropTypes.string
}