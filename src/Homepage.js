import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Drona Games
      </Link>{' '}
      {new Date().getFullYear()}
      {'. Built with '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI.
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardGrid: {
    flex: 1,
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
  gameList: {
    maxHeight: 400, overflow: 'auto',
  },
  questionItem: {
    flex: 1,
    display: 'flex',
  }
}));

export default function Blog() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    standard: '',
    chapter: '',
  });


  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Button size="small">Subscribe</Button>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            Drona Dashboard
          </Typography>
          <Button variant="outlined" size="small">
            Sign up
          </Button>
        </Toolbar>
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            {
              <img
                style={{ display: 'none' }}
                src="https://source.unsplash.com/user/erondu"
                alt="background"
              />
            }
            <div className={classes.overlay} />
          </Paper>
          {/* End main featured post */}
          {/* Sub featured posts */}
          <Grid container spacing={4} className={classes.cardGrid}>
              <Grid item align="center" key={"post.title"} xs={6}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {"Select Chapter"}
                        </Typography>
                        <FormControl className={classes.formControl}>
                          <InputLabel htmlFor="age-simple">Standard</InputLabel>
                          <Select
                            value={values.standard}
                            onChange={handleChange}
                            inputProps={{
                              name: 'age',
                              id: 'age-simple',
                            }}
                          >
                            <MenuItem value={1}>Standard 6</MenuItem>
                            <MenuItem value={2}>Standard 7</MenuItem>
                          </Select>
                          <FormHelperText>Select standard First to get list of chapters</FormHelperText>
                        </FormControl>
                        
                        <Button variant="contained" color="primary" className={classes.button}>
                          Submit Standard
                        </Button>
                            
                        <FormControl className={classes.formControl}>
                          <InputLabel htmlFor="age-simple">Chapter</InputLabel>
                          <Select
                            value={values.chapter}
                            onChange={handleChange}
                            inputProps={{
                              name: 'chapter',
                              id: 'age-simple',
                            }}
                          >
                            <MenuItem value={3}>Chapter 1</MenuItem>
                            <MenuItem value={4}>Chapter 2</MenuItem>
                          </Select>

                          <FormHelperText>Select chapter first to get list of games</FormHelperText>
                        </FormControl>
                        <Button variant="contained" color="primary" className={classes.button}>
                        Submit Chapter
                        </Button>
                      </CardContent>
                    </div>
                  </Card>
                </CardActionArea>
              </Grid>
              
              <Grid item key={"post.title"} xs={6}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                      <Typography component="h2" variant="h5">
                          {"Select Game"}
                      </Typography>


                      <List component="nav" aria-label="secondary mailbox folders" className={classes.gameList} >
                        <ListItem button>
                          <ListItemText 
                            primary="Expanding Numbers"
                            secondary="Game Holder for practice of comparing numbers by conversion" />
                        </ListItem>
                        <ListItem button>
                          <ListItemText 
                            primary="Comparing Numbers"
                            secondary="Game Holder for practice of comparing numbers by division" />
                        </ListItem>
                      </List>
                      </CardContent>
                    </div>
                  </Card>
                </CardActionArea>
              </Grid>
          </Grid>

              <Grid  align="center" margin={10} className={classes.cardGrid} >
                  <CardActionArea component="a" href="#">
                    <Card className={classes.card}>
                      <div className={classes.cardDetails}>
                        <CardContent>
                          <Typography component="h2" variant="h5">
                              {"Selected Game"}
                          </Typography>
                          <Typography component="h4" variant="h7">
                              {"Selected Standard: Standard_1"}
                          </Typography>
                          <Typography component="h4" variant="h7">
                              {"Selected Chapter: Chapter_1"}
                          </Typography>
                          <Typography component="h4" variant="h7">
                              {"Selected Game: Game_title_1"}
                          </Typography>
                          <Typography component="h4" variant="h7">
                              {"Question Count: 40"}
                          </Typography>
                        </CardContent>
                      </div>
                    </Card>
                  </CardActionArea>

              </Grid>
              <Grid  align="center">
                <Button variant="contained" color="primary" className={classes.button}>
                New Question
                </Button>
              </Grid>
              <Grid item key={"post.title"} >
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                            {"Select Question"}
                        </Typography>
                        <div className={classes.questionItem}>
                        <Card className={classes.card}>
                          <CardContent>
                            <Typography component="h4" variant="h7">
                                {"Sequence: 1"}
                            </Typography>
                            <Typography component="h4" variant="h7">
                                {"Question: Question Text 1"}
                            </Typography>
                            <Typography component="h4" variant="h7">
                                {"Option Count 4"}
                            </Typography>
                          </CardContent>
                        </Card>
                        <Grid  align="center" margin={10} >
                        <div >
                          <Button variant="contained" color="primary" className={classes.button}>
                          Edit
                          </Button>
                        </div>
                        <div >
                          <Button variant="contained" color="primary" className={classes.button}>
                          Delete
                          </Button>
                        </div>
                        </Grid>
                        <Grid  align="center" margin={10} >
                        <div >
                          <Button variant="contained" color="primary" className={classes.button}>
                          Rearrange
                          </Button>
                        </div>
                        <div >
                          <Button variant="contained" color="primary" className={classes.button}>
                          Duplicate
                          </Button>
                        </div>
                        </Grid>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
              </Grid>
          {/* End sub featured posts */}
          
        </main>
      </Container>
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Something here to give the footer a purpose!
          </Typography>
          <Copyright />
        </Container>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}