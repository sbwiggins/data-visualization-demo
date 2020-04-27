using System.Web.Http;
using Unity;
using Unity.WebApi;
using Visualization.Services;

namespace Visualization
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
			var container = new UnityContainer();  
            
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);

            container.RegisterType<IArchitectureDataService, ArchitectureDataService>();
            container.RegisterType<IViewDataService, ViewDataService>();

        }
    }
}