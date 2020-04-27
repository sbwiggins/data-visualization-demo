using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Visualization.Models;

namespace Visualization.Services
{
    public class ViewDataService : IViewDataService
    {
        public object ListRelatedViewsByArchitectureId(int architectureId)
        {

            using (var alpha_context = new AlphaOneDbContext())
            {


                return (from v in alpha_context.related_view
                        join p in alpha_context.products on v.view_id equals p.product_id
                        join q in alpha_context.products on v.related_view_id equals q.product_id
                        join t in alpha_context.relate_type on v.relate_type_id equals t.relate_type_id
                        join a in alpha_context.architectures on v.architecture_id equals a.architecture_id
                        join r in alpha_context.architectures on v.related_architecture_id equals r.architecture_id
                        where v.architecture_id == architectureId
                        select new
                        {

                            architectureId = v.architecture_id,
                            architectureName = a.name,
                            viewId = v.view_id,
                            viewName = p.name,
                            relatedArchId = v.related_architecture_id,
                            relatedArchName = r.name,
                            relatedViewId = v.related_view_id,
                            relatedViewName = q.name,
                            relateTypeId = v.relate_type_id,
                            relateTypeName = t.relate_type_name

                        }).ToList();


            }


        }

        public IEnumerable<RelatedViewsAdapter> ListAllRelatedViews()
        {


            using (var alpha_context = new AlphaOneDbContext())
            {

                return (from v in alpha_context.related_view
                        join a in alpha_context.architectures on v.architecture_id equals a.architecture_id
                        join r in alpha_context.architectures on v.related_architecture_id equals r.architecture_id
                       
                        select new RelatedViewsAdapter
                        {

                            architectureId = v.architecture_id,
                            architectureName = a.name,
                            viewId = v.view_id,
                            relatedArchId = v.related_architecture_id,
                            relatedArchName = r.name,
                            relatedViewId = v.related_view_id,
                            relateTypeId = v.relate_type_id,

                        }).ToList();


            }


        }
    }
}