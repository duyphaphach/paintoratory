import React, { type ReactElement } from 'react'

interface HeaderProps {
}

function Module ({}: HeaderProps): ReactElement<HeaderProps> {
  return (
    <>Header</>
  )
}

Module.displayName = 'Header'

Module.propTypes = {}

export default Module
