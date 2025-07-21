interface TinaProviderProps {
  children: React.ReactNode;
}

export default function TinaProvider({ children }: TinaProviderProps) {
  // TinaCMS visual editing is enabled through the admin panel
  // The app doesn't need a special provider - TinaCMS handles it in the admin preview
  return <>{children}</>;
}