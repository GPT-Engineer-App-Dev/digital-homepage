import { Box, Flex, Text, VStack, Heading, Link, Button } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex as="header" justifyContent="space-between" p={4} bg="gray.100">
        <Heading size="lg">My Portfolio</Heading>
        <VStack as="nav" spacing={4} align="flex-end">
          <Link href="#about" p={2}>About</Link>
          <Link href="#portfolio" p={2}>Portfolio</Link>
          <Link href="#contact" p={2}>Contact</Link>
        </VStack>
      </Flex>
      <Flex direction="column" align="center" id="about" p={10}>
        <Heading mb={4}>About Me</Heading>
        <Text fontSize="lg" mb={6}>I am a passionate web developer with a knack for creating visually appealing and functional websites.</Text>
      </Flex>
      <Flex direction="column" align="center" id="portfolio" p={10} bg="gray.50">
        <Heading mb={4}>Portfolio</Heading>
        <Text fontSize="lg" mb={6}>Here are some of my recent projects.</Text>
        {/* Portfolio items would be listed here */}
      </Flex>
      <Flex direction="column" align="center" id="contact" p={10}>
        <Heading mb={4}>Contact Me</Heading>
        <VStack spacing={3}>
          <Button leftIcon={<FaEnvelope />} colorScheme="teal">Email Me</Button>
          <Button leftIcon={<FaGithub />} colorScheme="gray">GitHub</Button>
          <Button leftIcon={<FaLinkedin />} colorScheme="blue">LinkedIn</Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;