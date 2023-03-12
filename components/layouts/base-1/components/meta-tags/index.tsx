import React, { type ReactElement } from 'react'
import Head from 'next/head'
import { shape } from 'prop-types'
import { NextSeo } from 'next-seo'

interface MetaTagsProps {
  metaTagContent?: {
    title?: string
    description?: string
    image?: string
    canonical?: string
  }
}

function Module ({ metaTagContent }: MetaTagsProps = {}): ReactElement<MetaTagsProps> {
  return (
    <>
      <Head>
        <title></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
        <meta name="format-detection" content="telephone=no"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <link rel="icon" href=""/>
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito" /> */}
      </Head>
      <NextSeo
        title={metaTagContent?.title ?? ''}
        description={metaTagContent?.description ?? ''}
        canonical={metaTagContent?.canonical ?? ''}
        openGraph={{
          title: metaTagContent?.title ?? '',
          description: metaTagContent?.description,
          images: [
            {
              url: metaTagContent?.image ?? '',
              alt: metaTagContent?.title
            }
          ]
        }}
        twitter={{
          cardType: 'summary_large_image'
        }}
      />
    </>
  )
}

Module.displayName = 'MetaTags'

Module.propTypes = {
  metaTagContent: shape({})
}

export default Module
