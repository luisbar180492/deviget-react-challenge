import React from 'react'
import { useCurrentRoute } from 'react-navi'

const Helmet = () => {
  const { data } = useCurrentRoute()

  return (
    <div>
      {data.name}
    </div>
  )
}

export default Helmet
