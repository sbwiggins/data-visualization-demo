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
    
    public partial class arch
    {
        public int arch_id { get; set; }
        public System.DateTime create_dttm { get; set; }
        public Nullable<int> narch_top_org_id { get; set; }
        public Nullable<int> src_sys_id { get; set; }
        public Nullable<System.DateTime> stat_eff_dt { get; set; }
        public string arch_descr_tx { get; set; }
        public string arch_nm { get; set; }
        public Nullable<int> arch_maj_ver_qy { get; set; }
        public Nullable<int> arch_min_ver_qy { get; set; }
        public string arch_rel_ver_cd { get; set; }
        public string arch_vw_ty_cd { get; set; }
        public string sarch_conf_ctrl_cd { get; set; }
        public string sarch_ty_cd { get; set; }
        public Nullable<int> src_sys_user_id { get; set; }
        public string src_sys_arch_key { get; set; }
        public Nullable<int> msn_id { get; set; }
        public Nullable<int> csc_id { get; set; }
        public Nullable<int> oparch_cat_cd { get; set; }
        public string arch_stat_nm { get; set; }
        public string arch_type_nm { get; set; }
        public string arch_stat_cd { get; set; }
        public string access_level_nm { get; set; }
        public string app_version_tx { get; set; }
        public Nullable<int> arch_poc_user_id { get; set; }
        public string arch_poc_user_nm { get; set; }
        public Nullable<System.DateTime> request_dt { get; set; }
        public string src_sys_user_nm { get; set; }
        public Nullable<int> cat_src_sys_id { get; set; }
        public Nullable<int> cat_arch_id { get; set; }
        public string arch_vsn_reason_tx { get; set; }
        public string sc_nm { get; set; }
        public Nullable<bool> with_ier { get; set; }
        public string iads_version_name { get; set; }
    }
}
