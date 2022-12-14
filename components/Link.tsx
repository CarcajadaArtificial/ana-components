import { iLink } from "../src/types/props.ts";
import setup from "../src/setup/Link.ts";

export default function (props: Partial<iLink>) {
  const { c, children, ...p } = setup(props);

  return (
    <a {...p} class={c.link}>
      {children}
    </a>
  );
}
