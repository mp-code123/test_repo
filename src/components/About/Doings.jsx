import { Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { myCards1 } from '../SuccessCards/MyCards'

const Doings = () => {
    return (
        <Stack mt={5}>
            <Typography variant='h3' mb={5}>
                My Doings
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>

                {myCards1.map((card, i) => {
                    return (
                        <Grid item xs={6} sx={{ minWidth: { md: 400 }, paddingLeft: 2, }}>

                            <Card variant="outlined">

                                <CardContent>
                                    <Typography sx={{ fontSize: 25, fontStyle: 'bold' }} variant='h1' gutterBottom>
                                        {card.title}
                                    </Typography>
                                    <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                                        {card.desc}
                                    </Typography>


                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>

        </Stack>
    )
}

export default Doings
