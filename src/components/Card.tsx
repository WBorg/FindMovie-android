/*888888888888888888888888888888888888888888888888888888888888888888888888888*/

import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack
} from 'native-base'
import { AntDesign } from '@expo/vector-icons'

export type MovieProps = {
  id: string
  overview: string
  poster_path: string
  title: string
  backdrop_path: string
}

type Props = {
  movieProps: MovieProps
  pressFavorite: () => void
}

export function Card({ movieProps, pressFavorite }: Props) {
  return (
    <Box flexDirection="row" padding="4px">
      <Box>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500//${movieProps.poster_path}`
          }}
          width="140px"
          height="200px"
          resizeMode="cover"
          rounded="4px"
          alt="Capa do filme"
        />
        <Box flexDirection="row" justifyContent="center" my={1}>
          <Button
            w="100px"
            onPress={pressFavorite}
            bg="transparent"
            borderWidth={2}
            borderColor="yellow.600"
            _pressed={{ backgroundColor: 'green.500' }}
          >
            <Text color="white" fontSize="14px" fontFamily="body">
              Favoritar
            </Text>
          </Button>
        </Box>
      </Box>

      <Box
        ml={2}
        flex={1}
        // height="100%"
        overflow="hidden"
        // borderColor="red.900"
        // borderWidth={2}
      >
        <Heading
          alignSelf="center"
          color="white"
          fontFamily="heading"
          fontSize="lg"
          mb={4}
        >
          {movieProps.title}
        </Heading>
        <Box h="210px" w="full">
          <Text color="white" fontSize="xs">
            {movieProps.overview}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
