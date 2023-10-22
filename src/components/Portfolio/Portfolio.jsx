import { Card, CardContent, CardMedia, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { projects } from '../Resume/Skills'

const Portfolio = () => {
  return (
    <Stack sx={{ pl: { xs: 2, md: 5, lg: 10 }, pr: { xs: 2, md: 5, lg: 10 }, pt: { xs: 10 ,md: 10 } }}>
      <Stack>
        <Typography variant='h3' mb={5}>
          Projects
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>

          {projects.map((card, i) => {
            return (
              <Grid item xs={6} sx={{ minWidth: {md: 400} ,paddingLeft: 2, }}>
                <Card variant="outlined">
                  <CardMedia
                    sx={{ height: 140 }}
                    image='https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60'
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {card.title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {card.subtitle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>

      </Stack>
    </Stack>
  )
}

export default Portfolio
