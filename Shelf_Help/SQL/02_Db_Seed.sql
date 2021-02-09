/*
     ---   UserProfile Seed Data
*/
set identity_insert [UserProfile] on
INSERT INTO [dbo].[UserProfile] ([Id], [Email], [DisplayName], [ZipCode], [FirebaseUserId]) VALUES (1, 'ember@admin.com', 'emberparr', 37174, 'Z44y35InmHODB671einrCF1JnC22');
INSERT INTO [dbo].[UserProfile] ([Id], [Email], [DisplayName], [ZipCode], [FirebaseUserId]) VALUES (2, 'snoopcat@emberparr.com', 'snoopcat', 37174, '2UD8rDkxC4VlUEA6UrMn2udr5fX2');

set identity_insert [UserProfile] off




/*
     ---   MealType Seed Data
*/
set identity_insert [MealType] on
INSERT INTO [dbo].[MealType] ([Id], [Name]) VALUES (1, 'Breakfast');
INSERT INTO [dbo].[MealType] ([Id], [Name]) VALUES (2, 'Brunch');
INSERT INTO [dbo].[MealType] ([Id], [Name]) VALUES (3, 'Lunch');
INSERT INTO [dbo].[MealType] ([Id], [Name]) VALUES (4, 'Dinner');
INSERT INTO [dbo].[MealType] ([Id], [Name]) VALUES (5, 'Snack');
INSERT INTO [dbo].[MealType] ([Id], [Name]) VALUES (6, 'Other');
set identity_insert [MealType] off




/*
     ---   Menu Seed Data
*/
set identity_insert [Menu] on
INSERT INTO Menu ([Id], [Date], [MealTypeId], [UserId], [Custom], [SpoonacularRecipeId]) VALUES (1, '2021-01-01', 1, 1, 2, 520);
INSERT INTO Menu ([Id], [Date], [MealTypeId], [UserId], [Custom], [SpoonacularRecipeId]) VALUES (2, '2021-01-05', 2, 1, 2, 860);
INSERT INTO Menu ([Id], [Date], [MealTypeId], [UserId], [Custom], [SpoonacularRecipeId]) VALUES (3, '2021-01-09', 3, 1, 2, 510);
INSERT INTO Menu ([Id], [Date], [MealTypeId], [UserId], [Custom], [SpoonacularRecipeId]) VALUES (4, '2021-01-15', 4, 2, 2, 540);
INSERT INTO Menu ([Id], [Date], [MealTypeId], [UserId], [Custom], [SpoonacularRecipeId]) VALUES (5, '2021-01-16', 1, 2, 2, 20);
set identity_insert [Menu] off



/*
     ---   Location Seed Data
*/
set identity_insert [Location] on
INSERT INTO [dbo].[Location] ([Id], [Name]) VALUES (1, 'Pantry');
INSERT INTO [dbo].[Location] ([Id], [Name]) VALUES (2, 'Fridge');
INSERT INTO [dbo].[Location] ([Id], [Name]) VALUES (3, 'Freezer');
INSERT INTO [dbo].[Location] ([Id], [Name]) VALUES (4, 'Counter');
INSERT INTO [dbo].[Location] ([Id], [Name]) VALUES (5, 'Cabinet');
INSERT INTO [dbo].[Location] ([Id], [Name]) VALUES (6, 'Other');
set identity_insert [Location] off




/*
     ---   FoodItem Seed Data
*/
set identity_insert [FoodItem] on
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [SpoonacularIngredientId], [Measurement], [FoodName]) VALUES (1, 1, 1, 2, 9040, 'singles', 'bananas'); 
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [SpoonacularIngredientId], [Measurement], [FoodName]) VALUES (2, 1, 2, 0, 14412, 'bottles', 'water'); 
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [SpoonacularIngredientId], [Measurement], [FoodName]) VALUES (3, 1, 2, 2, 11960, 'bag', 'baby cut carrots'); 
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [SpoonacularIngredientId], [Measurement], [FoodName]) VALUES (4, 1, 1, 2, 6194, 'can', 'chicken broth'); 
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [SpoonacularIngredientId], [Measurement], [FoodName]) VALUES (5, 2, 3, 2, 13923, 'singles', 'beef strip loin'); 
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [SpoonacularIngredientId], [Measurement], [FoodName]) VALUES (6, 2, 5, 2, 1062047, 'a pinch', 'garlic salt'); 
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [SpoonacularIngredientId], [Measurement], [FoodName]) VALUES (7, 1, 1, 2, 6970, 'tablespoons', 'low-salt chicken broth'); 
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [SpoonacularIngredientId], [Measurement], [FoodName]) VALUES (8, 1, 5, 4, 19034, 'bag', 'popcorn');
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [SpoonacularIngredientId], [Measurement], [FoodName]) VALUES (9, 1, 3, 4, 11052, 'cup', 'greenbeans'); 
set identity_insert [FoodItem] off
