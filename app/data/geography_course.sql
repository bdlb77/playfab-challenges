insert into public.courses (id, title, description, courseDate) values
(3, 'Geography', 'the study of the physical features of the earth and its atmosphere', '2023-01-10T00:00:00.000+00:00');

intert into public.modules(id, title, description, course_id) values
(6, 'Human Geography', 'Studies of the human race', 3),
(7, 'Physical Geography', 'The study of the natural characteristics of the Earth', 3);

insert into public.lessons(id, title, description, module_id) values
(16, 'Population Backgrounds in Pangea', 'A deep look into the historical populations of the supercontinent', 6),
(17, 'Regional Organization', 'How humans organize themselves based in particular regions ', 6),
(18, 'Landmass Charting', 'How to chart ladmasses', 7),
(19, 'Icecaps', 'A prfound dive into Earth icecaps', 7);
