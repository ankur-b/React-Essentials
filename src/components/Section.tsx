import { ReactNode } from "react";

export default function Section(props: { title: string;id:string, children: ReactNode }) {
  return (
    <section id={props.id}>
      <h2>{props.title}</h2>
      {props.children}
    </section>
  );
}
