'use client'

import Section from '@/src/app/components/layout/section'
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  FileInput,
  Flex,
  Heading,
  Text,
} from '@yamada-ui/react'
import { useState } from 'react'

const dummyData = [
  { name: '拡張機能1', description: '拡張機能1の説明', rating: 4 },
  { name: '拡張機能2', description: '拡張機能2の説明', rating: 3 },
  { name: '拡張機能3', description: '拡張機能3の説明', rating: 3 },
  { name: '拡張機能4', description: '拡張機能4の説明', rating: 3 },
  { name: '拡張機能5', description: '拡張機能5の説明', rating: 3 },
]

export default function Trend() {
  const [file, setFile] = useState<File[] | undefined>(undefined)

  const handleImport = () => {
    console.log(file)
  }

  return (
    <Section>
      <Heading as='h2'>人気の拡張機能</Heading>

      <Flex gap={4} wrap='wrap'>
        {dummyData.map((data) => (
          <Card key={data.name} p={4} borderWidth={1} borderRadius='md'>
            <CardHeader>
              <Heading as='h3' size='md'>
                {data.name}
              </Heading>
            </CardHeader>

            <CardBody>
              <Text>{data.description}</Text>
              <Text>評価: {data.rating}</Text>
            </CardBody>
          </Card>
        ))}

        {dummyData.length === 0 && <Text>データがありません</Text>}
      </Flex>

      <Container>
        <FileInput value={file} onChange={setFile} placeholder='input file' />

        <Button onClick={handleImport}>Import</Button>
      </Container>
    </Section>
  )
}
