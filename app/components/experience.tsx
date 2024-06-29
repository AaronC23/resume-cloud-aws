"use client";

import { useEffect, useState } from "react";

export interface Props {
  title: string;
  description: string;
  technologies: string;
}

export default function Experience(props: Props) {
  return (
    <div>
      <div className="title">{props.title}</div>
      <div className="description">{props.description}</div>
      <div className="technologies">{props.technologies}</div>
    </div>
  );
}
