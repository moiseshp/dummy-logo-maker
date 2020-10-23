import domtoimage from 'dom-to-image'

export const domToImage = (node: any, type: string, bgcolor = '#FFFFFF') => {
  if (type === 'jpeg') {
    domtoimage.toJpeg(node, { bgcolor })
      .then((data: string) => {
        downloadLink(data, type)
      })
      .catch(function (error: string) {
        console.error('oops, something went wrong!', error);
      })
  }

  if (type === 'png') {
    domtoimage.toPng(node)
      .then((data: string) => {
        downloadLink(data, type)
      })
      .catch(function (error: string) {
        console.error('oops, something went wrong!', error);
      })
  }
}

const downloadLink = (data: string, type: string): void => {
  const link = document.createElement('a')
  link.download = filename(type)
  link.href = data
  link.click()
}

const filename = (type: string) => {
  const date = new Date()
  return `logo-${date.getTime()}.${type}`
}