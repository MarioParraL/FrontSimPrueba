import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "axios";
import Char from "../../../components/Char.tsx";

type Character = {
  name: string;
  house: string;
  image: string;
};
export const handler: Handlers = {
  GET: async (_req: Request, ctx: FreshContext<unknown, Character>) => {
    const id = ctx.params.id;
    if (!id) return ctx.render();

    const response = await axios.get<Character[]>(
      `https://hp-api.onrender.com/api/character/${id}`,
    );
    const character = response.data[0];
    return ctx.render(character);
  },
};

const Page = (props: PageProps<Character>) => {
  return <Char {...props.data} />;
};

export default Page;
