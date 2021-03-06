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
    
    public partial class architecture
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public architecture()
        {
            this.related_architecture = new HashSet<related_architecture>();
            this.related_architecture1 = new HashSet<related_architecture>();
            this.related_view = new HashSet<related_view>();
            this.related_view1 = new HashSet<related_view>();
        }
    
        public int architecture_id { get; set; }
        public bool is_published { get; set; }
        public Nullable<System.DateTime> last_modified_date { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string purpose { get; set; }
        public string url { get; set; }
        public Nullable<int> security_classification_id { get; set; }
        public Nullable<int> access_level_id { get; set; }
        public Nullable<int> type_id { get; set; }
        public Nullable<int> mission_area_id { get; set; }
        public Nullable<int> methodology_id { get; set; }
        public Nullable<int> development_tool_id { get; set; }
        public Nullable<int> proponent_id { get; set; }
        public Nullable<System.DateTime> project_start_date { get; set; }
        public Nullable<System.DateTime> target_completion_date { get; set; }
        public Nullable<System.DateTime> validation_date { get; set; }
        public Nullable<System.DateTime> valid_until_date { get; set; }
        public string developer_organization { get; set; }
        public string contributing_organizations { get; set; }
        public string validating_organizations { get; set; }
        public string approval_authority_organization { get; set; }
        public Nullable<int> approval_version_id { get; set; }
        public Nullable<System.DateTime> approval_version_change_date { get; set; }
        public Nullable<int> related_av1_id { get; set; }
        public string source_system_id { get; set; }
        public Nullable<System.DateTime> dars_registration_date { get; set; }
        public Nullable<System.DateTime> dars_timeframe_start_date { get; set; }
        public Nullable<System.DateTime> dars_timeframe_end_date { get; set; }
        public Nullable<System.DateTime> metadata_created_date { get; set; }
        public Nullable<System.DateTime> metadata_last_updated_date { get; set; }
        public Nullable<int> poc_authorization_user_id { get; set; }
        public bool is_av1_externally_funded_in { get; set; }
        public bool is_archived { get; set; }
        public Nullable<int> iads_version_audit_id { get; set; }
        public Nullable<int> title_dissemination_id { get; set; }
        public Nullable<int> proj_dissemination_id { get; set; }
        public Nullable<int> description_dissemination_id { get; set; }
        public Nullable<int> owner_org_dissemination_id { get; set; }
        public Nullable<int> publishing_org_dissemination_id { get; set; }
        public int owner_org_country_id { get; set; }
        public int publishing_org_country_id { get; set; }
        public int contact_org_country_id { get; set; }
        public Nullable<int> title_classification_id { get; set; }
        public string proj_classification_justification { get; set; }
        public Nullable<int> description_classification_id { get; set; }
        public string poc_org_name { get; set; }
        public string owner_org_name { get; set; }
        public string contact_org_name { get; set; }
        public Nullable<int> owner_org_classification_id { get; set; }
        public Nullable<int> publishing_org_classification_id { get; set; }
        public Nullable<int> contact_org_classification_id { get; set; }
        public string aggregated_data_classification_justification { get; set; }
        public string proj_classified_by { get; set; }
        public Nullable<System.DateTime> project_creation_date { get; set; }
        public Nullable<System.DateTime> ecsd_submission_date { get; set; }
        public Nullable<int> contact_org_dissemination_id { get; set; }
        public bool is_excluded_from_arch_navigation { get; set; }
        public Nullable<int> bcac_id { get; set; }
        public string ekr_proj_url { get; set; }
        public string time_period_reason { get; set; }
        public string technical_poc_name { get; set; }
        public string technical_poc_email { get; set; }
        public string functional_poc_name { get; set; }
        public string functional_poc_email { get; set; }
        public Nullable<int> mission_thread_organization_id { get; set; }
        public Nullable<int> mission_thread_capability_id { get; set; }
        public Nullable<int> mission_thread_echelon_id { get; set; }
        public Nullable<int> mission_thread_mission_thread_id { get; set; }
        public string mission_thread_description { get; set; }
        public Nullable<int> mission_thread_primary_proponent_id { get; set; }
        public Nullable<int> life_cycle_phase_id { get; set; }
        public Nullable<int> baseline_state_id { get; set; }
        public Nullable<int> echelon_id { get; set; }
        public Nullable<int> functional_area_id { get; set; }
        public Nullable<int> unit_size_id { get; set; }
        public bool unit_amplifier { get; set; }
        public Nullable<int> icon_id { get; set; }
        public Nullable<int> category_id { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<related_architecture> related_architecture { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<related_architecture> related_architecture1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<related_view> related_view { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<related_view> related_view1 { get; set; }
    }
}
