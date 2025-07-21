// Placeholder TinaProvider - will be updated once TinaCMS is properly configured
interface TinaProviderProps {
  children: React.ReactNode;
}

export default function TinaProvider({ children }: TinaProviderProps) {
  // For now, just return children without TinaCMS wrapper
  // This will be updated once we have proper TinaCMS setup
  return <>{children}</>;
}