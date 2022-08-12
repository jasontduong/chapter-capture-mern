import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
        gap: '10px',
        margin: '0px',
        flex: '1',
        backgroundColor: '#E9E9E9',

    },
    heading: {
        color: 'rgba(0,0,0, 1)',
        letterSpacing: '-3px',
        paddingBottom: '13px',

    },
    image: {
        marginLeft: '15px',
    },

    mainContain: {
        marginTop: theme.spacing(6),

    },
    [theme.breakpoints.down('sm')]: {
        appBar: {
            justifyContent: 'center',
        },
        image: {
            width: '75px',
            marginLeft: '0px',
        },
        heading: {
            fontSize: '3rem',
        },
    }
}));