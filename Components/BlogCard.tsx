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
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";

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

export default function BlogCard({ params }: { params: Blog }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleReadMore = () => {
    // Set loading to true to show spinner
    setLoading(true);

    // Simulate an asynchronous action (e.g., fetching more content)
    setTimeout(() => {
      // After some delay (simulating async operation), reset loading
      setLoading(false);
      onClickHandler();
      // TODO: Add logic to actually expand content or navigate to a new page
    }, 1500); // Example delay of 1.5 seconds
  };

  const onClickHandler = () => {
    const state = encodeURIComponent(JSON.stringify(params));
    router.push(`/blog/${encodeURIComponent(params.title)}?state=${state}`);
  };
  return (
    <Container
      maxW="container.xl"
      paddingLeft={10}
      paddingTop={10}
      paddingRight={12}
    >
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
            onClick={onClickHandler}
            style={{ cursor: "pointer" }}
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
                {params.date}, by {params.author}
              </Text>
              <Heading
                size="xl"
                style={{ cursor: "pointer" }}
                onClick={onClickHandler}
              >
                {params.title}
              </Heading>
              <Text py={4}>{params.description}</Text>
              <CardFooter padding="0">
                {loading ? (
                  <Spinner size="lg" marginLeft={50}/>
                ) : (
                  <Button
                    variant="solid"
                    colorScheme="green"
                    padding={5}
                    onClick={handleReadMore}
                  >
                    {params.buttonText}
                  </Button>
                )}
              </CardFooter>
            </CardBody>
          </Stack>
        </Card>
      </Flex>
    </Container>
  );
}
