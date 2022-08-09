import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    appBar: {
        borderRadius: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
        gap: '10px',
        margin: '0px',
        flex: '1',
        overflow: 'hidden',
        backgroundColor: '#E9E9E9'
        
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
        paddingTop: '25px',
        
    },
}));