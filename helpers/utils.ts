export function debounce (callback: Function, wait: number): Function {
  let timeout: NodeJS.Timeout | null
  return (...args: any) => {
    // @ts-ignore
    const context = this
    if (timeout != null) clearTimeout(timeout)
    timeout = setTimeout(() => {
      timeout = null
      callback.apply(context, args)
    }, wait)
  }
}

export function openInNewTab (url: string) {
  if (typeof window !== 'undefined' && url?.length > 0) {
    try {
      // @ts-expect-error
      window.open(url, '_blank').focus()
    } catch (error) {
      console.log(error)
    }
  }
}

export function downloadURI (uri: string, name?: string) {
  const link = document.createElement('a')
  if (typeof name === 'string') {
    link.download = name
  }
  openInNewTab(uri)
}
