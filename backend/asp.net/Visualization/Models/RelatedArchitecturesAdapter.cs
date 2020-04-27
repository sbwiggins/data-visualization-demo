using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Visualization.Models
{
    public class RelatedArchitecturesAdapter
    {
        public int architectureId { get; set; }
        public string architectureName { get; set; }
        public int relatedArchId { get; set; }
        public string relatedArchName { get; set; }
        public int? relateTypeId { get; set; }
        public string relateTypeName { get; set; }
        public string relatedArchLastModifiedDate { get; set; }
        public string relatedArchLastModifiedBy { get; set; }
    
    }
    
}