import PropTypes from "prop-types";
import css from './Statistics.module.css'


export const Statistics = ({stats, title}) => {
    return(
<section class={css.statistics}>
  {title && <h2 class={css.title}>{title}</h2>}
  <ul class={css['stat-list']}>
  {stats.map(stat => {
          return (
    <li class={css.item} key={stat.id}>
      <span class={css.label}>{stat.label}</span>
      <span class={css.percentage}>{stat.percentage}</span>
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