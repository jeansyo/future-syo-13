"use client"
import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
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
    </div>
  )
}
