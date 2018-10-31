const axios = require('axios')

let pages = 0

const processBeer = (checkin, createNodeId, createContentDigest) => {
  const nodeId = createNodeId(`untappd-${checkin.recent_created_at}`)
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

const getAllBeers = async (config, data = [], reject) => {
  const checkins = await getBeers(config, reject)
  data = data.concat(checkins)

  if (data.length % 50 === 0) {
    pages = pages + 1
    config.params.offset = pages * 50
    return getAllBeers(config, data)
  } else {
    return new Promise(resolve => {
      resolve(data)
    })
  }
}

const getBeers = (config, reject) => {
  return axios
    .get(`https://api.untappd.com/v4/user/beers/rhewitt`, config)
    .then(res => res.data.response.beers.items)
    .catch(reject)
}

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions
  const { id, secret } = configOptions
  delete configOptions.plugins

  const untappdConfig = {
    params: {
      client_id: id,
      client_secret: secret,
      limit: 50,
    },
  }

  return new Promise(async (resolve, reject) => {
    const checkins = await getAllBeers(untappdConfig, [], reject)

    checkins.forEach(checkin => {
      const nodeData = processBeer(checkin, createNodeId, createContentDigest)
      createNode(nodeData)
    })
    resolve()
  })
}
