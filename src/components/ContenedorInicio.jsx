import React, { useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core"
import '../App.css'
import Web3 from 'web3'
import AtaraxiaToken from '../abis/AtaraxiaToken.json'
import AtaraxiaTokenVenta from '../abis/AtaraxiaTokenVenta.json'
//loading
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import Main from './Main'
//snackbar y alert
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

const estilos = makeStyles((theme) => ({
    //loading
    loading: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}))

//snackbar y alert
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ContenedorInicio = () => {

    const classes = estilos()

    const [account, setAccount] = useState('0x0')
    const [ataraxiaToken, setAtaraxiaToken] = useState({})
    const [ataraxiaTokenVenta, setAtaraxiaTokenVenta] = useState({})
    //loading
    const [openLoading, setOpenLoading] = useState(true)
    //alert
    const [openSnack, setOpenSnack] = useState(false)
    const [alert, setAlert] = useState({})

    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnack(false);
    };

    useEffect(() => {
        const exec = async () => {
            try {
                await loadWeb3().then(async () => {
                    await loadBlockchainData().then(async () => {
                        setOpenLoading(false)
                    });
                });

            } catch (error) {
                setAlert({
                    mensaje: 'Error cargando datos',
                    tipo: 'error'
                })
                setOpenSnack(true)
            }
        };
        exec();
    }, []);

    const loadWeb3 = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            //setWeb3Provider(window.web3)
        }
        else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
            //setWeb3Provider(window.web3)
        }
        else {
            setAlert({
                mensaje: 'Navegador no Ethereum detectado. considera instalar Metamask',
                tipo: 'error'
            })
            setOpenSnack(true)
        }
    }

    const loadBlockchainData = async () => {
        const web3 = window.web3
        const accounts = await web3.eth.getAccounts()
        setAccount(accounts[0])
        const networkId = await web3.eth.net.getId()
        // Load AtaraxiaToken
        const ataraxiaTokenData = AtaraxiaToken.networks[networkId]
        if (ataraxiaTokenData) {
            const ataraxiaToken = new web3.eth.Contract(AtaraxiaToken.abi, ataraxiaTokenData.address)
            setAtaraxiaToken(ataraxiaToken)
        } else {
            setAlert({
                mensaje: 'El contrato de AtaraxiaToken no se implementó en la red detectada',
                tipo: 'error'
            })
            setOpenSnack(true)
        }
        // Load AtaraxiaTokenVenta
        const ataraxiaTokenVentaData = AtaraxiaTokenVenta.networks[networkId]
        if (ataraxiaTokenVentaData) {
            const ataraxiaTokenVenta = new web3.eth.Contract(AtaraxiaTokenVenta.abi, ataraxiaTokenVentaData.address)
            setAtaraxiaTokenVenta(ataraxiaTokenVenta)
        } else {
            setAlert({
                mensaje: 'El contrato de AtaraxiaToken no se implementó en la red detectada',
                tipo: 'error'
            })
            setOpenSnack(true)
        }
    }

    return (
        <div>
            <Backdrop className={classes.loading} open={openLoading}>
                <CircularProgress color="inherit" />
            </Backdrop>
            {!openLoading ? (
                <Main
                    account={account}
                    ataraxiaToken={ataraxiaToken}
                    ataraxiaTokenVenta={ataraxiaTokenVenta}
                />
            ) : null}
            <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
                <Alert severity={alert.tipo} onClose={handleCloseSnack}>
                    {alert.mensaje}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default ContenedorInicio
