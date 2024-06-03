import React from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: '%s @ Aaron Clark',
    default: 'Hello @ Aaron Clark', // a default is required when creating a template
  },
}


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  } 