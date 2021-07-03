import React, { useState, useEffect } from 'react'
import { makeStyles, withStyles } from "@material-ui/core"
import logo from '../images/ataraxia-logo.png'
//box, grid
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
//typography
import Typography from '@material-ui/core/Typography'
//divider
import Divider from '@material-ui/core/Divider'
//buttons
import Button from '@material-ui/core/Button'
//iconos
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
//form
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
//snackbar y alert
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
//progressbar
import LinearProgress from '@material-ui/core/LinearProgress'
//loading
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'

const estilos = makeStyles((theme) => ({
    divider: {
        marginTop: '10px',
    },
    logo: {
        width: '30%',
    },
    //form
    form: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    formInput: {
        width: '69%',
    },
    formButton: {
        width: '28%',
    },
    //prograssbar
    progressBar: {
        width: '100%',
        marginTop: '10px',
    },
    //loading
    loading: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}))

//snackbar y alert
const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

//progressBar
const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#3166ee',
    },
}))(LinearProgress);

const LinearProgressWithLabel = (props) => {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <BorderLinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

const Main = ({ account, ataraxiaToken, ataraxiaTokenVenta }) => {
    const web3 = window.web3;
    const classes = estilos()

    const [tokenPrice, setTokenPrice] = useState(0)
    const [tokensSold, setTokensSold] = useState(0)
    const [tokensAvailable, setTokenAvailable] = useState(750000)
    const [balance, setBalance] = useState(0)
    const [numberOfTokens, setNumberOfTokens] = useState('')
    //alert
    const [openSnack, setOpenSnack] = useState(false)
    const [alert, setAlert] = useState({})
    //progress
    const [progress, setProgress] = useState(10)
    //loading
    const [openLoading, setOpenLoading] = useState(false)

    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnack(false);
    };

    useEffect(() => {
        listenForEvents()
    }, [ataraxiaTokenVenta]);

    useEffect(() => {
        const exec = async () => {
            try {
                const tokenPriceWei = await ataraxiaTokenVenta.methods.tokenPrice().call()
                const tokenPrice = web3.utils.fromWei(tokenPriceWei.toString(), "ether")
                setTokenPrice(tokenPrice)
                const tokensSold = await ataraxiaTokenVenta.methods.tokensSold().call()
                setTokensSold(tokensSold)
                const balance = await ataraxiaToken.methods.balanceOf(account).call()
                setBalance(balance)

            } catch (error) {
                setAlert({
                    mensaje: 'Error cargando datos',
                    tipo: 'error'
                })
                setOpenSnack(true)
            }
        };
        exec();
    }, [ataraxiaTokenVenta.methods, balance, tokensSold, account, ataraxiaToken.methods, web3.utils]);

    useEffect(() => {
        const progress = (Math.ceil(tokensSold) / tokensAvailable) * 100
        setProgress(progress)
    }, [progress, tokensAvailable, tokensSold]);


    const listenForEvents = () => {
        ataraxiaTokenVenta.events.Sell({})
            .on('data', async (event) => {
                console.log(event.returnValues);
                // Do something here
            })
            .on('error', console.error);
    };

    const buyTokens = (amount) => {
        setOpenLoading(true)
        let valor = (amount * tokenPrice)
        console.log(account)
        valor = web3.utils.toWei(valor.toString(), "Ether")
        ataraxiaTokenVenta.methods.buyTokens(amount).send({
            from: account,
            value: valor

        }).on('transactionHash', (hash) => {
            setOpenLoading(false)
            setAlert({
                mensaje: 'Transacción realizada exitosamente',
                tipo: 'success'
            })
            setOpenSnack(true)
            setTimeout(() => {
                window.location.reload();
            }, 3500);
        }).on('confirmation', (confirmationNumber, receipt) => {
            console.log('confirmation: ' + confirmationNumber);
            if (confirmationNumber === 1) {                
               // haz algo
            }
        })
    };

    return (
        <div>
            <Backdrop className={classes.loading} open={openLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item xs={6}>
                    <Box
                        p={2}
                        mt={2}
                        textAlign="center"
                    >
                        <Typography variant="h4">Ataraxia Token ICO Ventas</Typography>
                        <Divider className={classes.divider} />
                        <br />
                        <img src={logo} className={classes.logo} alt="logo" />
                        <br />
                        <Typography className={classes.divider} variant="body2">Presentamos la Criptomoneda "Ataraxia Token" (ATR). El precio del token es {tokenPrice} Ether. Actualmente tienes {balance} ATR.</Typography>
                    </Box>
                    <Box
                        p={2}
                        mt={2}
                    >
                        <form
                            onSubmit={(event) => {
                                event.preventDefault()
                                if (numberOfTokens > 0) {
                                    let amount
                                    amount = numberOfTokens
                                    // amount = web3.utils.toWei(amount.toString(), "ether")
                                    buyTokens(amount)
                                } else {
                                    setAlert({
                                        mensaje: 'Debes entrar la cantidad de Tokens que quieres comprar',
                                        tipo: 'error'
                                    })
                                    setOpenSnack(true)
                                }
                            }}
                        >
                            <FormControl
                                variant="outlined"
                                className={classes.form}
                            >
                                <InputLabel htmlFor="outlined-adornment-amount">Cantidad</InputLabel>
                                <OutlinedInput
                                    className={classes.formInput}
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    labelWidth={60}
                                    type="number"
                                    value={numberOfTokens}
                                    onInput={e => setNumberOfTokens(e.target.value)}
                                />
                                <Button
                                    className={classes.formButton}
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    type="submit"
                                    startIcon={<ShoppingCartIcon />}
                                >
                                    Comprar
                                </Button>
                            </FormControl>
                        </form>
                    </Box>
                    <div className={classes.progressBar}>
                        <LinearProgressWithLabel value={progress} />
                    </div>
                    <Box textAlign="center" mt={5}>
                        <Typography variant="body2">{tokensSold} / {tokensAvailable} tokens vendidos</Typography>
                        <Divider className={classes.divider} />
                        <br />
                        <Typography variant="body2">Tu cuenta es: <code>{account}</code></Typography>
                    </Box>
                </Grid>
            </Grid>
            <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
                <Alert severity={alert.tipo} onClose={handleCloseSnack}>
                    {alert.mensaje}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Main
