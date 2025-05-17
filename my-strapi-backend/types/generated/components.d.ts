import type { Schema, Struct } from '@strapi/strapi';

export interface QuizClassScore extends Struct.ComponentSchema {
  collectionName: 'components_quiz_class_scores';
  info: {
    displayName: 'classScore';
  };
  attributes: {
    class: Schema.Attribute.Relation<'oneToOne', 'api::class.class'>;
    score: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'quiz.class-score': QuizClassScore;
    }
  }
}
