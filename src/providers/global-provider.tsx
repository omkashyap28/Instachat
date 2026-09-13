import React from "react"
import { ThemeProvider } from "./theme-provider"
import { ClerkProvider } from "@clerk/nextjs"

export const GlobalProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <ClerkProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ClerkProvider>
  )
}
