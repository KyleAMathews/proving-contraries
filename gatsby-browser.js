exports.onRouteUpdate = (location) => {
  if (typeof clicky !== 'undefined') {
    clicky.log( location.pathname, window.document.title, 'pageview' ) // eslint-disable-line
  }
}
