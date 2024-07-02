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
  Box,
} from "@chakra-ui/react";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

type Blog = {
  key: number;
  title: string;
  description: string;
  buttonText: string;
  link: string;
  altName: string;
  detailedDescription: string;
  date: string;
  author: string;
};

export default function BlogCardPopular({ params }: { params: Blog }) {
  const router = useRouter();

  const onClickHandler = () => {
    const state = encodeURIComponent(JSON.stringify(params));
    router.push(`/blog/${encodeURIComponent(params.title)}?state=${state}`);
  };
  return (
    <Container
      maxW="container.xl"
      paddingTop={0}
      paddingLeft="40px"
      paddingRight="55px"
      paddingBottom={0}
    >
      <Box
        sx={{
          "@media (max-width: 768px)": {
            paddingLeft: "0",
            paddingRight: "0",
          },
        }}
      >
        <Card
          variant="filled"
          minWidth={{ base: "100%", sm: "50%" }}
          maxWidth={{ base: "100%", sm: "70%" }}
          backgroundColor="#f5f5f5"
          height="auto"
          borderRadius={30}
          marginX="auto"
          marginBottom={10}
          marginTop={10}
          boxShadow="lg"
        >
          <Image
            objectFit="cover"
            borderRadius={30}
            height={{ base: "150px", sm: "300px" }}
            src={params.link}
            alt={params.altName}
            style={{ cursor: "pointer" }}
          />
          <CardBody>
            <Text py={2} color="gray.500">
              {params.date}, by {params.author}
            </Text>
            <Heading size="xl" cursor="pointer" onClick={onClickHandler}>
              {params.title}
            </Heading>
            <Text py={4}>{params.description}</Text>
            <CardFooter padding="0">
              <Button
                variant="solid"
                colorScheme="green"
                padding={5}
                onClick={onClickHandler}
              >
                {params.buttonText}
              </Button>
            </CardFooter>
          </CardBody>
        </Card>
      </Box>
    </Container>
  );
}
