const pg = require("pg")

const localConnection = "postgresql://postgres:RedBullFFX10@localhost/well-child-BE"
const testingConnection = "postgresql://postgres:RedBullFFX10@localhost/-testing-well-child-BE"

let connection

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false }
  connection = process.env.DATABASE_URL
} else if (process.env.NODE_ENV === "development") {
  connection = localConnection
} else {
  connection = testingConnection
}

const sharedConfig = {
  client: "pg",
  connection,
  migrations: { directory: "./data/migrations" },
  seeds: { directory: "./data/seeds" }
}

module.exports = {
  development: { ...sharedConfig },
  testing: { ...sharedConfig },
  production: {
    ...sharedConfig,
    pool: { min: 2, max: 10 }
  }
}
