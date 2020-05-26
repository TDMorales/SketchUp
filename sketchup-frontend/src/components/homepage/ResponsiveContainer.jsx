import PropTypes from 'prop-types'
import React from 'react'
import { DesktopContainer } from './DesktopContainer'

export const ResponsiveContainer = ({ children }) => {
  return(
    // console.log(children.history),
  <div>
    <DesktopContainer>{children}</DesktopContainer>
  </div>
)
ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}
}
