/*
     ---   UserProfile Seed Data
*/
set identity_insert [UserProfile] on
INSERT INTO [dbo].[UserProfile] ([Id], [Email], [DisplayName], [ZipCode], [FirebaseUserId]) VALUES (1, 'ember@admin.com', 'emberparr', 37174, 'Z44y35InmHODB671einrCF1JnC22');
INSERT INTO [UserProfile] ([Id], [Email], [DisplayName], [ZipCode], [FirebaseUserId]) VALUES (2, 'snoopcat@emberparr.com', 'snoopcat', 37174, '2UD8rDkxC4VlUEA6UrMn2udr5fX2');

set identity_insert [UserProfile] off




/*
     ---   Menu Seed Data
*/