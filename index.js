const abrade = require('abrade')

module.exports = abrade.plugin('thepiratebay', {
  url: 'https://thepiratebay.org/search/$1/0/99/0',
  entitySelector: '#searchResult > tbody > tr',
  properties: {
    name: node => node.find('.detName').text().trim(),
    magnet: node => node.find('*[href^="magnet:"]').attr('href'),
  }
})
