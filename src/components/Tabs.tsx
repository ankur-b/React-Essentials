import { ReactNode } from "react";

export default function Tabs(props: {
  children: ReactNode;
  buttons: ReactNode;
}) {
  return (
    <>
      <menu>{props.buttons}</menu>
      {props.children}
    </>
  );
}
