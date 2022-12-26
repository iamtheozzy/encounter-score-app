import React from 'react';
import Head from 'next/head';
import { Nav } from '../../components/nav';
import { Main } from '../../components/main';
import { useForm } from 'react-hook-form';
import { teamInfo, pointOptions } from '../../contstants';
import {
  Container,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Select,
  Heading,
  Text
} from '@chakra-ui/react';

export default function UpdateScorePage() {
   const [formData, setFormData] = React.useState({
      team: '',
      points: '',
      reason: ''
   });
   const {
     handleSubmit,
     register,
     reset,
     formState: { errors, isSubmitting, isSubmitSuccessful }
   } = useForm();
   const {
     games,
     spirit,
     unicorn,
     idols,
     kindness,
     behavior,
     strayCat,
     other
   } = pointOptions;

   const onSubmit = async (data) => {
    await fetch('/api/score/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    setFormData(data);
   };

  return (
    <>
      <Head>
        <title>Score Updater</title>
        <meta name="description" content="Update Encounter score here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Nav title="Update Score" />
        <Container maxW="container.xl">
          <Flex mt={20} justifyContent="space-around" alignItems="center">
            <form
              onSubmit={handleSubmit(onSubmit)}
              onReset={() =>
                reset({
                  team: '',
                  points: '',
                  reason: ''
                })
              }
            >
              <FormControl
                isRequired
                bg="gray.500"
                py={10}
                px={5}
                borderRadius="base"
              >
                <FormLabel color="white" htmlFor="team">
                  Team
                </FormLabel>
                <Select
                  id="team"
                  placeholder="Select a team"
                  color="white"
                  mb={5}
                  isRequired
                  {...register('team', { required: true })}
                >
                  <option value={teamInfo.red.dbName}>
                    {teamInfo.red.teamName}
                  </option>
                  <option value={teamInfo.blue.dbName}>
                    {teamInfo.blue.teamName}
                  </option>
                </Select>
                <FormLabel color="white" htmlFor="points">
                  Points
                </FormLabel>
                <Select
                  id="points"
                  placeholder="Points?"
                  color="white"
                  mb={5}
                  isRequired
                  {...register('points', { required: true })}
                >
                  <option value={games.first}>
                    First Place: {games.first}
                  </option>
                  <option value={games.second}>
                    Second Place: {games.second}
                  </option>
                  <option value={spirit}> Spirit: {spirit}</option>
                  <option value={unicorn}> Unicorn: {unicorn}</option>
                  <option value={idols}> Idols: {idols}</option>
                  <option value={kindness}> Kindness: {kindness}</option>
                  <option value={behavior}> Behavior: {behavior}</option>
                  <option value={strayCat}> Stray Cat: {strayCat}</option>
                  <option value={other.other1}> Other: {other.other1}</option>
                  <option value={other.other2}> Other: {other.other2}</option>
                </Select>
                <FormLabel color="white" htmlFor="reason">
                  Reason
                </FormLabel>
                <Input
                  id="reason"
                  variant="outline"
                  type="text"
                  placeholder="Reason"
                  isRequired={false}
                  color="white"
                  {...register('reason')}
                />
                <FormHelperText color="white">
                  What they do to deserve these points?
                </FormHelperText>
                <FormErrorMessage>
                  {errors.reason && errors.reason.message}
                </FormErrorMessage>
              </FormControl>
              <Flex justifyContent="space-between" alignItems="center" mt={4}>
                <Button colorScheme="red" type="reset">
                  Reset
                </Button>
                <Button
                  colorScheme="teal"
                  isLoading={isSubmitting}
                  type="submit"
                  loadingText="Submitting"
                  isDisabled={isSubmitSuccessful}
                >
                  Submit
                </Button>
              </Flex>
              {isSubmitSuccessful && (
                <>
                <Heading as="h2" size="m" color="teal" mt={10}>
                  Points submitted succesfully 😸
                </Heading>
                <Container bg='teal' color='white'>
                  <Text>Team: {formData.team}</Text>
                  <Text>Points: {formData.points}</Text>
                  <Text>Reason: {formData.reason}</Text>
                </Container>
                <Text fontWeight="bold" color="teal" mt={3}>Reset form to add more points</Text>
                </>
              )}
            </form>
          </Flex>
        </Container>
      </Main>
    </>
  );
}
