const axios = require('axios')

const processBeer = (checkin, createNodeId, createContentDigest) => {
  const nodeId = createNodeId(`untappd-${checkin.beer.bid}`)
  const nodeContent = JSON.stringify(checkin)

  return Object.assign({}, checkin, {
    id: nodeId,
    parent: null,
    children: [],
    internal: {
      type: `UntappdCheckin`,
      content: nodeContent,
      contentDigest: createContentDigest(checkin),
    },
  })
}

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions
  const { id, secret } = configOptions
  delete configOptions.plugins

  const checkins = await axios
    .get(`https://api.untappd.com/v4/user/beers/rhewitt`, {
      params: {
        client_id: id,
        client_secret: secret,
        limit: 50,
      },
    })
    .then(res => res.data.response.beers.items)
    .catch(console.log)

  // Todo: Should be able to pull ALL beers, not just most recent 25
  // Todo: probably don't need to use the .then() to return checkins if I need
  // to check the 'count' property on the server response. If I have 85 beers
  // on my profile, and that's greater than the number of beers returned per
  // server call, I'll have to do another API call with an offset

  checkins.forEach(checkin => {
    const nodeData = processBeer(checkin, createNodeId, createContentDigest)
    createNode(nodeData)
  })
}
