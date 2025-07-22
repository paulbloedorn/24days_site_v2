'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import TinaProvider from '@/components/TinaProvider';
import { useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TinaProvider>
        <TooltipProvider>
          <div className="font-body bg-cream-100 text-gray-800">
            <Toaster />
            {children}
          </div>
        </TooltipProvider>
      </TinaProvider>
    </QueryClientProvider>
  );
}