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
    // <Link to={project.path}>
    //   <Card
    //     sx={{
    //       position: 'relative',
    //       height: '100%',
    //       '&:hover': {
    //         div: {
    //           bottom: '0',
    //         },
    //       },
    //     }}
    //   >
    //     <img width="100%" height="100%" src={project.image} alt={project.title} />
    //     <Box
    //       sx={(theme) => ({
    //         width: '100%',
    //         height: '42px',
    //         bottom: '-42px',
    //         position: 'absolute',
    //         transition: 'all ease-in-out 0.3s',
    //         display: 'flex',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         background: alpha(theme.palette.primary.main, 0.75),
    //       })}
    //     >
    //       <AddIcon />
    //     </Box>
    //   </Card>
    // </Link>
  );
}

export default SingleProject;
