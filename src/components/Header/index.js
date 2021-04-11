import React from 'react';
import style from './styles.scss'

const Header = () => {
  return (
    <div className={style.headerSection}>Header Section</div>
  )
}

export default React.memo(Header);
