﻿USE [master]

IF db_id('Shelf_Help') IS NULl
  CREATE DATABASE [Shelf_Help]
GO

USE [Shelf_Help]
GO


DROP TABLE IF EXISTS [UserProfile];
DROP TABLE IF EXISTS [FoodItem];
DROP TABLE IF EXISTS [Menu];
DROP TABLE IF EXISTS [MealType];
DROP TABLE IF EXISTS [Location];
GO


CREATE TABLE [UserProfile] (
  [Id] INTEGER PRIMARY KEY IDENTITY,
  [Email] VARCHAR(50) UNIQUE NOT NULL,
  [DisplayName] VARCHAR(50) UNIQUE NOT NULL,
  [ZipCode] INTEGER NOT NULL,
  [FirebaseUserId] NVARCHAR(28) NOT NULL
)


CREATE TABLE [Location] (
  [Id] INTEGER PRIMARY KEY IDENTITY,
  [Name] VARCHAR (255) NOT NULL
)


CREATE TABLE [FoodItem] (
  [Id] INTEGER PRIMARY KEY IDENTITY,
  [UserId] INTEGER NOT NULL,
  [LocationId] INTEGER NOT NULL DEFAULT(6),
  [Quantity] INTEGER NOT NULL DEFAULT(1),
  [Spoonacular_IngredientId] INTEGER,
  [Measurement] VARCHAR (255),

  CONSTRAINT [FK_FoodItem_User] FOREIGN KEY ([UserId]) REFERENCES [UserProfile] ([Id]),
  CONSTRAINT [FK_FoodItem_Location] FOREIGN KEY ([LocationId]) REFERENCES [Location] ([Id])
)


CREATE TABLE [MealType] (
  [Id] INTEGER PRIMARY KEY IDENTITY,
  [Name] VARCHAR (255) NOT NULL
)


CREATE TABLE [Menu] (
  [Id] INTEGER PRIMARY KEY IDENTITY,
  [Date] DATETIME NOT NULL,
  [TypeId] INTEGER NOT NULL DEFAULT (6),
  [UserId] INTEGER NOT NULL,
  [Custom] bit NOT NULL DEFAULT (1),
  [Spoonacular_RecipeId] INTEGER,

  CONSTRAINT [FK_Menu_Type] FOREIGN KEY ([TypeId]) REFERENCES [MealType] ([Id]),
  CONSTRAINT [FK_Menu_User] FOREIGN KEY ([UserId]) REFERENCES [UserProfile] ([Id])
)
GO


reconfigure;
go