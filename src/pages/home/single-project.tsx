import React from 'react';
import { Link } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/24/outline';

export type ProjectData = {
  image: string;
  path: string;
  title: string;
};

export type SingleProjectProps = {
  project: ProjectData;
};

function SingleProject(props: SingleProjectProps): JSX.Element {
  const { path, image, title } = props.project;
  return (
    <Link to={path}>
      <div className="group relative h-full cursor-pointer overflow-hidden">
        <img className="rounded" src={image} alt={title} />
        <div className="absolute top-0 h-full w-full group-hover:bg-black/10"></div>
        <span className="absolute flex h-8 w-full items-center  justify-center rounded-b bg-primary-500/50 transition group-hover:-translate-y-full">
          <PlusIcon color="white" width="24px" />
        </span>
      </div>
    </Link>
  );
}

export default SingleProject;
