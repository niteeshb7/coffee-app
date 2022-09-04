import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";

import {ArrowForwardIos} from '@mui/icons-material'

export default function CoffeeMenu({setSelectedDrink, handleNext}) {

    const selectDrink = (drink) => {
        setSelectedDrink(drink);
        handleNext();
    }

    return (
        <React.Fragment>
            <Grid container spacing={3} >
                <Grid item xs={12}>
                    <Button variant="contained" endIcon={<ArrowForwardIos/>}
                            onClick={() => selectDrink('Hot Chocolate')}>
                        Hot Chocolate
                    </Button>
                </Grid>
                <Grid item xs={12} >
                    <Button variant="contained" endIcon={<ArrowForwardIos/>}
                            onClick={() => selectDrink('Latte')}>
                        Latte
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" endIcon={<ArrowForwardIos/>}
                            onClick={() => selectDrink('Tea')}>
                        Tea
                    </Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
