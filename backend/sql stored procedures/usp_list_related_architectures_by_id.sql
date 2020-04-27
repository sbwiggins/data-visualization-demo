USE [AlphaOne]
GO

/****** Object:  StoredProcedure [dbo].[usp_list_related_architectures_by_id]    Script Date: 4/27/2020 11:53:48 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[usp_list_related_architectures_by_id]
	@architecture_id VARCHAR(50)

AS
BEGIN
	
	SELECT r.architecture_id AS architectureId, 
		   a.name AS architectureName,
		   r.relate_type_id AS relateTypeId,
		   t.relate_type_name AS relateTypeName,
		   r.related_architecture_id AS relatedArchId,
		   p.name AS relatedArchName

	FROM related_architecture AS r
	JOIN architecture AS a ON r.architecture_id = a.architecture_id
	JOIN architecture AS p ON r.related_architecture_id = p.architecture_id
	JOIN relate_type AS t ON r.relate_type_id = t.relate_type_id

	WHERE r.architecture_id = @architecture_id


END
GO

