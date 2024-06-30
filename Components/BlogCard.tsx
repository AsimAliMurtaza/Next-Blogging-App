import {
  Button,
  Heading,
  Image,
  Stack,
  Text,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Container,
} from "@chakra-ui/react";

type Blog = {
  title: string;
  description: string;
  buttonText: string;
  link: string;
  altName: string;
  date: string;
};

export default function BlogCard({ params }: { params: Blog }) {
  return (
    <Container maxW="container.xl" paddingLeft={10} paddingTop={10} paddingRight={12}>
      <Flex direction="column" align="center" height="100%">
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="ghost"
        >
          <Image
            objectFit="cover"
            minW={{ base: "100%", sm: "50%" }}
            borderRadius={{ base: "20px", sm: "md" }}
            height={{ base: "300px", sm: "500px" }}
            src={params.link}
            alt={params.altName}
          />

          <Stack
            spacing={{ base: 4, md: 8 }}
            direction="column"
            flexWrap="wrap"
            justify="flex-start"
            align="flex-start"
            p={5}
          >
            <CardBody>
              <Text py={2} color="gray.500">
                {params.date}
              </Text>
              <Heading size="xl">{params.title}</Heading>
              <Text py={4}>{params.description}</Text>
              <CardFooter padding="0">
                <Button
                  variant="solid"
                  colorScheme="green"
                  padding={5}
                >
                  {params.buttonText}
                </Button>
              </CardFooter>
            </CardBody>
          </Stack>
        </Card>
      </Flex>
    </Container>
  );
}
