insert into public.courses (id, title, description, courseDate) values
(3, 'Geography', 'Geography 101 on Physical and Human Geography', '2022-08-01T00:00:00.000+00:00');

insert into public.modules (id, title, description, course_id) values
(6, 'Physical Geography', 'The study of the natural environment', 3),
(7, 'Human Geography', 'The study of human populations', 3);

insert into public.lessons (id, title, description, module_id) values
(16, 'Bio Geography', 'study of plant and animal life ', 6),
(17, 'Climatology', 'study of long term weather', 6),
(18, 'Pedology', 'study of soils', 6),
(19, 'Cultural Geography', 'Study of relationships between different cultures and place', 7),
(20, 'Development Geography', 'The study of the quality of life and standards of living within different communities', 7);
