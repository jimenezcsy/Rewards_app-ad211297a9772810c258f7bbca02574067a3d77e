INSERT INTO games_and_events (event_id, web_page) VALUES 
    ('wbb', 'https://gojaspers.com/sports/womens-basketball'),
    ('wcc', 'https://gojaspers.com/sports/womens-cross-country'), 
    ('wlax', 'https://gojaspers.com/sports/womens-lacrosse'),
    ('wsoc', 'https://gojaspers.com/sports/womens-soccer'),
    ('sb', 'https://gojaspers.com/sports/softball'),
    ('wswim', 'https://gojaspers.com/sports/womens-swimming-and-diving'),
    ('wtrack', 'https://gojaspers.com/sports/womens-track-and-field'),
    ('wvb', 'https://gojaspers.com/sports/womens-volleyball'),

    ('bb', 'https://gojaspers.com/sports/baseball'),
    ('mbb', 'https://gojaspers.com/sports/mens-basketball'),
    ('mcc', 'https://gojaspers.com/sports/mens-cross-country'),
    ('mgolf', 'https://gojaspers.com/sports/mens-golf'), 
    ('mlax', 'https://gojaspers.com/sports/mens-lacrosse'),
    ('msoc', 'https://gojaspers.com/sports/mens-soccer'),
    ('mswim', 'https://gojaspers.com/sports/mens-swimming-and-diving'),
    ('mtrack', 'https://gojaspers.com/sports/mens-track-and-field');

    ALTER TABLE games  
    ADD CONSTRAINT check_types 
    CHECK (importance IN ('b', 'r', 'p', 'i') );

    ALTER TABLE games  
    ADD CONSTRAINT check_type 
    CHECK (game_id IN ('wbb', 'wcc', 'wlax', 'wsoc', 
        'sb', 'wswim', 'wtrack', 'wvb', 'bb', 'mbb', 
        'mcc', 'mgolf', 'mlax', 'msoc', 'mswim', 'mtrack'));



