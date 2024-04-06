import { Center, Flex, Text } from '@yamada-ui/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
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
    </Flex>
  )
}
