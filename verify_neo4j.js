const neo4j = require('neo4j-driver');

async function check() {
  const uri = 'neo4j+s://a721c85e.databases.neo4j.io';
  const user = 'a721c85e';
  const password = 'aiXzj8CoJ5NqZR02uFchq7k3XbWbxg60XF2eCQg-UUs';
  const database = 'a721c85e';

  const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
  const session = driver.session({ database });
  try {
    const res = await session.run('MATCH (n) RETURN labels(n) as label, count(*) as count');
    console.log(JSON.stringify(res.records.map(r => ({ label: r.get('label'), count: r.get('count').toNumber() }))));
  } finally {
    await session.close();
    await driver.close();
  }
}

check();
