
use pinterest_app;

CREATE TABLE users(
	user_id INT PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR(255),
	password VARCHAR(255),
	full_name VARCHAR(255),
	age INT,
	avatar VARCHAR(255),
	introduce VARCHAR(255),
	link_user_info VARCHAR(255),
	user_name VARCHAR(255)
);

-- Chèn 15 dòng dữ liệu vào bảng users
INSERT INTO users (email, password, full_name, age, avatar, introduce, link_user_info, user_name) VALUES
('john.doe@example.com', 'hashed_password1', 'John Doe', 25, 'avatar1.jpg', 'Hello, I am John!', 'https://example.com/johndoe', 'johndoe'),
('jane.smith@example.com', 'hashed_password2', 'Jane Smith', 30, 'avatar2.jpg', 'Nice to meet you!', 'https://example.com/janesmith', 'janesmith'),
('bob.johnson@example.com', 'hashed_password3', 'Bob Johnson', 22, 'avatar3.jpg', 'I love programming.', 'https://example.com/bobjohnson', 'bobjohnson'),
-- Thêm dữ liệu khác ở đây
('alice.williams@example.com', 'hashed_password4', 'Alice Williams', 28, 'avatar4.jpg', 'Software engineer and photographer.', 'https://example.com/alicewilliams', 'alicewilliams'),
('charlie.brown@example.com', 'hashed_password5', 'Charlie Brown', 35, 'avatar5.jpg', 'Coffee lover and adventurer.', 'https://example.com/charliebrown', 'charliebrown'),
('emma.davis@example.com', 'hashed_password6', 'Emma Davis', 29, 'avatar6.jpg', 'Exploring the world, one city at a time.', 'https://example.com/emmadavis', 'emmadavis'),
('david.wilson@example.com', 'hashed_password7', 'David Wilson', 27, 'avatar7.jpg', 'Passionate about technology and innovation.', 'https://example.com/davidwilson', 'davidwilson'),
('grace.miller@example.com', 'hashed_password8', 'Grace Miller', 32, 'avatar8.jpg', 'Yoga enthusiast and nature lover.', 'https://example.com/gracemiller', 'gracemiller'),
('james.lee@example.com', 'hashed_password9', 'James Lee', 26, 'avatar9.jpg', 'Web developer by day, gamer by night.', 'https://example.com/jameslee', 'jameslee'),
('olivia.white@example.com', 'hashed_password10', 'Olivia White', 31, 'avatar10.jpg', 'Bookworm and aspiring writer.', 'https://example.com/oliviawhite', 'oliviawhite'),
('michael.taylor@example.com', 'hashed_password11', 'Michael Taylor', 23, 'avatar11.jpg', 'Fitness freak and nutrition advocate.', 'https://example.com/michaeltaylor', 'michaeltaylor'),
('sophia.martin@example.com', 'hashed_password12', 'Sophia Martin', 33, 'avatar12.jpg', 'Art lover and creative soul.', 'https://example.com/sophiamartin', 'sophiamartin'),
('william.anderson@example.com', 'hashed_password13', 'William Anderson', 30, 'avatar13.jpg', 'Traveling and exploring new cultures.', 'https://example.com/williamanderson', 'williamanderson'),
('emily.harris@example.com', 'hashed_password14', 'Emily Harris', 28, 'avatar14.jpg', 'Graphic designer with a passion for color.', 'https://example.com/emilyharris', 'emilyharris'),
('daniel.moore@example.com', 'hashed_password15', 'Daniel Moore', 34, 'avatar15.jpg', 'Tech geek and aspiring entrepreneur.', 'https://example.com/danielmoore', 'danielmoore');




CREATE TABLE images(
	image_id INT PRIMARY KEY AUTO_INCREMENT,
	image_name VARCHAR(255),
	url VARCHAR(255),
	commenting_right BOOLEAN,
	description VARCHAR(255),
	user_id INT,
	FOREIGN KEY(user_id) REFERENCES users(user_id),
	title VARCHAR(255),
	link_web_detail VARCHAR(255)
);

-- Chèn 15 dòng dữ liệu vào bảng images
INSERT INTO images (image_name, url, commenting_right, description, user_id, title, link_web_detail) VALUES
('Sunset Over the Mountains', 'https://example.com/sunset_mountains.jpg', TRUE, 'A breathtaking sunset over the mountain range.', 1, 'Mountain Sunset', 'https://example.com/mountain_sunset'),
('City Skyline at Night', 'https://example.com/city_skyline_night.jpg', FALSE, 'The city skyline illuminated by city lights at night.', 2, 'City Night Lights', 'https://example.com/city_night_lights'),
('Playful Puppy in the Garden', 'https://example.com/playful_puppy.jpg', TRUE, 'An adorable puppy playing in a vibrant garden.', 3, 'Garden Pup', 'https://example.com/garden_pup'),
('Colorful Abstract Artwork', 'https://example.com/colorful_abstract.jpg', TRUE, 'Vibrant and abstract artwork with a splash of colors.', 4, 'Abstract Colors', 'https://example.com/abstract_colors'),
('Ocean Sunrise', 'https://example.com/ocean_sunrise.jpg', FALSE, 'A breathtaking sunrise over the calm ocean waters.', 5, 'Sunrise Serenity', 'https://example.com/sunrise_serenity'),
('Urban Noir Street Photography', 'https://example.com/urban_noir.jpg', TRUE, 'Classic black and white street photography in an urban setting.', 6, 'Urban Noir', 'https://example.com/urban_noir_detail'),
('Cute Kittens Cuddling', 'https://example.com/cute_kittens.jpg', FALSE, 'Two adorable kittens cuddling together in a cozy spot.', 7, 'Cozy Kittens', 'https://example.com/cozy_kittens_detail'),
('Majestic Eagle Soaring', 'https://example.com/majestic_eagle.jpg', TRUE, 'A majestic eagle soaring through the vast sky.', 8, 'Sky Majesty', 'https://example.com/sky_majesty'),
('Rolling Hills Landscape', 'https://example.com/rolling_hills.jpg', TRUE, 'A picturesque landscape with rolling hills and greenery.', 9, 'Rolling Hills Beauty', 'https://example.com/rolling_hills_beauty'),
('Modern Architecture in City', 'https://example.com/modern_architecture.jpg', FALSE, 'Modern architectural marvels in a bustling city.', 10, 'Urban Marvels', 'https://example.com/urban_marvels'),
('Delicious Homemade Desserts', 'https://example.com/homemade_desserts.jpg', TRUE, 'A tempting display of delicious homemade desserts.', 11, 'Sweet Delights', 'https://example.com/sweet_delights'),
('Playful Dolphins in Clear Waters', 'https://example.com/playful_dolphins.jpg', FALSE, 'Playful dolphins swimming in crystal-clear waters.', 12, 'Dolphin Playtime', 'https://example.com/dolphin_playtime'),
('Abstract Sculpture in Museum', 'https://example.com/abstract_sculpture.jpg', TRUE, 'An intriguing abstract sculpture in a contemporary art museum.', 13, 'Sculpture Exploration', 'https://example.com/sculpture_exploration'),
('Enchanting Forest in Autumn', 'https://example.com/forest_autumn.jpg', TRUE, 'An enchanting forest adorned with vibrant autumn colors.', 14, 'Autumn Fantasy', 'https://example.com/autumn_fantasy'),
('Vintage Car Exhibition', 'https://example.com/vintage_car_exhibition.jpg', FALSE, 'Classic automobiles showcased at a vintage car exhibition.', 15, 'Vintage Classics', 'https://example.com/vintage_classics');



CREATE TABLE comments(
	comment_id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	FOREIGN KEY(user_id) REFERENCES users(user_id),
	image_id INT,
	FOREIGN KEY(image_id) REFERENCES images(image_id),
	date_comment DATE,
	content VARCHAR(255)
);

-- Chèn 12 dòng dữ liệu vào bảng comments
INSERT INTO comments (user_id, image_id, date_comment, content) VALUES
(1, 1, '2022-01-01', 'Amazing shot!'),
(2, 1, '2022-01-02', 'I love the colors in this picture.'),
(3, 2, '2022-01-03', 'The city lights are mesmerizing.'),
(4, 3, '2022-01-04', 'What a cute puppy!'),
(5, 4, '2022-01-05', 'This abstract artwork is mind-blowing.'),
(6, 5, '2022-01-06', 'The sunrise by the ocean is breathtaking.'),
(7, 6, '2022-01-07', 'Great use of black and white in this photo.'),
(8, 7, '2022-01-08', 'Aww, those kittens are adorable!'),
(9, 8, '2022-01-09', 'The eagle looks majestic in flight.'),
(10, 9, '2022-01-10', 'The rolling hills are so peaceful.'),
(11, 10, '2022-01-11', 'Modern architecture at its finest.'),
(12, 11, '2022-01-12', 'Those desserts look delicious!');



CREATE TABLE savedImages(
	savedImage_id INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	FOREIGN KEY(user_id) REFERENCES users(user_id),
	image_id INT,
	FOREIGN KEY(image_id) REFERENCES images(image_id),
	date_saved DATE
);

-- Chèn 10 dòng dữ liệu vào bảng savedImages
INSERT INTO savedImages (user_id, image_id, date_saved) VALUES
(1, 1, '2022-01-01'),
(2, 3, '2022-01-02'),
(3, 5, '2022-01-03'),
(4, 7, '2022-01-04'),
(5, 9, '2022-01-05'),
(6, 11, '2022-01-06'),
(7, 13, '2022-01-07'),
(8, 15, '2022-01-08'),
(9, 2, '2022-01-09'),
(10, 4, '2022-01-10');


