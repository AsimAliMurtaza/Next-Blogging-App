import { Box, Container, Heading, Image, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import RootLayout from "@/app/layout";
import "../../app/globals.css";
import { Center } from "@chakra-ui/react";
import Newsletter from "@/Components/Newsletter";

const BlogPost = () => {
  const router = useRouter();
  const { title, state } = router.query;
  // Define a type for blog data to ensure type safety
  interface Blog {
    author: string;
    date: string;
    title: string;
    description: string;
    detailedDescription: string;
    link: string;
    altName: string;
  }

  const [blogData, setBlogData] = useState<Blog | null>(null);

  useEffect(() => {
    if (state) {
      const parsedState = Array.isArray(state) ? state[0] : state;
      const blog = JSON.parse(decodeURIComponent(parsedState)) as Blog; // Ensure correct parsing
      setBlogData(blog);
    }
  }, [state]);

  if (!blogData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner size="xl" />
      </div>
    );
  }

    
  return (
    <RootLayout>
      <Container maxW="container.xl" paddingX={{ base: 5, md: 10 }} paddingTop={2}>

          <div className="container mx-auto py-10 px-4">
            <Heading
              size="sm"
              className="font-thin my-5"
              sx={{
                textAlign: "center",
                marginBottom: "-10",
                color: "silver",
              }}
            >
              {blogData.date}
            </Heading>
          </div>
          <div>
            <Heading
              size="sm"
              className="font-thin"
              sx={{
                color: "gray.500",
                marginTop: "-14",
                textAlign: "center",
              }}
            >
              {blogData.author}
            </Heading>
          </div>
          <div>
            <Heading
              as="h1"
              size={{ base: "xl", md: "2xl" }}
              className="font-bold my-5"
              sx={{
                textAlign: "center",
                marginBottom: "-6",
              }}
            >
              {title}
            </Heading>
          </div>
          <div className="container mx-auto py-10 px-4">
            <Box
              sx={{
                textAlign: "center",
                textJustify: "inter-word",
                fontSize: { base: "1.2rem", md: "1.4rem" },
                color: "gray",
                marginBottom: "-10",
              }}
            >
              <p>{blogData.description}</p>
            </Box>
          </div>
          <div className="container mx-auto py-10 px-4">
            <Center>
              <Image
                src={blogData.link}
                alt={blogData.altName}
                minWidth={{ base: "90%", md: "60%" }}
                width={{ base: "100%", md: "70%" }}
                height={{ base: "300px", md: "500px" }}
                marginTop={-3}
                objectFit="cover"
                className="rounded-lg"
              />
            </Center>
          </div>
          <div className="container mx-auto py-10 px-4">
            <Box
              sx={{
                textAlign: "left",
                textJustify: "inter-word",
                fontSize: { base: "1rem", md: "1.3rem" },
                color: "gray",
              }}
            >
              <p>{blogData.detailedDescription}</p>
            </Box>
          </div>
      </Container>
      <Newsletter />
    </RootLayout>
  );
};

export default BlogPost;