import { highlight } from "sugar-high";
import { DemoButtons } from "./demos";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 to-blue-100">
      <main className="px-5 md:px-10 md:py-5 max-w-3xl bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">
          <Link href="/">React Postgres Components</Link>
        </h1>

        <div className="text-lg text-gray-800">
          <p className="my-5 font-mono">
            An experiment on deploying remote functions that run <em>inside</em>{" "}
            Postgres using v8, run React SSR, and are easily defined in a{" "}
            <code className="bg-gray-200 rounded-md p-1">rpc/</code> directory:
          </p>

          <div className="my-5 bg-gray-200 p-5 rounded-md overflow-auto">
            <p className="text-gray-600 text-sm mb-2">rpc/hello-world.tsx</p>
            <code className="text-sm block">
              {`export default function helloWorld() {
  const [{ version }] = sql\`SELECT version()\`; // no \`await\` needed!
  return <h1>Hello from <em>inside</em> Postgres: {version}</h1>;
}`}
            </code>
          </div>

          <DemoButtons
            pokemonFunctionCode={
              <div className="bg-gray-200 p-5 rounded-md overflow-auto">
                <p className="text-gray-600 text-sm mb-2">rpc/pokemon.tsx</p>
                <code className="text-sm block" />
              </div>
            }
          />
          <p className="my-5 font-mono">
            Below is the dummy function of the PLV8 function
          </p>

          <div className="my-5 bg-gray-200 p-5 rounded-md overflow-y-auto">
            <code className="text-sm block">
              {`CREATE OR REPLACE FUNCTION "rpc_hello-world"()
RETURNS text AS $$
  $\{functionSource}
$$ LANGUAGE plv8 IMMUTABLE STRICT;`}
            </code>
          </div>
        </div>
      </main>
    </div>
  );
}
