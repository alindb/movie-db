import { LoaderFunctionArgs } from "react-router-dom";
import { getPerson } from "../../utils/api/get";
import { Person } from "../../typescript/interfaces";

export async function loader({
  params,
}: LoaderFunctionArgs): Promise<{ person: Person }> {
  if (!params.personId) throw new Error("No movieId provided");
  const person = await getPerson(params.personId);
  return { person };
}
