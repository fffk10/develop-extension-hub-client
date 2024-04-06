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
    </Section>
  )
}
