//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Visualization.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class related_architecture
    {
        public int architecture_id { get; set; }
        public int related_architecture_id { get; set; }
        public Nullable<int> relate_type_id { get; set; }
    
        public virtual architecture architecture { get; set; }
        public virtual architecture architecture1 { get; set; }
    }
}
