import domtoimage from 'dom-to-image';

export const downloadImage = (node, type, bgcolor = '#FFFFFF') => {
  // if (type === 'jpeg') {
  //   domtoimage
  //     .toJpeg(node, { bgcolor })
  //     .then((data: string) => {
  //       downloadLink(data, type);
  //     })
  //     .catch(function (error: string) {
  //       console.error('oops, something went wrong!', error);
  //     });
  // }

  domtoimage
    .toPng(node)
    .then((data) => {
      downloadLink(data, 'png');
    })
    .catch((error) => console.error('oops, something went wrong!', error));
};

const downloadLink = (data, type) => {
  const link = document.createElement('a');
  link.download = filename(type);
  link.href = data;
  link.click();
};

const filename = (type) => {
  const date = new Date();
  return `logo-${date.getTime()}.${type}`;
};
