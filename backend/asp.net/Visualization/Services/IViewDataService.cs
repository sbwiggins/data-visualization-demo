using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visualization.Models;

namespace Visualization.Services
{
    public interface IViewDataService
    {
        object ListRelatedViewsByArchitectureId(int architectureId);

        IEnumerable<RelatedViewsAdapter> ListAllRelatedViews();
    }
}
