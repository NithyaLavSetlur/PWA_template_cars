-- CREATE TABLE car (
--     carID INTEGER PRIMARY KEY AUTOINCREMENT,
--     make TEXT NOT NULL,
--     model TEXT NOT NULL,
--     year INTEGER NOT NULL,
--     type TEXT NOT NULL,  -- Category for car type (SUV, Sedan, Hatchback, etc.)
--     horsepower INTEGER NOT NULL,
--     torque INTEGER NOT NULL,
--     acceleration REAL NOT NULL,  -- 0-100 km/h in seconds
--     top_speed INTEGER NOT NULL,  -- km/h
--     fuel_efficiency REAL NOT NULL,  -- L/100km
--     transmission TEXT NOT NULL,  -- e.g., "Automatic", "Manual"
--     drivetrain TEXT NOT NULL,  -- e.g., "AWD", "RWD"
--     price REAL NOT NULL,
--     image TEXT NOT NULL  -- URL to car image
-- );

-- INSERT INTO car (make, model, year, type, horsepower, torque, acceleration, top_speed, fuel_efficiency, transmission, drivetrain, price, image) 
-- VALUES 
--     ('Tesla', 'Model S', 2023, 'Sedan', 1020, 1050, 2.1, 322, 3.2, 'Automatic', 'AWD', 89990, 'tesla-model-s.jpg'),
--     ('Porsche', '911 Turbo S', 2022, 'Coupe', 640, 590, 2.6, 330, 2.9, 'Automatic', 'AWD', 203500, 'porsche-911.jpg'),
--     ('BMW', 'M3 Competition', 2023, 'Sedan', 503, 479, 3.8, 290, 3.5, 'Automatic', 'RWD', 76100, 'bmw-m3.jpg'),
--     ('Audi', 'Q7', 2023, 'SUV', 335, 369, 5.7, 250, 9.0, 'Automatic', 'AWD', 85000, 'audi-q7.jpg'),
--     ('Volkswagen', 'Golf GTI', 2023, 'Hatchback', 245, 273, 6.3, 250, 7.5, 'Automatic', 'FWD', 35000, 'vw-golf.jpg');

-- SELECT * FROM car WHERE type = 'Sedan';  -- Get all Sedans
-- SELECT * FROM car WHERE type = 'SUV';    -- Get all SUVs
-- SELECT * FROM car WHERE type = 'Hatchback';  -- Get all Hatchbacks
CREATE TABLE IF NOT EXISTS cars (
    carID INTEGER PRIMARY KEY AUTOINCREMENT,
    make TEXT NOT NULL,
    model TEXT NOT NULL,
    year INTEGER NOT NULL,
    type TEXT NOT NULL, -- SUV, Sedan, etc.
    horsepower INTEGER NOT NULL,
    torque INTEGER NOT NULL,
    acceleration REAL NOT NULL, -- 0-100 km/h in seconds
    top_speed INTEGER NOT NULL, -- in km/h
    fuel_efficiency REAL NOT NULL, -- L/100km
    transmission TEXT NOT NULL, -- Automatic, Manual
    drivetrain TEXT NOT NULL, -- AWD, RWD
    price REAL NOT NULL,
    image TEXT NOT NULL -- URL to car image
);

INSERT INTO cars (make, model, year, type, horsepower, torque, acceleration, top_speed, fuel_efficiency, transmission, drivetrain, price, image)
VALUES
    ('Ferrari', 'SF90 Stradale', 2023, 'Coupe', 986, 800, 2.5, 340, 10.2, 'Automatic', 'AWD', 625000, 'https://example.com/ferrari_sf90.jpg'),
    ('Ferrari', '812 Superfast', 2022, 'Coupe', 789, 718, 2.8, 340, 12.5, 'Automatic', 'RWD', 405000, 'https://example.com/ferrari_812.jpg'),
    ('Ferrari', 'F8 Tributo', 2023, 'Coupe', 710, 770, 2.9, 340, 11.2, 'Automatic', 'RWD', 300000, 'https://example.com/ferrari_f8.jpg'),
    ('Ferrari', 'Roma', 2023, 'Coupe', 612, 760, 3.4, 320, 10.5, 'Automatic', 'RWD', 230000, 'https://example.com/ferrari_roma.jpg'),
    ('Ferrari', 'Portofino M', 2023, 'Convertible', 612, 760, 3.4, 320, 11.0, 'Automatic', 'RWD', 245000, 'https://example.com/ferrari_portofino.jpg'),
    ('Ferrari', 'LaFerrari', 2016, 'Coupe', 950, 900, 2.6, 350, 14.2, 'Automatic', 'RWD', 1500000, 'https://example.com/ferrari_laferrari.jpg'),
    ('Lamborghini', 'Huracan Evo', 2023, 'Coupe', 630, 600, 2.9, 325, 12.1, 'Automatic', 'AWD', 280000, 'https://example.com/lamborghini_huracan.jpg'),
    ('Lamborghini', 'Aventador SVJ', 2022, 'Coupe', 759, 720, 2.8, 350, 15.8, 'Automatic', 'AWD', 517000, 'https://example.com/lamborghini_aventador.jpg'),
    ('Lamborghini', 'Revuelto', 2024, 'Coupe', 1001, 1000, 2.5, 350, 10.0, 'Automatic', 'AWD', 700000, 'https://example.com/lamborghini_revuelto.jpg'),
    ('Lamborghini', 'Urus Performante', 2023, 'SUV', 657, 850, 3.3, 306, 14.0, 'Automatic', 'AWD', 250000, 'https://example.com/lamborghini_urus.jpg'),
    ('Bugatti', 'Chiron Super Sport', 2023, 'Coupe', 1578, 1600, 2.3, 440, 22.0, 'Automatic', 'AWD', 3900000, 'https://example.com/bugatti_chiron.jpg'),
    ('Bugatti', 'Divo', 2021, 'Coupe', 1500, 1600, 2.4, 380, 20.0, 'Automatic', 'AWD', 5000000, 'https://example.com/bugatti_divo.jpg'),
    ('Bugatti', 'Bolide', 2024, 'Coupe', 1825, 1850, 2.1, 500, 25.0, 'Automatic', 'AWD', 4500000, 'https://example.com/bugatti_bolide.jpg'),
    ('Rolls-Royce', 'Phantom', 2023, 'Sedan', 563, 900, 5.0, 250, 14.5, 'Automatic', 'RWD', 460000, 'https://example.com/rollsroyce_phantom.jpg'),
    ('Rolls-Royce', 'Ghost', 2023, 'Sedan', 591, 900, 4.6, 250, 15.0, 'Automatic', 'AWD', 400000, 'https://example.com/rollsroyce_ghost.jpg'),
    ('Rolls-Royce', 'Cullinan', 2023, 'SUV', 563, 850, 5.2, 250, 16.0, 'Automatic', 'AWD', 375000, 'https://example.com/rollsroyce_cullinan.jpg'),
    ('Rolls-Royce', 'Spectre', 2024, 'Coupe', 577, 900, 4.5, 250, 0, 'Automatic', 'AWD', 420000, 'https://example.com/rollsroyce_spectre.jpg');


SELECT * FROM cars;
-- SELECT * FROM cars WHERE image LIKE '#BASH';
