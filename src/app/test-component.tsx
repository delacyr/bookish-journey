'use client';

import { Button, createStyles, Select, TextInput } from '@mantine/core';
import { useRouter } from 'next/navigation';
import { ColorSchemeToggle } from '@components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '@components/Welcome/Welcome';

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  box: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
  const router = useRouter();

  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <div className={classes.box}>
      <TextInput label="Shipping address" placeholder="15329 Huston 21st" classNames={classes} />

      <Select
        style={{ marginTop: 20, zIndex: 2 }}
        data={['React', 'Angular', 'Svelte', 'Vue']}
        placeholder="Pick one"
        label="Your favorite library/framework"
        classNames={classes}

      />
        <Button variant="gradient" onClick={() => router.push('/perfil')} mt={20}>Perfil</Button>
      </div>
    </>
  );
}
