USE [AlphaOne]
GO

/****** Object:  StoredProcedure [dbo].[usp_lst_architectures_by_last_modified_date]    Script Date: 4/27/2020 11:54:55 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[usp_lst_architectures_by_last_modified_date]

AS

BEGIN
	SELECT 
		  m.Id AS architectureId,
		  m.Name AS architectureName,
		  l.lastestRevisionId,
		  m.LastUpdatedDate AS lastModifiedDate,
		  l.src_sys_user_nm AS lastModifiedBy
	FROM dbo.VW_Architecture_Viewer_Popup_Metadata AS m
	LEFT OUTER JOIN (SELECT 
						cat_arch_id,
						src_sys_user_nm,
						MAX(arch_id) As lastestRevisionId 
					 FROM dbo.arch
					 GROUP BY cat_arch_id,src_sys_user_nm) AS l ON l.cat_arch_id = m.Id
END
GO

