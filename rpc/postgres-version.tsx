export default function postgresVersion() {
  const [{ version }] = sql`SELECT version()`;
  return (
    <h1>
      Hello from <em>inside</em> Postgres: {version}
    </h1>
  );
}
