import PropTypes from 'prop-types';
import { AiOutlineSearch } from 'react-icons/ai';
import css from './Searchbar.module.css';

export const Searchbar = ({ handleQuery }) => {
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={handleQuery}>
        <button type="submit">
          <AiOutlineSearch className={css['SearchForm-button']} />
          <span className={css['SearchForm-button-label']}>Search</span>
        </button>

        <input
          className={css['SearchForm-input']}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder=" Search images and photos"
        />
      </form>
    </header>
  );
};

PropTypes.Searchbar = {
    handleQuery : PropTypes.func.isRequired,
}

