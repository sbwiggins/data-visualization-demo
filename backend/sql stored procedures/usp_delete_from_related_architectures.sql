USE [AlphaOne]
GO

/****** Object:  StoredProcedure [dbo].[usp_delete_from_related_architectures]    Script Date: 4/27/2020 11:52:38 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO




CREATE PROCEDURE [dbo].[usp_delete_from_related_architectures]
	@architecture_id VARCHAR(50),
	@related_architecture_id VARCHAR(50)	

AS
BEGIN			
		DELETE FROM [dbo].[related_architecture]		  
		WHERE architecture_id = @architecture_id AND related_architecture_id = @related_architecture_id

		SELECT * FROM [dbo].[related_architecture]
		WHERE architecture_id = @architecture_id AND related_architecture_id = @related_architecture_id 
		
END
GO

