import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import '../styles/components/_TopBar.scss';

const TopBar = () => {
  return (
    <div className='TopBar'>
      <div className='search_wrapper'>
        <FontAwesomeIcon className='search-icon' icon={faSearch} />
        <input
          className='search-bar'
          type='text'
          placeholder='검색어를 입력해주세요'
        />
      </div>
    </div>
  );
};

export default TopBar;
