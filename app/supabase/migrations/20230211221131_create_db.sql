DROP table if exists public.courses cascade;
DROP table if exists public.modules cascade;
DROP table if exists public.lessons;

create table public.courses (
  id integer generated by default as identity primary key,
  inserted_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  description text,
  courseDate timestamp with time zone not null,
  completed boolean default false
);

create table public.modules (
  id integer generated by default as identity primary key,
  inserted_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  description text,
  completed boolean default false,
  course_id integer references public.courses on delete cascade not null
);


create table public.lessons (
  id integer generated by default as identity primary key,
  inserted_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  description text,
  completed boolean default false,
  module_id integer references public.modules on delete cascade not null
);

insert into public.courses (id, title, description, courseDate) values
(1, 'Math', 'Basic Math Course', '2022-08-01T00:00:00.000+00:00'),
(2, 'English', 'English 101 that will cover the basics.', '2022-08-01T00:00:00.000+00:00');



insert into public.modules (id, title, description, course_id) values
(1, 'Intro to Logic', 'Introduction into Logic', 1),
(2, 'Intro to Calculus', 'Introduction into basics of Calculus', 1),
(3, 'Poetry', 'The poetic module to gain clarity', 2),
(4, 'Fantasy Authors', 'Basics of Fantasy. Get to know the greatest.', 2),
(5, 'Grammar', 'A comprehensive look at grammar.', 2);

insert into public.lessons (id, title, description, module_id) values
(1, 'Logical Statements', 'The most logical of statements', 1),
(2, 'Propositional Logic', 'The purpose of this assignment is to study a part of propositional calculus by simplifying and evaluating conditional statements', 1),
(3, 'Limits', 'What is the definition of a limit?', 2),
(4, 'Integrals', 'A function which may express the area under the curve of a graph of the function', 2),
(5, 'Differencial Calculus', 'A method which deals with the rate of change of one quantity with respect to another', 2),
(6, 'Haikus', 'A 3 line poem with seventeen syllables', 3),
(7, 'Sonnet', 'Traditionally, sonnets are made up of 14 lines and usually deal with love', 3),
(8, 'Acrostic', 'This type of poetry spells out a name, word, phrase or message with the first letter of each line of the poem', 3),
(9, 'Limerick', 'They have a set rhyme scheme of AABBA, with lines one, two and five all being longer in length than lines three and
four', 3),
(10, 'George R.R. Martin', 'Must Read: A Song of Ice and Fire', 4),
(11, 'Brandon Sanderson', 'He is known for the Mistborn trilogy and Stormlight Archive', 4),
(12, 'John Ronald Reuel Tolkien', 'He is best known for the Hobbit and Lord of the Rings trilogy.', 4),
(13, 'Comparative Grammar', 'The analysis and comparison of the grammatical structures of related language', 5),
(14, 'Generative Grammar', 'The rules determining the structure and interpretation of sentences that speakers accept as belonging to the language', 5),
(15, 'Pedegogical Grammar', 'Grammatical analysis and instruction designed for second-language students', 5);
