import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot, Stack } from 'expo-router';

const queryClient = new QueryClient()

export default function HomeLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack />;
    </QueryClientProvider>
  )
}