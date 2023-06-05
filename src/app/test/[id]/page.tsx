"use client"

import Image from 'next/image'
import styles from './page.module.css'
import TestComponent from '@/components/test/test'
import { useAuth } from '@/hooks/useAuth'

export default function Home({ params }: { params: { id: string }}) {

  const { userKey } = useAuth();

  return (
    <div className={styles.container}>
      
      <h1 className={styles.text}>HELLO WORLD - { params.id }x</h1>
      <h1 className={styles.text}>HELLO WORLD - { userKey }x</h1>

      <TestComponent />
      
    </div>
  )
}
