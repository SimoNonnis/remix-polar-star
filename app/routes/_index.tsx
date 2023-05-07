import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div className="h-full text-center p-6  text-zinc-900  bg-orange-500 ">
      <h1 className="">Welcome to Remix</h1>
    </div>
  );
}
