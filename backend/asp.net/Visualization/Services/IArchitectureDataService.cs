using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Visualization.Models;

namespace Visualization.Services
{
    public interface IArchitectureDataService
    {
        object ListArchitecturesByLastModifiedInfo();

        object ListRelatedArchitecturesById(int architectureId);

        IEnumerable<RelatedArchitecturesAdapter> ListAllRelatedArchitectures();
    }
}
