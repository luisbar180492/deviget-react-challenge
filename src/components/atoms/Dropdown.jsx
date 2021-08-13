import React from 'react'
import propTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'

const Dropdown = ({ options }) => {

  const renderOptions = () => {
    return options.map(({key, value}) => {
      return (
        <FormattedMessage
          key={key}
          id={value}
          defaultMessage={value}
        >
          {
            (value) => <option value={key}>{value}</option>
          }
        </FormattedMessage>
      )
    })
  }

  return (
    <select>
      {renderOptions()}
    </select>
  )
}

Dropdown.propTypes = {
  options: propTypes.arrayOf(
    propTypes.shape({
      key: propTypes.string.isRequired,
      value: propTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Dropdown