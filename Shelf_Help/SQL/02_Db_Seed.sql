/*
     ---   UserProfile Seed Data
*/
set identity_insert [UserProfile] on
INSERT INTO [dbo].[UserProfile] ([Id], [Email], [DisplayName], [ZipCode], [FirebaseUserId]) VALUES (1, 'ember@admin.com', 'emberparr', 37174, 'Z44y35InmHODB671einrCF1JnC22');
INSERT INTO [UserProfile] ([Id], [Email], [DisplayName], [ZipCode], [FirebaseUserId]) VALUES (2, 'snoopcat@emberparr.com', 'snoopcat', 37174, '2UD8rDkxC4VlUEA6UrMn2udr5fX2');

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
INSERT INTO Menu ([Id], [Date], [TypeId], [UserId], [Custom], [Spoonacular_RecipeId]) VALUES (1, '2021-01-01', 1, 1, 2, 520);
INSERT INTO Menu ([Id], [Date], [TypeId], [UserId], [Custom], [Spoonacular_RecipeId]) VALUES (2, '2021-01-05', 2, 1, 2, 860);
INSERT INTO Menu ([Id], [Date], [TypeId], [UserId], [Custom], [Spoonacular_RecipeId]) VALUES (3, '2021-01-09', 3, 1, 2, 510);
INSERT INTO Menu ([Id], [Date], [TypeId], [UserId], [Custom], [Spoonacular_RecipeId]) VALUES (4, '2021-01-15', 4, 2, 2, 540);
INSERT INTO Menu ([Id], [Date], [TypeId], [UserId], [Custom], [Spoonacular_RecipeId]) VALUES (5, '2021-01-16', 1, 2, 2, 20);
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
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [Spoonacular_IngredientId], [Measurement]) VALUES (1, 1, 1, 2, 15, '3 tablespoons'); 
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [Spoonacular_IngredientId], [Measurement]) VALUES (2, 1, 1, 2, 20, '6 cups'); 
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [Spoonacular_IngredientId], [Measurement]) VALUES (3, 1, 1, 2, 2, 'half gallon'); 
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [Spoonacular_IngredientId], [Measurement]) VALUES (4, 1, 1, 2, 240, 'enough for a lot of food'); 
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [Spoonacular_IngredientId], [Measurement]) VALUES (5, 1, 1, 2, 8, 'a pinch'); 
set identity_insert [FoodItem] off
