import React from 'react';
import { Carousel } from 'flowbite-react';
import ReactMarkdown from 'react-markdown';

export type DetailBodyProps = {
  title: string;
  images: string[];
  markdownText: string;
  children: JSX.Element | JSX.Element[];
};

function PageScaffold(props: DetailBodyProps): JSX.Element {
  return (
    <div className="bg-tertiary min-h-full">
      <div className="bg-secondary py-2 pb-3">
        <h2 className="px-10 text-3xl font-thin dark:text-white">{props.title}</h2>
      </div>

      <div className="grid grid-cols-3 gap-3 p-2 sm:p-10">
        <div className="dark col-span-3 flex items-center justify-center md:col-span-2">
          <div className="aspect-[1290/600] max-h-72 w-full max-w-2xl">
            <Carousel
              slide={false}
              className={
                props.images.length <= 1 ? '[&>div.absolute]:hidden [&>div>div]:cursor-default' : ''
              }
            >
              {props.images.map((image, index) => (
                <div
                  key={index}
                  style={{ backgroundImage: `url('${image}')` }}
                  className="h-full w-full bg-contain bg-center"
                ></div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className="col-span-3 flex justify-center md:col-span-1">{props.children}</div>

        <div className="prose col-span-3 mt-6 max-w-none dark:prose-invert">
          <ReactMarkdown>{props.markdownText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default PageScaffold;
