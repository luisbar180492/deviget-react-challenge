import React from 'react'
import { FormattedMessage } from 'react-intl'
import propTypes from 'prop-types'
import unified from 'unified'
import markdown2remark from 'remark-parse'
import remark2react from 'remark-react'

const Text = ({ as, text, className }) => {
  const Component = as
  
  if (as === 'md')
    return (
      <div
        className={className}
      >
        <FormattedMessage
          id={text}
          text={text}
        >  
          {
            ([text]) => unified()
            .use(markdown2remark)
            .use(remark2react)
            .processSync(text).result
          }
        </FormattedMessage>
      </div>
    )

  return (
    <Component
      className={className}
    >
      <FormattedMessage
        id={text}
        defaultMessage={text}
      />
    </Component>
  )
}

Text.propTypes = {
  as: propTypes.oneOf(['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'md']),
  text: propTypes.string.isRequired,
  className: propTypes.string,
}

Text.defaultProps = {
  as: 'span'
}

export default Text