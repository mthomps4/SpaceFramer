import React from 'react';
import Head from 'next/head';
import { Box, Button, Center, Circle, Flex, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';

const line1 = 'Searching...';
const line2 = 'Error: ';
const line3 = 'Code 404 - Location not found';
const line4 = 'Overriding autopilot...';
const line5 = 'Manual navigation reinstated, please return home';

const body = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      staggerChildren: 1.5,
    },
  },
};

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      staggerChildren: 0.05,
    },
  },
};

const button = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 10,
      staggerChildren: 0.05,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function Space() {
  return (
    <>
      <Head>
        <title>Space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex flexDirection="column" width="100%">
        <Box
          py={10}
          px={10}
          width="70%"
          position="relative"
          top="0%"
          left="15%"
          borderRadius="25"
          bgImage="linear-gradient(rgba(15, 194, 237, 0.7),rgba(15, 194, 237, 0))"
          bgPosition="center"
          bgRepeat="no-repeat"
          color="white"
          fontWeight="bold"
        >
          <motion.p
            className="load-screen--body"
            variants={body}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={sentence}>
              {line1.split('').map((char, index) => {
                return (
                  <motion.span key={char + '-' + index} variants={letter}>
                    <Box
                      display="inline-block"
                      w="16px"
                      bgColor="rgba(0, 0, 0, .3)"
                      px="1"
                      mb={1}
                      textAlign="center"
                    >
                      {char}
                    </Box>
                  </motion.span>
                );
              })}
            </motion.p>

            <motion.p variants={sentence}>
              {line2.split('').map((char, index) => {
                return (
                  <motion.span key={char + '-' + index} variants={letter}>
                    <Box
                      display="inline-block"
                      w="16px"
                      bgColor="rgba(255, 0, 0, .4)"
                      px="1"
                      mb={1}
                      textAlign="center"
                    >
                      {char}
                    </Box>
                  </motion.span>
                );
              })}
            </motion.p>

            <motion.p variants={sentence}>
              {line3.split('').map((char, index) => {
                return (
                  <motion.span key={char + '-' + index} variants={letter}>
                    <Box
                      display="inline-block"
                      w="16px"
                      bgColor="rgba(255, 0, 0, .4)"
                      px="1"
                      mb={1}
                      textAlign="center"
                    >
                      {char}
                    </Box>
                  </motion.span>
                );
              })}
            </motion.p>

            <motion.p variants={sentence}>
              {line4.split('').map((char, index) => {
                return (
                  <motion.span key={char + '-' + index} variants={letter}>
                    <Box
                      display="inline-block"
                      w="16px"
                      // bgColor="rgba(255, 255, 0, .3)"
                      px="1"
                      mb={1}
                      textAlign="center"
                    >
                      {char}
                    </Box>
                  </motion.span>
                );
              })}
            </motion.p>

            <motion.p variants={sentence}>
              {line5.split('').map((char, index) => {
                return (
                  <motion.span key={char + '-' + index} variants={letter}>
                    <Box
                      display="inline-block"
                      w="16px"
                      // bgColor="rgba(255, 255, 0, .3)"
                      px="1"
                      textAlign="center"
                    >
                      {char}
                    </Box>
                  </motion.span>
                );
              })}
            </motion.p>
          </motion.p>
        </Box>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                delay: 8,
                repeat: Infinity,
              },
            },
          }}
          // variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          // transition={{ duration: 2, delay: 1, repeat: 1 }}
        >
          <Circle
            bgColor={'rgba(0, 230, 255, .5)'}
            position="absolute"
            top="40%"
            left="80%"
            size="20px"
          >
            {' '}
          </Circle>
        </motion.div>

        <Box position="relative" top="20%" left="83%">
          <motion.button
            className="load-screen--Button"
            variants={button}
            initial="hidden"
            animate="visible"
          >
            <NextLink href="/">
              <Link href="" bgColor="teal.400" color="teal.800" px="5" py="3" borderRadius={20}>
                Navigate Home
              </Link>
            </NextLink>{' '}
          </motion.button>
        </Box>
      </Flex>
    </>
  );
}

export default Space;
