import { Title } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
  return (
    <>

        <Title>Old Page</Title>

        <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
