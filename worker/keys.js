module.exports = {
  redisHost: process.env.REDIS_HOST,
  redisPort: process.env.REDIS_PORT,
};

// In Local/Dev Deployemnt,
// worker Deployemnt can access redis service
// using redis-cluster-ip
// using host as http://redis-cluster-ip-service
