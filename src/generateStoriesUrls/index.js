const generateStoryUrl = (storybookUrl, storyPathComponent, storyPathVariant) => {
  if (!storybookUrl || !storyPathComponent || !storyPathVariant) return '';
  return `${storybookUrl}/index.html?path=/docs/${storyPathComponent}--${storyPathVariant}`;
};

const generateStoryPathComponent = (storyTitle) =>
  storyTitle?.split('/').join('-').toLowerCase();

const generateStoryPathVariant = (storyVariant) =>
  storyVariant
    ?.split(/(?=[A-Z])/)
    .join('-')
    .toLowerCase();

const generateStoriesUrls = (storybookUrl, storybookStructure) => {
  if (!storybookUrl || !storybookStructure) return [];
  return storybookStructure.reduce((storiesUrlsAcc, stories) => {
    if (!stories.title || !stories.variants) return storiesUrlsAcc;
    const storyPathComponent = generateStoryPathComponent(stories.title);
    const storiesUrls = stories.variants
      .map((storyVariant) =>
        generateStoryUrl(storybookUrl, storyPathComponent, generateStoryPathVariant(storyVariant))
      )
      .filter((url) => url);
    return [...storiesUrlsAcc, ...storiesUrls];
  }, []);
};

export default generateStoriesUrls
