import React, { useState } from 'react'
import { makeStyles, withWidth, Hidden } from "@material-ui/core"
//box, grid
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
//typography
import Typography from '@material-ui/core/Typography'
//divider
import Divider from '@material-ui/core/Divider'
//buttons
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
//code Highlighter
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
//tabla
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
//iconos
import DeleteIcon from "@material-ui/icons/Delete"
import IconButton from "@material-ui/core/IconButton"
import LinkIcon from '@material-ui/icons/Link'
import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import MailIcon from '@material-ui/icons/Mail'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
//listas
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
//card
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import CardActionArea from '@material-ui/core/CardActionArea';
//tabs
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
//dialog
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
//snackbar y alert
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
//loading
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
//tooltip
import Tooltip from '@material-ui/core/Tooltip'
//chip y badge
import Chip from '@material-ui/core/Chip'
import Badge from '@material-ui/core/Badge'
//acordeón
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
//form
import Input from '@material-ui/core/Input'
import FilledInput from '@material-ui/core/FilledInput'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Checkbox from '@material-ui/core/Checkbox'
import FormGroup from '@material-ui/core/FormGroup'
//paginacion
import Pagination from '@material-ui/lab/Pagination'
//colores
import { red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, brown, grey, blueGrey } from '@material-ui/core/colors'
//imagenes
import reptil from '../images/contemplative-reptile.jpg'
import paella from '../images/paella.jpg'

const estilos = makeStyles((theme) => ({
  fondo: {
    background: theme.palette.secondary,
  },
  claseBoton: {
    marginRight: 10,
    marginTop: 10
  },
  //card
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  //tabs
  root2: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  //snackbars y alert
  root3: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  //loading
  loading: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  //chips y badges
  root4: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  //acordeón
  root5: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  //form  
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  root6: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  //paginacion
  root7: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}))

//tabla
function createData(nombreImport, prop, propCss) {
  return { nombreImport, prop, propCss };
}

const rows = [
  createData('spacing', 'm', 'margin'),
  createData('spacing', 'mt', 'margin-top'),
  createData('spacing', 'mr', 'margin-right'),
  createData('spacing', 'mb', 'margin-bottom'),
  createData('spacing', 'ml', 'margin-left'),
  createData('spacing', 'mx', 'margin-left, margin-right'),
  createData('spacing', 'my', 'margin-top, margin-bottom'),
  createData('spacing', 'p', 'padding'),
  createData('spacing', 'pt', 'padding-top'),
  createData('spacing', 'pr', 'padding-right'),
  createData('spacing', 'pb', 'padding-bottom'),
  createData('spacing', 'pl', 'padding-left'),
  createData('spacing', 'px', 'padding-left, padding-right'),
  createData('spacing', 'py', 'padding-top, padding-bottom'),
]

//highlight code
const codeString = `  
  import { createMuiTheme } from "@material-ui/core/styles"
  // import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles'
  const theme = createMuiTheme({
    breakpoints: {},    
    mixins: {},
    overrides: {},
    palette: {},
    props: {},
    shadows: {},    
    typography: {},
    spacing : Valor,
    shape: {},
    transitions: {},
    zIndex: {}
})
`;

//listas
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

//tabs
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

//snackbar y alert
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

//form
const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
]

const ContenerorInterior = (props) => {
  const classes = estilos()

  //card
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  //tabs
  const [valueTab, setValueTab] = useState(0);

  const handleChangeTab = (event, newValue) => {
    setValueTab(newValue);
  }

  //dialog
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  }

  const handleCloseDialog = () => {
    setOpenDialog(false);
  }

  //snackbar y alert
  const [openSnack, setOpenSnack] = useState(false);

  const handleClickSnack = () => {
    setOpenSnack(true);
  }

  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  }

  //loading
  const [openLoading, setOpenLoading] = useState(false);
  const handleCloseLoading = () => {
    setOpenLoading(false);
  }
  const handleToggleLoading = () => {
    setOpenLoading(!openLoading);
  }

  //form
  const [valuesForm, setValuesForm] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  })

  const handleChangeForm = (prop) => (event) => {
    setValuesForm({ ...valuesForm, [prop]: event.target.value });
  }

  const handleClickShowPasswordForm = () => {
    setValuesForm({ ...valuesForm, showPassword: !valuesForm.showPassword });
  }

  const handleMouseDownPasswordForm = (event) => {
    event.preventDefault();
  }

  const [currency, setCurrency] = useState('EUR');

  const handleChangeSelect = (event) => {
    setCurrency(event.target.value);
  }

  const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  }

  const [valueRadio, setValueRadio] = useState('female');

  const handleChangeRadio = (event) => {
    setValueRadio(event.target.value);
  }

  const [stateCheckbox, setStateCheckbox] = useState({
    checkedA: true,
    checkedB: true
  })

  const handleChangeCheckbox = (event) => {
    setStateCheckbox({ ...stateCheckbox, [event.target.name]: event.target.checked });
  }

  return (
    <div>
      <Grid container spacing={2}>
        {/* Grid y boxes */}
        <Grid item xs={12}>
          <Typography variant="h6">Boxes y grid</Typography>
          <Divider />
        </Grid>
        <Grid item xs={12} md={6} lg={3} className={classes.fondo}>
          <Box
            bgcolor="primary.main"
            color="primary.contrastText"
            p={2}
            textAlign="center"
          >
            {props.width}
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3} className={classes.fondo}>
          <Box
            bgcolor="primary.main"
            color="primary.contrastText"
            p={2}
            textAlign="center"
          >
            {props.width}
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3} className={classes.fondo}>
          <Box
            bgcolor="secondary.main"
            color="secondary.contrastText"
            p={2}
            textAlign="center"
          >
            {props.width}
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3} className={classes.fondo}>
          <Box
            bgcolor="secondary.main"
            color="secondary.contrastText"
            p={2}
            textAlign="center"
          >
            {props.width}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Button
            color="secondary"
            href="https://material-ui.com/components/box/"
            target="_blank"
            rel="noreferrer"
            startIcon={<LinkIcon />}>
            https://material-ui.com/components/box/
          </Button>
          <br />
          <Button
            color="secondary"
            href="https://material-ui.com/components/grid/"
            target="_blank"
            rel="noreferrer"
            startIcon={<LinkIcon />}>
            https://material-ui.com/components/grid/
          </Button>
        </Grid>
        {/* Botones */}
        <Grid item xs={12}>
          <Typography variant="h6">Botones</Typography>
          <Divider />
          <Grid item xs={12} md={12} lg={6}>
            <Box p={2}>
              <Button color="primary" className={classes.claseBoton}>primary</Button>
              <Button color="primary" className={classes.claseBoton} variant="contained">
                contained
              </Button>
              <Button color="primary" className={classes.claseBoton} variant="contained" disableElevation>
                disableElevation
              </Button>
              <Button variant="outlined" color="primary" className={classes.claseBoton} target="_blank" href="https://google.com">
                Google
              </Button>
              <Button color="secondary" className={classes.claseBoton} variant="contained" size="small">
                small
              </Button>
              <br />
              <Button variant="contained" className={classes.claseBoton} color="primary" fullWidth>
                fullWidth
              </Button>
              <ButtonGroup variant="contained" className={classes.claseBoton} color="primary" aria-label="contained primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>
            </Box>
            <Button
              color="secondary"
              href="https://material-ui.com/components/buttons/"
              target="_blank"
              rel="noreferrer"
              startIcon={<LinkIcon />}>
              https://material-ui.com/components/buttons/
            </Button>
            <br />
            <Button
              color="secondary"
              href="https://material-ui.com/components/button-group/"
              target="_blank"
              rel="noreferrer"
              startIcon={<LinkIcon />}>
              https://material-ui.com/components/button-group/
            </Button>
          </Grid>
        </Grid>
        {/* Tablas y espaciado */}
        <Grid item xs={12}>
          <Typography variant="h6">Espaciado y tablas</Typography>
          <Divider />
          <Grid item xs={12} md={12} lg={6}>
            <Box p={2}>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Nombre importación</TableCell>
                      <TableCell align="left">Propiedad</TableCell>
                      <TableCell align="left">Propiedad CSS</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {row.nombreImport}
                        </TableCell>
                        <TableCell align="left">{row.prop}</TableCell>
                        <TableCell align="left">{row.propCss}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Button
              color="secondary"
              href="https://material-ui.com/components/tables/"
              target="_blank"
              rel="noreferrer"
              startIcon={<LinkIcon />}>
              https://material-ui.com/components/tables/
            </Button>
          </Grid>
        </Grid>
        {/* Iconos */}
        <Grid item xs={12}>
          <Typography variant="h6">Iconos</Typography>
          <Divider />
          <Box p={2}>
            <DeleteIcon className={classes.claseBoton} color="primary" fontSize="large" />
            <br />
            <Button className={classes.claseBoton} variant="contained" color="primary" startIcon={<DeleteIcon />}>
              Eliminar
            </Button>
            <br />
            <IconButton className={classes.claseBoton} aria-label="delete" color="primary">
              <DeleteIcon />
            </IconButton>
          </Box>
          <Button
            color="secondary"
            href="https://material-ui.com/es/components/material-icons/"
            target="_blank"
            rel="noreferrer"
            startIcon={<LinkIcon />}>
            https://material-ui.com/es/components/material-icons/
          </Button>
        </Grid>
        {/* Listas */}
        <Grid item xs={12}>
          <Typography variant="h6">Listas</Typography>
          <Divider />
          <Grid item xs={12} md={12} lg={4}>
            <Box p={2}>
              <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                  <ListItemIcon >
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon >
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Drafts" />
                </ListItem>
              </List>
              <Divider />
              <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                  <ListItemText primary="Trash" />
                </ListItem>
                <ListItemLink href="#simple-list">
                  <ListItemText primary="Spam" />
                </ListItemLink>
              </List>
            </Box>
          </Grid>
          <Button
            color="secondary"
            href="https://material-ui.com/es/components/lists/"
            target="_blank"
            rel="noreferrer"
            startIcon={<LinkIcon />}>
            https://material-ui.com/es/components/lists/
          </Button>
        </Grid>
        {/* Cards */}
        <Grid item xs={12}>
          <Typography variant="h6">Cards</Typography>
          <Divider />
          <Grid container spacing={3} direction="row" justify="flex-start" alignItems="flex-start">
            <Grid item   >
              <Box p={2}>
                <Card className={classes.root}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                  />
                  <CardMedia
                    className={classes.media}
                    image={paella}
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      This impressive paella is a perfect party dish and a fun meal to cook together with your
                      guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                      })}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Method:</Typography>
                      <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.
                      </Typography>
                      <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                      </Typography>
                      <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
                      </Typography>
                      <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Box>
            </Grid>
            <Grid item >
              <Box p={2}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={reptil}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          </Grid>
          <Button
            color="secondary"
            href="https://material-ui.com/es/components/cards/"
            target="_blank"
            rel="noreferrer"
            startIcon={<LinkIcon />}>
            https://material-ui.com/es/components/cards/
          </Button>
          <br />
          <Button
            color="secondary"
            href="https://mui-treasury.com/components/card/"
            target="_blank"
            rel="noreferrer"
            startIcon={<LinkIcon />}>
            https://mui-treasury.com/components/card/
          </Button>
        </Grid>
        {/* Tabs */}
        <Grid item xs={12}>
          <Typography variant="h6">Tabs</Typography>
          <Divider />
          <Box p={2}>
            <div className={classes.root2}>
              <AppBar position="static">
                <Tabs value={valueTab} onChange={handleChangeTab} aria-label="simple tabs example">
                  <Tab label="Item One" {...a11yProps(0)} />
                  <Tab label="Item Two" {...a11yProps(1)} />
                  <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
              </AppBar>
              <TabPanel value={valueTab} index={0}>
                Item One
              </TabPanel>
              <TabPanel value={valueTab} index={1}>
                Item Two
              </TabPanel>
              <TabPanel value={valueTab} index={2}>
                Item Three
              </TabPanel>
            </div>
          </Box>
          <Button
            color="secondary"
            href="https://material-ui.com/components/tabs/"
            target="_blank"
            rel="noreferrer"
            startIcon={<LinkIcon />}>
            https://material-ui.com/components/tabs/
          </Button>
        </Grid>
        {/* Dialog */}
        <Grid item xs={12}>
          <Typography variant="h6">Dialog</Typography>
          <Divider />
          <Box p={2}>
            <div>
              <Button variant="outlined" color="primary" onClick={handleClickOpenDialog}>
                Open alert dialog
              </Button>
              <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending anonymous location data to
                    Google, even when no apps are running.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseDialog} color="primary">
                    Disagree
                  </Button>
                  <Button onClick={handleCloseDialog} color="primary" autoFocus>
                    Agree
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </Box>
          <Button
            color="secondary"
            href="https://material-ui.com/components/dialogs/"
            target="_blank"
            rel="noreferrer"
            startIcon={<LinkIcon />}>
            https://material-ui.com/components/dialogs/
          </Button>
        </Grid>
        {/* Snackbar y alert */}
        <Grid item xs={12}>
          <Typography variant="h6">Snackbars y Alerts</Typography>
          <Divider />
          <Box p={2}>
            <div className={classes.root3}>
              <Button variant="outlined" onClick={handleClickSnack}>
                Open success snackbar
              </Button>
              <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
                <Alert onClose={handleCloseSnack} severity="success">
                  This is a success message!
                </Alert>
              </Snackbar>
              <Alert severity="error">This is an error message!</Alert>
              <Alert severity="warning">This is a warning message!</Alert>
              <Alert severity="info">This is an information message!</Alert>
              <Alert severity="success">This is a success message!</Alert>
            </div>
          </Box>
          <Button
            color="secondary"
            href="https://material-ui.com/components/snackbars/"
            target="_blank"
            rel="noreferrer"
            startIcon={<LinkIcon />}>
            https://material-ui.com/components/snackbars/
          </Button>
        </Grid>
        {/* Loading */}
        <Grid item xs={12}>
          <Typography variant="h6">Loading</Typography>
          <Divider />
          <Box p={2}>
            <div>
              <Button variant="outlined" color="primary" onClick={handleToggleLoading}>
                Show loading
              </Button>
              <Backdrop className={classes.loading} open={openLoading} onClick={handleCloseLoading}>
                <CircularProgress color="inherit" />
              </Backdrop>
            </div>
          </Box>
          <Button
            color="secondary"
            href="https://material-ui.com/es/components/backdrop/"
            target="_blank"
            rel="noreferrer"
            startIcon={<LinkIcon />}>
            https://material-ui.com/es/components/backdrop/
          </Button>
        </Grid>
        {/* Tooltips */}
        <Grid item xs={12}>
          <Typography variant="h6">Tooltips</Typography>
          <Divider />
          <Box p={2}>
            <Tooltip title="Add" placement="right" arrow>
              <Button>Arrow</Button>
            </Tooltip>
          </Box>
          <Button
            color="secondary"
            href="https://material-ui.com/es/components/tooltips/"
            target="_blank"
            rel="noreferrer"
            startIcon={<LinkIcon />}>
            https://material-ui.com/es/components/tooltips/
          </Button>
        </Grid>
        {/* Chips y badges */}
        <Grid item xs={12}>
          <Typography variant="h6">Chips y badgets</Typography>
          <Divider />
          <Box p={2}>
            <div className={classes.root4}>
              <Chip label="Basic" />
              <Chip label="Primary" color="primary" />
              <Chip label="Secondary" color="secondary" />
              <Chip label="Disabled" disabled />
              <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
              <Badge badgeContent={4} color="primary">
                <MailIcon />
              </Badge>
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
              <Badge
                badgeContent={4}
                color="error"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
              >
                <MailIcon fontSize="large" />
              </Badge>
            </div>
          </Box>
          <Button
            color="secondary"
            href="https://material-ui.com/es/components/chips/"
            target="_blank"
            rel="noreferrer"
            startIcon={<LinkIcon />}>
            https://material-ui.com/es/components/chips/
          </Button>
          <br />
          <Button
            color="secondary"
            href="https://material-ui.com/es/components/badges/"
            target="_blank"
            rel="noreferrer"
            startIcon={<LinkIcon />}>
            https://material-ui.com/es/components/badges/
          </Button>
        </Grid>
        {/* acordeón */}
        <Grid item xs={12}>
          <Typography variant="h6">Acordeón</Typography>
          <Divider />
          <Box p={2}>
            <div className={classes.root5}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion disabled>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography className={classes.heading}>Disabled Accordion</Typography>
                </AccordionSummary>
              </Accordion>
            </div>
          </Box>
          <Button
            color="secondary"
            href="https://material-ui.com/es/components/accordion/"
            target="_blank"
            rel="noreferrer"
            startIcon={<LinkIcon />}>
            https://material-ui.com/es/components/accordion/
          </Button>
        </Grid>
        {/* form */}
        <Grid item xs={12}>
          <Typography variant="h6">Form</Typography>
          <Divider />
          <Box p={2}>
            <div>
              <div>
                <TextField
                  label="With normal TextField"
                  id="standard-start-adornment"
                  className={clsx(classes.margin, classes.textField)}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                  }}
                />
                <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                  <Input
                    id="standard-adornment-weight"
                    value={valuesForm.weight}
                    onChange={handleChangeForm('weight')}
                    endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                    aria-describedby="standard-weight-helper-text"
                    inputProps={{
                      'aria-label': 'weight',
                    }}
                  />
                  <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
                </FormControl>
                <FormControl className={clsx(classes.margin, classes.textField)}>
                  <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                  <Input
                    id="standard-adornment-password"
                    type={valuesForm.showPassword ? 'text' : 'password'}
                    value={valuesForm.password}
                    onChange={handleChangeForm('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPasswordForm}
                          onMouseDown={handleMouseDownPasswordForm}
                        >
                          {valuesForm.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl fullWidth className={classes.margin}>
                  <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                  <Input
                    id="standard-adornment-amount"
                    value={valuesForm.amount}
                    onChange={handleChangeForm('amount')}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  />
                </FormControl>
              </div>
              <div>
                <FormControl fullWidth className={classes.margin} variant="filled">
                  <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                  <FilledInput
                    id="filled-adornment-amount"
                    value={valuesForm.amount}
                    onChange={handleChangeForm('amount')}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                  />
                </FormControl>
              </div>
              <div>
                <FormControl fullWidth className={classes.margin} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    value={valuesForm.amount}
                    onChange={handleChangeForm('amount')}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    labelWidth={60}
                  />
                </FormControl>
              </div>
              <div>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={12} lg={6}>
                    <FormControl fullWidth className={clsx(classes.margin)}>
                      <InputLabel id="demo-simple-select-label">Moneda</InputLabel>
                      <Select
                        id="standard-select-currency"
                        label="Select"
                        value={currency}
                        onChange={handleChangeSelect}
                        helpertext="Please select your currency"
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={12} lg={6}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker fullWidth
                        className={clsx(classes.margin)}
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </Grid>
                  <Grid item xs={12} md={12} lg={6}>
                    <FormControl component="fieldset" className={classes.margin}>
                      <FormLabel component="legend">Gender</FormLabel>
                      <RadioGroup aria-label="gender" name="gender1" value={valueRadio} onChange={handleChangeRadio}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                        <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={12} lg={6}>
                    <FormGroup row>
                      <FormControlLabel
                        control={<Checkbox checked={stateCheckbox.checkedA} onChange={handleChangeCheckbox} name="checkedA" />}
                        label="Secondary"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={stateCheckbox.checkedB}
                            onChange={handleChangeCheckbox}
                            name="checkedB"
                            color="primary"
                          />
                        }
                        label="Primary"
                      />
                      <FormControlLabel disabled control={<Checkbox name="checkedC" />} label="Disabled" />
                    </FormGroup>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Box>
          <Button
            color="secondary"
            href="https://material-ui.com/components/text-fields/"
            target="_blank"
            rel="noreferrer"
            startIcon={<LinkIcon />}>
            https://material-ui.com/components/text-fields/
          </Button>
          <br />
          <Button
            color="secondary"
            href="https://material-ui.com/es/components/selects/"
            target="_blank"
            rel="noreferrer"
            startIcon={<LinkIcon />}>
            https://material-ui.com/es/components/selects/
          </Button>
          <br />
          <Button
            color="secondary"
            href="https://material-ui.com/es/components/pickers/"
            target="_blank"
            rel="noreferrer"
            startIcon={<LinkIcon />}>
            https://material-ui.com/es/components/pickers/
          </Button>
          <br />
          <Button
            color="secondary"
            href="https://material-ui.com/es/components/radio-buttons/"
            target="_blank"
            rel="noreferrer"
            startIcon={<LinkIcon />}>
            https://material-ui.com/es/components/radio-buttons/
          </Button>
          <br />
          <Button
            color="secondary"
            href="https://material-ui.com/es/components/checkboxes/"
            target="_blank"
            rel="noreferrer"
            startIcon={<LinkIcon />}>
            https://material-ui.com/es/components/checkboxes/
          </Button>
        </Grid>
        {/* paginación */}
        <Grid item xs={12}>
          <Typography variant="h6">Navegación</Typography>
          <Divider />
          <Box p={2}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <div className={classes.root7}>
                <Pagination count={10} />
              </div>
            </Grid>
          </Box>
          <Button
            color="secondary"
            href="https://material-ui.com/es/components/pagination/"
            target="_blank"
            rel="noreferrer"
            startIcon={<LinkIcon />}>
            https://material-ui.com/es/components/pagination/
          </Button>
        </Grid>
        {/* Colores */}
        <Grid item xs={12}>
          <Typography variant="h6">Colores</Typography>
          <Divider />
        </Grid>
        <Grid item xs={6} md={6} lg={2} >
          <Box
            bgcolor={red[500]}
            color="primary.contrastText"
            p={2}
            textAlign="center"
          >
            red
          </Box>
        </Grid>
        <Grid item xs={6} md={6} lg={2} >
          <Box
            bgcolor={pink[500]}
            color="primary.contrastText"
            p={2}
            textAlign="center"
          >
            pink
          </Box>
        </Grid>
        <Grid item xs={6} md={6} lg={2} >
          <Box
            bgcolor={purple[500]}
            color="secondary.contrastText"
            p={2}
            textAlign="center"
          >
            purple
          </Box>
        </Grid>
        <Grid item xs={6} md={6} lg={2} >
          <Box
            bgcolor={deepPurple[500]}
            color="secondary.contrastText"
            p={2}
            textAlign="center"
          >
            deepPurple
          </Box>
        </Grid>
        <Grid item xs={6} md={6} lg={2} >
          <Box
            bgcolor={indigo[500]}
            color="primary.contrastText"
            p={2}
            textAlign="center"
          >
            indigo
          </Box>
        </Grid>
        <Grid item xs={6} md={6} lg={2} >
          <Box
            bgcolor={blue[500]}
            color="primary.contrastText"
            p={2}
            textAlign="center"
          >
            blue
          </Box>
        </Grid>
        <Grid item xs={6} md={6} lg={2} >
          <Box
            bgcolor={lightBlue[500]}
            color="secondary.contrastText"
            p={2}
            textAlign="center"
          >
            lightBlue
          </Box>
        </Grid>
        <Grid item xs={6} md={6} lg={2} >
          <Box
            bgcolor={cyan[500]}
            color="secondary.contrastText"
            p={2}
            textAlign="center"
          >
            cyan
          </Box>
        </Grid>
        <Grid item xs={6} md={6} lg={2} >
          <Box
            bgcolor={teal[500]}
            color="primary.contrastText"
            p={2}
            textAlign="center"
          >
            teal
          </Box>
        </Grid>
        <Grid item xs={6} md={6} lg={2} >
          <Box
            bgcolor={green[500]}
            color="primary.contrastText"
            p={2}
            textAlign="center"
          >
            green
          </Box>
        </Grid>
        <Grid item xs={6} md={6} lg={2} >
          <Box
            bgcolor={lightGreen[500]}
            color="secondary.contrastText"
            p={2}
            textAlign="center"
          >
            lightGreen
          </Box>
        </Grid>
        <Grid item xs={6} md={6} lg={2} >
          <Box
            bgcolor={lime[500]}
            color="secondary.contrastText"
            p={2}
            textAlign="center"
          >
            lime
          </Box>
        </Grid>
        <Grid item xs={6} md={6} lg={2} >
          <Box
            bgcolor={yellow[500]}
            color="primary.contrastText"
            p={2}
            textAlign="center"
          >
            yellow
          </Box>
        </Grid>
        <Grid item xs={6} md={6} lg={2} >
          <Box
            bgcolor={amber[500]}
            color="primary.contrastText"
            p={2}
            textAlign="center"
          >
            amber
          </Box>
        </Grid>
        <Grid item xs={6} md={6} lg={2} >
          <Box
            bgcolor={orange[500]}
            color="secondary.contrastText"
            p={2}
            textAlign="center"
          >
            orange
          </Box>
        </Grid>
        <Grid item xs={6} md={6} lg={2} >
          <Box
            bgcolor={deepOrange[500]}
            color="secondary.contrastText"
            p={2}
            textAlign="center"
          >
            deepOrange
          </Box>
        </Grid>
        <Grid item xs={6} md={6} lg={2} >
          <Box
            bgcolor={brown[500]}
            color="secondary.contrastText"
            p={2}
            textAlign="center"
          >
            brown
          </Box>
        </Grid>
        <Grid item xs={6} md={6} lg={2} >
          <Box
            bgcolor={grey[500]}
            color="secondary.contrastText"
            p={2}
            textAlign="center"
          >
            grey
          </Box>
        </Grid>
        <Grid item xs={6} md={6} lg={2} >
          <Box
            bgcolor={blueGrey[500]}
            color="secondary.contrastText"
            p={2}
            textAlign="center"
          >
            blueGrey
          </Box>
        </Grid>
        <Grid item xs={6} md={6} lg={2} >
          <Box
            bgcolor={grey[900]}
            color="secondary.contrastText"
            p={2}
            textAlign="center"
          >
            black
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Button
            color="secondary"
            href="https://material-ui.com/customization/color/"
            target="_blank"
            rel="noreferrer"
            startIcon={<LinkIcon />}>
            https://material-ui.com/customization/color/
          </Button>
        </Grid>
        {/* Overrides Custom Theme */}
        <Hidden only="xs">
          <Grid item xs={12}>
            <Typography variant="h6">Overrides Custom Theme</Typography>
            <Divider />
            <SyntaxHighlighter language="javascript" style={docco}>
              {codeString}
            </SyntaxHighlighter>
            <Button
              color="secondary"
              href="https://material-ui.com/customization/default-theme/"
              target="_blank"
              rel="noreferrer"
              startIcon={<LinkIcon />}>
              https://material-ui.com/customization/default-theme/
            </Button>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  )
}

export default withWidth()(ContenerorInterior)
