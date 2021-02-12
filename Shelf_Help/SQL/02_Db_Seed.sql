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
INSERT INTO Menu ([Id], [Date], [MealTypeId], [UserId], [Custom], [SpoonacularRecipeId], [Name]) VALUES (1, '2021-02-21', 1, 1, 1, 636026, 'Breakfast Biscuits and Gravy');
INSERT INTO Menu ([Id], [Date], [MealTypeId], [UserId], [Custom], [SpoonacularRecipeId], [Name]) VALUES (2, '2021-02-25', 2, 1, 1, 100547, 'Kadami (Lebanese Roasted Chick Peas)');
INSERT INTO Menu ([Id], [Date], [MealTypeId], [UserId], [Custom], [SpoonacularRecipeId], [Name]) VALUES (3, '2021-02-19', 3, 1, 1, 15815, 'Lamb Chops with Frizzled Herbs');
INSERT INTO Menu ([Id], [Date], [MealTypeId], [UserId], [Custom], [SpoonacularRecipeId], [Name]) VALUES (4, '2021-02-25', 4, 1, 1, 654959, 'Pasta With Tuna');
INSERT INTO Menu ([Id], [Date], [MealTypeId], [UserId], [Custom], [SpoonacularRecipeId], [Name]) VALUES (5, '2021-02-16', 1, 1, 1, 81507, 'Yankee Beef Pot Roast');
INSERT INTO Menu ([Id], [Date], [MealTypeId], [UserId], [Custom], [SpoonacularRecipeId], [Name]) VALUES (6, '2021-02-25', 1, 1, 1, 4107, 'Monkfish With Ratatouille');
INSERT INTO Menu ([Id], [Date], [MealTypeId], [UserId], [Custom], [SpoonacularRecipeId], [Name]) VALUES (7, '2021-02-25', 4, 1, 1, 61581, 'Carrot Cake With Cream Cheese Frosting Ii');
INSERT INTO Menu ([Id], [Date], [MealTypeId], [UserId], [Custom], [SpoonacularRecipeId], [Name]) VALUES (8, '2021-02-16', 3, 1, 1, 654883, 'Pasta Vegetable Soup');
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
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [SpoonacularIngredientId], [Measurement], [FoodName]) VALUES (10, 1, 3, 2, 20081, 'cup', 'flour'); 
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [SpoonacularIngredientId], [Measurement], [FoodName]) VALUES (11, 1, 1, 0, 11291, 'cup', 'green onions'); 
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [SpoonacularIngredientId], [Measurement], [FoodName]) VALUES (12, 1, 4, 1, 19296, 'cup', 'honey'); 
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [SpoonacularIngredientId], [Measurement], [FoodName]) VALUES (13, 1, 3, 1, 1002030, 'cup', 'black pepper'); 
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [SpoonacularIngredientId], [Measurement], [FoodName]) VALUES (14, 1, 1, 0, 2047, 'cup', 'salt'); 
set identity_insert [FoodItem] off
