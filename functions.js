exports.cors = () => ({
  status: 200,
  response_headers: {
    'Access-Control-Allow-Origin': '*'
  },
  data: {}
})
exports.externalSource = () => ({
  status: 200,
  response_headers: {
    'Content-Type': 'application/json'
  },
  data: {
    results: [
      { id: 1, text: 'Item1' },
      { id: 2, text: 'Item2' }
    ]
  }
})
