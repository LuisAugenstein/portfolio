import {
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  ListItem,
  Grid,
  Link as MuiLink,
} from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Theme } from '@mui/material';

// card: {
//     backgroundColor: theme.palette.background.default
// },

export type ProjectCardProps = {
  title: string;
  idea: string;
  goal: string;
  tools: string;
  githubUrl: string;
  btnText: string;
  btnUrl: string;
};

function ProjectCard(props: ProjectCardProps): JSX.Element {
  return (
    <Card>
      <CardContent>
        <Typography align="center" variant="h5">
          <strong>{props.title}</strong>
        </Typography>
        <Divider
          sx={(theme: Theme) => ({ backgroundColor: theme.palette.grey[600], marginTop: '10px' })}
        />
      </CardContent>

      <ListItem>
        <Typography>
          <strong>Project Idea</strong>: {' ' + props.idea}
        </Typography>
      </ListItem>

      <ListItem>
        <Typography>
          <strong>Learning Goals</strong>:{' ' + props.goal}
        </Typography>
      </ListItem>

      <ListItem>
        <Typography>
          <strong>Used Tools</strong>:{' ' + props.tools}
        </Typography>
      </ListItem>
      <ListItem>
        <GitHubIcon style={{ fontSize: '25px' }} />
        <Typography>
          {': '}
          <MuiLink
            style={{ cursor: 'pointer' }}
            onClick={() => window.open(props.githubUrl, '_blank')}
          >
            {'Github project'}
          </MuiLink>
        </Typography>
      </ListItem>

      <CardActions>
        <Grid container justifyContent="center">
          <Box width="200px">
            <Button
              color="primary"
              variant="contained"
              fullWidth
              onClick={() => window.open(props.btnUrl, '_blank')}
            >
              {props.btnText}
            </Button>
          </Box>
        </Grid>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
