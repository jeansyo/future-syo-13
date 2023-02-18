"use client"
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import CardStyled from '../components/ui/CardStyled'
import VideoBannerStyled from '../components/ui/VideoBannerStyled'

export default function page() {
  return (
    <div
        className='w-full h-[95vh] relative'
    >
        <VideoBannerStyled
            src={'assets/videos/what-we-do.mp4'}
            loop={true}
        />
        <Box
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 flex flex-col justify-center items-center gap-4"
        >
          <Typography
            color="text.primary"
            fontWeight={700}
            className='text-5xl sm:text-7xl md:text-8xl lg:text-8xl 2xl:text-9xl text-center letter-spacing-[0.07em]'
          >
            Transformamos el <span
                className='animate-textGradient font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 m-0'
              >
                Futuro 
              </span> <span
                className='animate-textGradient font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 m-0'
              >Digital</span> de las empresas
          </Typography>
          <Typography
            color="text.secondary"
            fontWeight={400}
            className="text-2xl w-11/12 md:w-10/12 m-auto text-center"
          >
            Contruimos soluciones digitales que ayudan a las empresas a crecer y a sus clientes a ser más felices.
          </Typography>
          <Stack
            direction="row"
            gap={2}
          >
            <Button
            >
              Hola Mundo 2
            </Button>
            <Button
            >
              Hola Mundo
            </Button>
          </Stack>
        </Box>
        <Grid
          container
          spacing={2}
          p={2}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={3}
          >
            <CardStyled>
              <Typography
                  color="text.primary"
                  gutterBottom
                  fontSize={18}
                  fontWeight={600}
              >
                  Docs 
              </Typography>
              <Typography
                color="text.secondary"
                fontSize={14}
                fontWeight={400}
              >
                  Find in-depth information about Next.js features and API.
              </Typography>
            </CardStyled>
          </Grid> 
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={3}
          >
            <CardStyled>
              <Typography
                  color="text.primary"
                  gutterBottom
                  fontSize={18}
                  fontWeight={600}
              >
                  Docs 
              </Typography>
              <Typography
                color="text.secondary"
                fontSize={14}
                fontWeight={400}
              >
                  Find in-depth information about Next.js features and API.
              </Typography>
            </CardStyled>
          </Grid> 
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={3}
          >
            <CardStyled>
              <Typography
                  color="text.primary"
                  gutterBottom
                  fontSize={18}
                  fontWeight={600}
              >
                  Docs 
              </Typography>
              <Typography
                color="text.secondary"
                fontSize={14}
                fontWeight={400}
              >
                  Find in-depth information about Next.js features and API.
              </Typography>
            </CardStyled>
          </Grid> 
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={3}
          >
            <CardStyled>
              <Typography
                  color="text.primary"
                  gutterBottom
                  fontSize={18}
                  fontWeight={600}
              >
                  Docs 
              </Typography>
              <Typography
                color="text.secondary"
                fontSize={14}
                fontWeight={400}
              >
                  Find in-depth information about Next.js features and API.
              </Typography>
            </CardStyled>
          </Grid>  
        </Grid>
    </div>
  )
}
