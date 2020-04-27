using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Visualization.Models;

namespace Visualization.Services
{
    public class ArchitectureDataService : IArchitectureDataService
    {
        public object ListArchitecturesByLastModifiedInfo()
        {
            
            using (var alphaOne = new AlphaOneDbContext())
            {

               var architectures = (from a in alphaOne.VW_Architecture_Viewer_Popup_Metadata
                                     select new
                                     {
                                         ArchitectureId = a.Id,
                                         ArchitectureName = a.Name,
                                         LastModifiedDate = a.LastUpdatedDate

                                     }).ToList();

                var subQuery1 = from r in alphaOne.arches
                                group r by r.cat_arch_id into rGrp
                                select new
                                {
                                    cat_arch_id = rGrp.Key,
                                    latest_revision_id = rGrp.Max(r => r.arch_id)
                                };

                var subQuery2 = from l in subQuery1
                                join r in alphaOne.arches on l.latest_revision_id equals r.arch_id into set
                                from r in set.DefaultIfEmpty()
                                select new
                                {
                                    architectureId = l.cat_arch_id,
                                    latest_revision_id = l == null ? null : l.latest_revision_id.ToString(),
                                    lastModifiedBy = r == null ? null : r.src_sys_user_nm
                                };

                return (from a in architectures
                        join m in subQuery2 on a.ArchitectureId equals m.architectureId into mSet
                        from m in mSet.DefaultIfEmpty()
                        select new
                        {
                            architectureId = a.ArchitectureId,
                            architectureName = a.ArchitectureName,
                            latestRevisionId = m == null ? null : m.latest_revision_id.ToString(),
                            lastModifiedDate = a.LastModifiedDate,
                            lastModifiedBy = m == null ? null : m.lastModifiedBy

                        }).ToList();

            }
            

            
        }

        public object ListRelatedArchitecturesById(int architectureId)
        {
            var alphaOne_context = new AlphaOneDbContext();
            
            var latestRevisions = (from r in alphaOne_context.arches
                                   group r by r.cat_arch_id into rGrp
                                   select new
                                   {
                                       architectureId = rGrp.Key,
                                       latest_revision_id = rGrp.Max(r => r.arch_id),
                                       lastModifiedBy = rGrp.Where(l => l.arch_id == rGrp.Max(r => r.arch_id)).Select(l => l.src_sys_user_nm)

                                   }).ToList();


            var related_architectures = (from r in alphaOne_context.related_architecture
                                         join p in alphaOne_context.architectures on r.architecture_id equals p.architecture_id
                                         join v in alphaOne_context.VW_Architecture_Viewer_Popup_Metadata on r.related_architecture_id equals v.Id
                                         join l in alphaOne_context.relate_type on r.relate_type_id equals l.relate_type_id into lSet
                                         from l in lSet.DefaultIfEmpty()
                                         where r.architecture_id == architectureId
                                         select new
                                         {
                                             architectureId = r.architecture_id,
                                             architectureName = p.name,
                                             relateTypeId = r.relate_type_id,
                                             relateTypeName = l == null ? null : l.relate_type_name,
                                             relatedArchId = r.related_architecture_id,
                                             relatedArchName = v.Name,
                                             relatedArchLastModifiedDate = v.LastUpdatedDate,


                                         }).ToList();


            return (from a in related_architectures
                    join m in latestRevisions on a.relatedArchId equals m.architectureId into mSet
                    from m in mSet.DefaultIfEmpty()
                    select new
                    {
                        a.architectureId,
                        a.architectureName,
                        a.relateTypeId,
                        a.relateTypeName,
                        a.relatedArchId,
                        a.relatedArchName,
                        a.relatedArchLastModifiedDate,
                        relatedArchLastModifiedBy = m == null ? null : m.lastModifiedBy.FirstOrDefault()

                    }).ToList();
        }

        public IEnumerable<RelatedArchitecturesAdapter> ListAllRelatedArchitectures()
        {


            var alpha_context = new AlphaOneDbContext();
          

            var latestRevisions = (from r in alpha_context.arches
                                   group r by r.cat_arch_id into rGrp
                                   select new
                                   {
                                       architectureId = rGrp.Key,
                                       latest_revision_id = rGrp.Max(r => r.arch_id),
                                       lastModifiedBy = rGrp.Where(l => l.arch_id == rGrp.Max(r => r.arch_id)).Select(l => l.src_sys_user_nm)

                                   }).ToList();


            var related_architectures = (from r in alpha_context.related_architecture
                                         join p in alpha_context.architectures on r.architecture_id equals p.architecture_id
                                         join q in alpha_context.architectures on r.related_architecture_id equals q.architecture_id
                                         join v in alpha_context.VW_Architecture_Viewer_Popup_Metadata on r.related_architecture_id equals v.Id
                                         join l in alpha_context.relate_type on r.relate_type_id equals l.relate_type_id into lSet
                                         from l in lSet.DefaultIfEmpty()                                        
                                         select new
                                         {
                                             architectureId = r.architecture_id,
                                             architectureName = p.name,
                                             relateTypeId = r.relate_type_id,
                                             relateTypeName = l == null ? null : l.relate_type_name,
                                             relatedArchId = r.related_architecture_id,
                                             relatedArchName = v.Name,
                                             relatedArchLastModifiedDate = v.LastUpdatedDate,


                                         }).ToList();


            return (from a in related_architectures
                    join m in latestRevisions on a.relatedArchId equals m.architectureId into mSet
                    from m in mSet.DefaultIfEmpty()
                    select new RelatedArchitecturesAdapter
                    {
                        architectureId = a.architectureId,
                        architectureName = a.architectureName,
                        relateTypeId = a.relateTypeId,
                        relateTypeName = a.relateTypeName,
                        relatedArchId = a.relatedArchId,
                        relatedArchName = a.relatedArchName,
                        relatedArchLastModifiedDate = a.relatedArchLastModifiedDate,
                        relatedArchLastModifiedBy = m == null ? null : m.lastModifiedBy.FirstOrDefault()

                    }).ToList();

        }

    }
}