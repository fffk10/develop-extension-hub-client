'use client'

import Section from '@/app/components/layout/section'
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Text,
} from '@yamada-ui/react'

const dummyData = [
  { name: '拡張機能1', description: '拡張機能1の説明', rating: 4 },
  { name: '拡張機能2', description: '拡張機能2の説明', rating: 3 },
  { name: '拡張機能3', description: '拡張機能3の説明', rating: 3 },
  { name: '拡張機能4', description: '拡張機能4の説明', rating: 3 },
  { name: '拡張機能5', description: '拡張機能5の説明', rating: 3 },
]

export default function Trend() {
  const fetchVSCode = async () => {
    const response = await fetch(
      'https://marketplace.visualstudio.com/_apis/public/gallery/extensionquery',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json;api-version=7.2-preview.1;excludeUrls=true',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          filters: [
            {
              criteria: [
                {
                  filterType: 8,
                  value: 'Microsoft.VisualStudio.Code',
                },
                {
                  filterType: 10,
                  value: 'vibrancy continue',
                },
                {
                  filterType: 12,
                  value: '37888',
                },
              ],
              pageNumber: 1,
              pageSize: 100,
              sortBy: 0,
              sortOrder: 0,
            },
          ],
          flags: 870,
        }),
      }
    )

    const data = await response.json()
    console.log(data)
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

      <Box mt={4}>
        <button onClick={fetchVSCode}>VS Code の拡張機能を取得</button>
      </Box>
    </Section>
  )
}
