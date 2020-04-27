USE [AlphaOne]
GO

/****** Object:  StoredProcedure [dbo].[usp_list_relate_types]    Script Date: 4/27/2020 11:53:28 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE[dbo].[usp_list_relate_types]

AS
BEGIN

   SELECT relate_type_id relateTypeId,
          relate_type_name relateTypeName
   FROM [dbo].[relate_type]

END
GO

