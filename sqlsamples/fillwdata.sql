INSERT INTO nomads VALUES (101, "test1@mail.com", "supersecure", "John Doe", "https://pbs.twimg.com/profile_images/884980031297961984/PNNTLOhK.jpg","im hip and cool and use js and web apps","DE89 3704 0044 0532 0130 00",NULL,NULL);
INSERT INTO nomads VALUES (102, "muthu@mail.com", "supersecure", "Muthupalaniappan Ramanathan", "https://d1bvpoagx8hqbg.cloudfront.net/259/c1104b89afcd82815fb24b301c0d04ab.jpg","i like java and android stuff idk",NULL,"OCBCSGSG","501123956001");
INSERT INTO nomads VALUES (103, "test3@mail.com", "supersecure", "Tan Ah Hock", "https://qph.fs.quoracdn.net/main-qimg-6666a7ec145e975ebdded1a2578e49ff","i am chinese lol",NULL,"CTBAAU2S","765674567456");

INSERT INTO skills VALUES (1, "Web Dev");
INSERT INTO skills VALUES (2, "Home Networking");
INSERT INTO skills VALUES (3, "HTML");
INSERT INTO skills VALUES (4, "CSS");
INSERT INTO skills VALUES (5, "Node.js");
INSERT INTO skills VALUES (6, "php");
INSERT INTO skills VALUES (7, "Server Admin");
INSERT INTO skills VALUES (8, "Database Design");
INSERT INTO skills VALUES (9, "mySQL");
INSERT INTO skills VALUES (10, "MongoDB");
INSERT INTO skills VALUES (11, "SQLite");
INSERT INTO skills VALUES (12, "Translation (English -> Mandarin)");
INSERT INTO skills VALUES (13, "Translation (Mandarin -> English)");
INSERT INTO skills VALUES (14, "Translation (English -> French)");
INSERT INTO skills VALUES (15, "Android App Development");
INSERT INTO skills VALUES (16, "Java");
INSERT INTO skills VALUES (17, "Swift");
INSERT INTO skills VALUES (18, "Video Editing");
INSERT INTO skills VALUES (19, "UX Design");
INSERT INTO skills VALUES (20, "Logo Design");
INSERT INTO skills VALUES (21, "Copywriting");
INSERT INTO skills VALUES (22, "Sales Management");
INSERT INTO skills VALUES (23, "Public Relations Management");

INSERT INTO nomads_skills VALUES (101, 1);
INSERT INTO nomads_skills VALUES (101, 3);
INSERT INTO nomads_skills VALUES (101, 4);
INSERT INTO nomads_skills VALUES (101, 5);
INSERT INTO nomads_skills VALUES (101, 10);
INSERT INTO nomads_skills VALUES (101, 17);
INSERT INTO nomads_skills VALUES (101, 19);
INSERT INTO nomads_skills VALUES (101, 20);
INSERT INTO nomads_skills VALUES (102, 2);
INSERT INTO nomads_skills VALUES (102, 6);
INSERT INTO nomads_skills VALUES (102, 7);
INSERT INTO nomads_skills VALUES (102, 8);
INSERT INTO nomads_skills VALUES (102, 9);
INSERT INTO nomads_skills VALUES (102, 11);
INSERT INTO nomads_skills VALUES (102, 15);
INSERT INTO nomads_skills VALUES (102, 16);
INSERT INTO nomads_skills VALUES (103, 1);
INSERT INTO nomads_skills VALUES (103, 3);
INSERT INTO nomads_skills VALUES (103, 4);
INSERT INTO nomads_skills VALUES (103, 5);
INSERT INTO nomads_skills VALUES (103, 12);
INSERT INTO nomads_skills VALUES (103, 13);
INSERT INTO nomads_skills VALUES (103, 19);
INSERT INTO nomads_skills VALUES (103, 20);
INSERT INTO nomads_skills VALUES (103, 22);
INSERT INTO nomads_skills VALUES (103, 23);
INSERT INTO nomads_skills VALUES (103, 21);

INSERT INTO companies VALUES (10, "tim@epic.com", "battleroyale", "Epic Games", "Founded in 1991, Epic Games is the creator of Fortnite, Unreal, Gears of War, Shadow Complex, and the Infinity Blade series of games. Epic's Unreal Engine technology brings high-fidelity, interactive experiences to PC, console, mobile, AR, VR and the Web. Unreal Engine is freely available at unrealengine.com. For the very latest on the studio, check out @EpicGames.", "https://vignette.wikia.nocookie.net/nintendo/images/9/9f/Ebicgames.png/revision/latest?cb=20190520225857&path-prefix=en", "Tim Sweeney", "S8838183B");
INSERT INTO companies VALUES (11, "pr@banana.com", "xiangjiaopi", "Wah!Banana", "Founded in 2012, Wah!Banana is a  YouTube channel that is one of the biggest and most popular in Singapore with over 554k subscribers and over 98 million views on their videos. Making videos about typical everyday Singaporean issues and just making fun of everyone in general, we aim to bring a smile to everyone’s face through our videos.", "https://pbs.twimg.com/profile_images/805717860869771264/PucNBY5f.jpg", "Lingyi Xiong", "S9034518J");
INSERT INTO companies VALUES (12, "honmeng@gmail.com", "porknoods", "Liao Fan Hong Kong Soya Sauce Chicken Rice & Noodle Stall", "Hong Kong Soya Sauce Chicken Rice and Noodle became one of the first two street food stalls in the world to be awarded a Michelin Star, gaining the recognition in the 2016 list for Singapore.", "https://i2-prod.mirror.co.uk/incoming/article8561667.ece/ALTERNATES/s615b/Chan-Hon-Meng.jpg", "Chan Hon Meng", "S7023014I");
INSERT INTO companies VALUES (13, "betty@miaoacademy.org", "imafurry", "Miao Academy", "We are an AI company using innovative technology to improve educational efficacy and efficiency. Our vision is to provide a verified and reliable consortium of educational resources in an convenient automated way.", "http://www.miaoacademy.org/wp-content/uploads/2018/02/miao-hands-600x699.png", "Betty Zhou", "S9576798C");

INSERT INTO projects VALUES (1, "Design Special Event Logo", "Design a modified game logo to be used for one of our upcoming seasonal special events (Halloween). Special event includes game content update (new items) - would be useful to reflect a more eerie, sinister theme that ties in with items.", 3, 150, 10, 101, "20190618 10:34:09 AM", "20190620 11:44:09 AM", "20190712 01:59:59 PM");
INSERT INTO projects VALUES (2, "Help Check Legal Hiring Contract", "Help audit and check a template contract for future actor hires for Singapore law compliance.", 1, 99, 11, NULL, "20190618 10:34:09 AM", NULL, NULL);
INSERT INTO projects VALUES (3, "Compile and Edit End-of-Year Video Compilation", "Get our best moments of the year 2018 and compile it into an end-of-year compilation for our viewers.", 3, 700, 11, NULL, "20181118 07:34:09 AM", "20181119 07:34:09 AM", "20181120 07:34:09 AM");
INSERT INTO projects VALUES (4, "Design ad campaign for upcoming Youtube Red series", "Copywrite and design an upcoming ad campaign for our upcoming Youtube Red travel show BananaBros. Should include Instagram and Facebook publicity, preferably with a few video ad ideas.", 1, 900, 11, NULL, "20190718 07:34:09 AM", NULL, NULL);
INSERT INTO projects VALUES (5, "Create mobile app for ordering food", "We have had very long queues outside our stores since the Michelin star and people are very sad :(. Hence mobile app can be used to order food in advance and estimated timestamp should be given so customers know when they should come.", 1, 800, 12, NULL, "20190718 05:34:09 AM", NULL, NULL);
INSERT INTO projects VALUES (6, "Make new website UI - more details", "Our website is not very descriptive of the food we sell or the stores that we've opened. Preferably have a menu page outlining all our food and a page where customers can locate their nearest store", 2, 300, 12, 102, "20190718 09:34:09 AM", "20190719 09:34:09 AM", NULL);
INSERT INTO projects VALUES (7, "Help find cheaper duck suppliers", "We want to cut costs so please help us find cheaper sources of fresh duck - should minimally be from within ASEAN region and shippable over maximum 2 days.", 1, 300, 12, NULL, "20190718 09:34:09 AM", NULL, NULL);
INSERT INTO projects VALUES (8, "Coordinate flyer advertisements", "We need help in running operations and recruiting for people to hand out flyers for our product. Should be placed strategically at MRT stations or hotspots near schools. Should include SOPs and general proposal.", 1, 500, 13, NULL, "20190621 09:34:09 AM", NULL, NULL);
INSERT INTO projects VALUES (9, "Make cute characters", "We need to make more cute characters for our App to hopefully make it more engaging for users. Deliverables are sprites and some animations for different subjects. Characters should be fluffy animals.", 1, 200, 13, NULL, "20190621 09:34:09 AM", NULL, NULL);
INSERT INTO projects VALUES (10, "Make cute characters", "We need to make more cute characters for our App to hopefully make it more engaging for users. Deliverables are sprites and some animations for different subjects. Characters should be fluffy animals.", 1, 200, 13, NULL, "20190621 09:34:09 AM", NULL, NULL);