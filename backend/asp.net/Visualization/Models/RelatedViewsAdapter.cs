using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Visualization.Models
{
    public class RelatedViewsAdapter
    {
        public int architectureId { get; set; }
        public string architectureName { get; set; }
        public int viewId { get; set; }
        public int relatedArchId { get; set; }
        public string relatedArchName { get; set; }
        public int relatedViewId { get; set; }
        public int? relateTypeId { get; set; }

    }
    
}