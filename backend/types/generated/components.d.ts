import type { Schema, Struct } from '@strapi/strapi';

export interface EventScheduleEvent extends Struct.ComponentSchema {
  collectionName: 'components_event_schedule_events';
  info: {
    displayName: 'Event';
  };
  attributes: {
    conference: Schema.Attribute.String;
    date: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_sections';
  info: {
    displayName: 'AboutSection';
  };
  attributes: {
    AboutDescription: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    SectionTitle: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    HeroImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSpeaker extends Struct.ComponentSchema {
  collectionName: 'components_sections_speakers';
  info: {
    displayName: 'Speaker';
  };
  attributes: {
    bio: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    Role: Schema.Attribute.Text;
    url: Schema.Attribute.String;
  };
}

export interface SectionsSponsors extends Struct.ComponentSchema {
  collectionName: 'components_sections_sponsors';
  info: {
    displayName: 'sponsors';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    sponsorsLevel: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'event-schedule.event': EventScheduleEvent;
      'sections.about-section': SectionsAboutSection;
      'sections.hero': SectionsHero;
      'sections.speaker': SectionsSpeaker;
      'sections.sponsors': SectionsSponsors;
    }
  }
}
