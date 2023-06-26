import { UserInterface } from 'interfaces/user';
import { QuestionInterface } from 'interfaces/question';
import { GetQueryInterface } from 'interfaces';

export interface AnswerInterface {
  id?: string;
  content: string;
  user_id?: string;
  question_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  question?: QuestionInterface;
  _count?: {};
}

export interface AnswerGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  user_id?: string;
  question_id?: string;
}
