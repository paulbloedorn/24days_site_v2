// For now, we'll load content directly from JSON files
// This will be replaced with TinaCMS GraphQL client once properly configured

export async function loadPageContent(pageName: string) {
  try {
    const response = await fetch(`/content/pages/${pageName}.json`);
    if (!response.ok) throw new Error('Content not found');
    return await response.json();
  } catch (error) {
    console.error('Failed to load page content:', error);
    return null;
  }
}

export async function loadFAQContent() {
  try {
    const response = await fetch('/content/faq/general.json');
    if (!response.ok) throw new Error('FAQ content not found');
    return await response.json();
  } catch (error) {
    console.error('Failed to load FAQ content:', error);
    return null;
  }
}

export async function loadScreeningContent(screeningType: string) {
  try {
    const response = await fetch(`/content/screenings/${screeningType}.json`);
    if (!response.ok) throw new Error('Screening content not found');
    return await response.json();
  } catch (error) {
    console.error('Failed to load screening content:', error);
    return null;
  }
}