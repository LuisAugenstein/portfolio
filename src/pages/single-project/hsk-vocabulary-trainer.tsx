import React from 'react';
import PageScaffold from './generic/page-scaffold';
import ProjectCard, { TechStackItem } from './generic/ProjectCard';

import Image1 from '../../assets/projects/hsk-vocabulary-trainer/hsk-vocabulary-trainer.gif';

import flutterIcon from '../../assets/tech-stack-icons/flutter.svg';
import microsoftIcon from '../../assets/tech-stack-icons/microsoft.svg';

const markdownText = `
I created this project while preparing for the HSK-2 Chinese Test. 
For the first language level (HSK-1) there already are numerous free online sources available. 
However, those sources only provide free access to 300 words. 
If one wants to go further and pass the HSK-2 test, 600 words are needed, which are not free anymore. 
For that reason, I created my own Chinese vocabulary trainer application.
I found free JSON files containing all 5000 words needed to pass all HSK-test up to the 6th level and built 
a simple vocabulary question app using flutter. When I finished the application, 
I published it to the Microsoft Store and deployed the web version to Netlify.
`;

const images = [Image1];
const techStack: TechStackItem[] = [
  {
    icon: flutterIcon,
    name: 'Flutter',
    url: 'https://flutter.dev',
  },
  {
    icon: microsoftIcon,
    name: 'Microsoft Store',
    url: 'https://apps.microsoft.com/store/detail/hsk-vocabulary-trainer/9NX2B432WQ18?hl=de-de&gl=de',
  },
];

function HSKVocabularyTrainer(): JSX.Element {
  return (
    <PageScaffold title="HSK - Vocabulary Trainer" images={images} markdownText={markdownText}>
      <ProjectCard
        idea="learn chinese vocabularies to pass the hsk test."
        goal="implement a flutter app that can be deployed to the Microsoft store and the web."
        techStack={techStack}
        githubUrl="https://github.com/LuisAugenstein/hsk_vocabulary_trainer"
        btnText="Live Demo"
        btnUrl="https://www.youtube.com/watch?v=lFdZw2JB-hE"
      />
    </PageScaffold>
  );
}

export default HSKVocabularyTrainer;
