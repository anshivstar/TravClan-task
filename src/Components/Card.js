import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        backgroundColor: "rgba(224, 224, 224, 0.5)"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    head: {
        fontWeight: "bold",
        marginTop : "10px"
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard({ dta }) {
    const classes = useStyles();


    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h6" component="h3">
                    Bid : {dta.amount}
                </Typography>
                <Typography variant="h5" component="h2" className={classes.head}>
                    Brand : {dta.carTitle}
                </Typography>


            </CardContent>

        </Card>
    );
}