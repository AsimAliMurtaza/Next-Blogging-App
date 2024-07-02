import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Container,
  Box,
  FormHelperText,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";

export default function Newsletter() {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const clearFormData = () => {
    setEmail("");
  };
  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }

    // Reset error message if email is provided
    setError("");

    // Proceed with your subscription logic here
    showToast(); // Assuming showToast is a function to display a toast or message
    clearFormData();

  };
  const showToast = () => {
    toast({
      title: "Subscribed!",
      description: "You have successfully subscribed to our newsletter.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };
  return (
    <Container
      maxW="container.xl"
      paddingTop={20}
      paddingLeft="40px"
      paddingRight="55px"
      paddingBottom={5}
    >
      <Box
        padding="40px"
        background={"gray.60"}
        borderRadius="10px"
        borderWidth="2px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <FormControl>
          <FormLabel fontSize="20px" textAlign="center" marginBottom="10px">
            Subscribe to our Newsletter
          </FormLabel>
          <Input
            type="email"
            colorScheme="teal"
            variant="filled"
            value={email}
            onChange={handleInputChange}
            isInvalid={!!error}
          />
          <FormHelperText textAlign="center" color="red.500">
            {error}
          </FormHelperText>
          <Button
            type="submit"
            colorScheme="teal"
            variant="ghost"
            marginTop="10px"
            onClick={handleSubmit as any}
          >
            Subscribe
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
};
