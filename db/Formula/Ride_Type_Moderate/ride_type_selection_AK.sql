SELECT * FROM disneys_animal_kingdom_moderate
WHERE 
ride_type = $1
OR
ride_type = $2
OR 
ride_type = $3
OR 
ride_type = $4