// import React from 'react'
'use client'
import { useRouter } from 'next/router';

export default function getRoute() {
  // Calling useRouter() hook
  const router = useRouter()
  return router.pathname
}
