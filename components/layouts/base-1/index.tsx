import React from 'react'
import { arrayOf, node } from 'prop-types'
import MetaTags from './components/meta-tags'
import Header from './components/header'

interface LayoutProps {
  children: React.ReactNode
}

function Layout ({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <MetaTags/>
      <Header></Header>
      <div id="main">
        {children}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: arrayOf(node).isRequired
}

export default Layout
