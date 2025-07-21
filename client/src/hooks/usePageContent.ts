import { useQuery } from '@tanstack/react-query';
import { loadPageContent, loadFAQContent, loadScreeningContent } from '@/lib/tina';

export function usePageContent(pageName: string) {
  return useQuery({
    queryKey: ['pageContent', pageName],
    queryFn: () => loadPageContent(pageName),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useFAQContent() {
  return useQuery({
    queryKey: ['faqContent'],
    queryFn: loadFAQContent,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function useScreeningContent(screeningType: string) {
  return useQuery({
    queryKey: ['screeningContent', screeningType],
    queryFn: () => loadScreeningContent(screeningType),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}