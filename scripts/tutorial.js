export function getVideoTag(url) {
  // eslint-disable-next-line max-len
  return `<div style="text-align:center"><video style="margin: auto" width="320" height="410" autoplay loop muted><source src="${url}.webm" type="video/webm" /><source src="${url}.mp4" type="video/mp4" /></video></div>`;
}

export function formatTuto(str) {
  return str.replace(/\n/g, "<br />");
}
