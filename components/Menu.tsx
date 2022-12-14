import { iMenu } from "../src/types/props.ts";
import Link from "./Link.tsx";
import Button from "./Button.tsx";
import setup from "../src/setup/Menu.ts";

/**
 * @todo Add event listener that closes the menu when clicking on the body.
 * @todo Change links schema to an array of strings containing the relative path e.g. `'/atoms/color'`.
 * @todo Add `<nav>` and `<ul>` elements to the list.
 * @todo Declare true the property iconButton in the Button component.
 */
export default function (props: Partial<iMenu>) {
  const { c, isOpen, children, links, ...p } = setup(props);

  return (
    <div class={c.wrapper}>
      <div {...p} class={c.door}>
        <Button color="secondary">
          {children}
        </Button>
      </div>
      {isOpen
        ? (
          <div class={c.menu}>
            {links.map((link) => <Link href={link.href}>{link.label}</Link>)}
          </div>
        )
        : null}
    </div>
  );
}
