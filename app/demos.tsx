"use client";
import { Button } from "@/components/ui/button";
import { useFormState, useFormStatus } from "react-dom";
import { Loader2, Rocket } from "lucide-react";
import PostgresVersion from "@/rpc/postgres-version";
import { track } from "@vercel/analytics";

export function DemoButtons({
  pokemonFunctionCode,
}: {
  pokemonFunctionCode: React.ReactNode;
}) {
  const [versionState, versionFormAction] = useFormState(PostgresVersion, null);

  return (
    <>
      <div className="flex items-center gap-2">
        <form action={versionFormAction}>
          <PostgresVersionDemoButton />
        </form>
      </div>

      {versionState ? (
        <div className="p-5 my-5 bg-yellow-100">{versionState}</div>
      ) : null}
    </>
  );
}

function PostgresVersionDemoButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      onClick={() => track("Basic demo button clicked")}
    >
      {pending ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Rocket className="mr-2 h-4 w-4" />
      )}{" "}
      Run
    </Button>
  );
}