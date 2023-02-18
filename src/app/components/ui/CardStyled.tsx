import React from 'react'

import { Card, CardContent, CardActionArea } from '@mui/material';


export default function CardStyled({
    children,
}: {
    children: React.ReactNode,
}) {
  return (
    <Card
    >
        <CardActionArea>
            <CardContent>
                {
                    children
                }
            </CardContent>
        </CardActionArea>
    </Card>
  )
}
