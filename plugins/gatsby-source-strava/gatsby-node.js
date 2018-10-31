const axios = require('axios')

const getAccessToken = config => {
  return axios
    .post(`https://www.strava.com/oauth/token`, {
      grant_type: 'refresh_token',
      refresh_token: config.refresh_token,
      client_id: config.id,
      client_secret: config.secret,
    })
    .catch(err => {
      throw err
    })
}

const processWorkout = (workout, createNodeId, createContentDigest) => {
  const nodeId = createNodeId(`strava-${workout.id}`)
  const nodeContent = JSON.stringify(workout)

  return Object.assign({}, workout, {
    id: nodeId,
    parent: null,
    children: [],
    internal: {
      type: `StravaWorkout`,
      content: nodeContent,
      contentDigest: createContentDigest(workout),
    },
  })
}

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions
  const response = await getAccessToken(configOptions)

  const strava = require('strava')({
    access_token: response.data.access_token,
    client_id: configOptions.id,
    client_secret: configOptions.secret,
    redirect_uri: 'localhost',
  })

  return new Promise((resolve, reject) => {
    strava.athlete.activities.get({ paginate: true }, (err, res) => {
      if (err) reject(err)

      res.forEach(workout => {
        const nodeData = processWorkout(
          workout,
          createNodeId,
          createContentDigest
        )
        createNode(nodeData)
      })
      resolve()
    })
  })
}
