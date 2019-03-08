import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import OcupationGraph from './OcupationGraph'
import BarGraph from './BarGraph'

class GeneralInfo extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Typography variant="h4" style={{paddingBottom: 20}}>Información General</Typography>
                <Grid container spacing={24}>
                    <Grid item >
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Ocupación</Typography>
                                <OcupationGraph />
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card style={{ width: 'auto', height: 380}}>
                            <CardContent>
                                <Typography variant="h6">Ocupación</Typography>
                                <BarGraph />
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

export default GeneralInfo;