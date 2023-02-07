import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Grid } from '@mui/material';
import ImageSwiper from './ImageSwiper';

export type DetailBodyProps = {
  images: string[];
  markdownText: string;
  children: JSX.Element | JSX.Element[];
};

function DetailBody(props: DetailBodyProps): JSX.Element {
  return (
    <Grid container spacing={3}>
      <Grid item md={8} xs={12}>
        <ImageSwiper images={props.images} />
      </Grid>

      <Grid item md={4} xs={12}>
        {props.children}
      </Grid>

      <Grid item xs={12} sx={{ marginTop: '25px' }}>
        <ReactMarkdown>{props.markdownText}</ReactMarkdown>
      </Grid>
    </Grid>
  );
}

export default DetailBody;
