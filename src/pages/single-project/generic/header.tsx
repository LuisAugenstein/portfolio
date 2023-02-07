import React from 'react';
import { Box, Breadcrumbs, Container, Grid, Typography, Link, Theme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export type BreadCrumbProps = {
  title: string;
};

function Header(props: BreadCrumbProps): JSX.Element {
  return (
    <Box py={3} sx={(theme: Theme) => ({ background: theme.palette.grey[900], px: { xs: 1, sm: 6 } })}>
      <Container maxWidth="xl">
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item lg={3} xs={12}>
            <Typography variant="h5">{props.title + ' Project'}</Typography>
          </Grid>
          <Breadcrumbs>
            <Link component={RouterLink} to={'/#hero'} style={{ cursor: 'pointer' }}>
              Home
            </Link>
            <Typography>{props.title}</Typography>
          </Breadcrumbs>
        </Grid>
      </Container>
    </Box>
  );
}

export default Header;
