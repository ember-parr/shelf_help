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
INSERT INTO Menu ([Id], [Date], [MealTypeId], [UserId], [Custom], [SpoonacularRecipeId], [Name]) VALUES (9, '2021-02-16', 4, 1, 0, 648190, N'Italian Pasta Salad with organic Arugula');
INSERT INTO Menu ([Id], [Date], [MealTypeId], [UserId], [Custom], [SpoonacularRecipeId], [Name]) VALUES (10, '2021-02-16', 4, 1, 0, 640690, N'Creamy Ranch Pasta Salad');
INSERT INTO Menu ([Id], [Date], [MealTypeId], [UserId], [Custom], [SpoonacularRecipeId], [Name]) VALUES (11, '2021-02-16', 4, 1, 0, 1096260, N'Baked Lemon Salmon');
INSERT INTO Menu ([Id], [Date], [MealTypeId], [UserId], [Custom], [SpoonacularRecipeId], [Name]) VALUES (12, '2021-02-16', 4, 1, 0, 660257, N'Slow Braised Spicy Pork');
INSERT INTO Menu ([Id], [Date], [MealTypeId], [UserId], [Custom], [SpoonacularRecipeId], [Name]) VALUES (13, '2021-02-16', 3, 1, 0, 665678, N'Zomppa''s Moroccan Meatballs');
INSERT INTO Menu ([Id], [Date], [MealTypeId], [UserId], [Custom], [SpoonacularRecipeId], [Name]) VALUES (15, '2021-02-28', 1, 1, 0, 638989, N'Chocolate Cupcakes with Vanilla Whipped Cream Frosting');
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
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [SpoonacularIngredientId], [Measurement], [FoodName]) VALUES (15, 1, 1, 1, 1062047, N' ', 'garlic salt')
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [SpoonacularIngredientId], [Measurement], [FoodName]) VALUES (16, 1, 2, 3, 10211215, N' ', 'garlic clove')
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [SpoonacularIngredientId], [Measurement], [FoodName]) VALUES (17, 1, 6, 0, 11282, N'', 'onion')
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [SpoonacularIngredientId], [Measurement], [FoodName]) VALUES (18, 1, 6, 0, 11215, N'', 'garlic')
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [SpoonacularIngredientId], [Measurement], [FoodName]) VALUES (19, 1, 2, 1, 16223, N' ', 'soymilk')
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [SpoonacularIngredientId], [Measurement], [FoodName]) VALUES (20, 1, 6, 0, 2049, N'',  'thyme')
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [SpoonacularIngredientId], [Measurement], [FoodName]) VALUES (21, 1, 6, 0, 2044, N'',  'basil')
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [SpoonacularIngredientId], [Measurement], [FoodName]) VALUES (22, 1, 2, 1, 1077, N' ', 'milk')
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [SpoonacularIngredientId], [Measurement], [FoodName]) VALUES (23, 1, 6, 0, 2027, N'',  'oregano')
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [SpoonacularIngredientId], [Measurement], [FoodName]) VALUES (24, 1, 2, 1, 1230, N' ',  'buttermilk')
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [SpoonacularIngredientId], [Measurement], [FoodName]) VALUES (25, 1, 6, 0, 10211821, N'',  'bell pepper')
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [SpoonacularIngredientId], [Measurement], [FoodName]) VALUES (26, 1, 6, 0, 1033, N'',  'parmesan cheese')
INSERT INTO [dbo].[FoodItem] ([Id], [UserId], [LocationId], [Quantity], [SpoonacularIngredientId], [Measurement], [FoodName]) VALUES (27, 1, 6, 0, 20420, N'',  'pasta')
set identity_insert [FoodItem] off
