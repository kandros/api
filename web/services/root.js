module.exports = async function(fastify, opts) {
  fastify.get('/', async (request, reply) => {
    return { root: true }
  })
}
