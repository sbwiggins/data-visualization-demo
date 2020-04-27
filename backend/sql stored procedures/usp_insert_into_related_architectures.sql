USE [AlphaOne]
GO

/****** Object:  StoredProcedure [dbo].[usp_insert_into_related_architectures]    Script Date: 4/27/2020 11:52:56 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO




CREATE PROCEDURE [dbo].[usp_insert_into_related_architectures]
	@architecture_id VARCHAR(50),
	@related_architecture_id VARCHAR(50),
	@relate_type_id VARCHAR(50)

AS
BEGIN
	IF NOT EXISTS (SELECT * FROM dbo.related_architecture WHERE architecture_id=@architecture_id AND related_architecture_id=@related_architecture_id)
		BEGIN			
			
			INSERT INTO [dbo].[related_architecture]
				   ([architecture_id],[related_architecture_id],[relate_type_id])
			VALUES
				   (@architecture_id ,@related_architecture_id ,@relate_type_id)

			SELECT * FROM [dbo].[related_architecture]
			WHERE architecture_id = @architecture_id AND related_architecture_id = @related_architecture_id AND relate_type_id = @relate_type_id

		END
	ELSE
		BEGIN
			SELECT 'Already Exists in Database'
		END
END
GO

