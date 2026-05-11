import neo4j, { Driver } from 'neo4j-driver'

let driver: Driver

export function getNeo4jDriver() {
  if (!driver) {
    const uri = process.env.NEO4J_URI || ''
    const user = process.env.NEO4J_USERNAME || 'neo4j'
    const password = process.env.NEO4J_PASSWORD || ''
    const database = process.env.NEO4J_DATABASE || 'neo4j'
    
    driver = neo4j.driver(uri, neo4j.auth.basic(user, password))
  }
  return driver
}

export async function executeQuery(query: string, params: any = {}) {
  const driver = getNeo4jDriver()
  const session = driver.session({ database: process.env.NEO4J_DATABASE || 'neo4j' })
  try {
    const result = await session.run(query, params)
    return result
  } finally {
    await session.close()
  }
}
