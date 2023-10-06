import PropTypes from 'prop-types' // this is only required if setting prop types
import Button from './Button.js'
import { useLocation } from 'react-router-dom'

const Header = ({title, onAdd, showAdd}) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color={showAdd ? 'red' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
          onClick={onAdd}
        />
      )}
    </header>
  )
}

// setting default values for props
Header.defaultProps = {
  title: 'React Task List'
}

// setting prop types which is optional
Header.propTypes = {
  title: PropTypes.string.isRequired // this will throw an error if non string is provided as title, .isRequired if you want to make string  proptype required
}

export default Header