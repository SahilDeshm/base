import { LoaderFunction, redirect } from "@remix-run/node";

// Redirect every unknown route to /write
export const loader: LoaderFunction = async () => {
  return redirect("/write");
};
