import PropTypes from 'prop-types'
import React from 'react'
import { DesktopContainer } from './DesktopContainer'

export const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
  </div>
)
ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}