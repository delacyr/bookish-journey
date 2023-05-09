'use client';

import { Container, createStyles, Select, TextInput } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

const useStyles = createStyles((theme) => ({
  container: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  root: {
    position: 'relative',
  },

  input: {
    height: 'auto',
    paddingTop: 18,
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm,
    zIndex: 1,
  },
}));

export function Test() {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();

  return (
    <>
      <Container classNames={classes.container}>
      <Welcome />
      <ColorSchemeToggle />
      <TextInput label="Shipping address" placeholder="15329 Huston 21st" classNames={classes} />

      <Select
        style={{ marginTop: 20, zIndex: 2 }}
        data={['React', 'Angular', 'Svelte', 'Vue']}
        placeholder="Pick one"
        label="Your favorite library/framework"
        classNames={classes}
      />
      </Container>
    </>
  );
}
