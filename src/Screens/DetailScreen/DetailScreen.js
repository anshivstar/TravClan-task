import React, { useContext } from 'react'
import { DataContext } from '../../ContextApi/data'
import Grid from '@material-ui/core/Grid';
import Card from '../../Components/Card';
const DetailScreen = ({ match }) => {

    const { data, setData } = useContext(DataContext)

    var datas = data.find((a) => a.id == match.params.id)
    return (
        <div>
            <Grid container spacing={4} style={{ marginTop: "2rem", width: "90%", margin: "auto" }}>

                {
                    datas && datas.bids.map((dta) => (
                        <Grid item xs={6} sm={4}>
                            <Card dta={dta} />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default DetailScreen
