'use client'

import { Center, Flex, Text } from '@yamada-ui/react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { signIn } from 'next-auth/react'

export default function Header() {
  const { data: session, status } = useSession()

  return (
    <Flex
      as='header'
      height='64px'
      py={2}
      px={8}
      justifyContent='space-between'
    >
      <Center>
        <Image src='/logo.png' alt='Logo' width={32} height={36} />
        <Text fontSize={32} ml={2}>
          Extension Hub
        </Text>
      </Center>
      <Center as='nav' gap='md'>
        <Link href={''}>home</Link>
        <Link href={''}>home</Link>
        <Link href={''}>home</Link>
      </Center>
      status: {status}
      {status !== 'authenticated' && (
        <div>
          <p>あなたはログインしていません</p>
          <button onClick={() => signIn()}>googleでログイン</button>
        </div>
      )}
    </Flex>
  )
}
