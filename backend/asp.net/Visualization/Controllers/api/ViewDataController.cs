using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Visualization.Services;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;


namespace Visualization.Controllers.api
{
    public class ViewDataController : ApiController
    {
        IViewDataService _viewDataService;
        
        public ViewDataController(IViewDataService viewDataService)
        {
            _viewDataService = viewDataService;

        }

        [HttpGet]       
        [Route("api/ViewData/GetRelateViewsGridData/{architectureId}")]
        public HttpResponseMessage GetRelateViewsGridData(int architectureId)
        {

            try
            {
                var payload = _viewDataService.ListRelatedViewsByArchitectureId(architectureId);


                return Request.CreateResponse(payload);

            }
            catch (Exception Ex)
            {
                return Request.CreateResponse(Ex);
            }


        }

        [HttpGet]
        //Security Authorization is handled at the service level using Authorization Service
        [Route("api/ViewData/GetAllRelatedViews")]
        public HttpResponseMessage GetAllRelatedViews(DataSourceLoadOptions loadOptions)
        {

            try
            {
                var payload = _viewDataService.ListAllRelatedViews();

                var loadResult = DataSourceLoader.Load(payload, loadOptions);

                return Request.CreateResponse(loadResult);

            }
            catch (Exception Ex)
            {
                return Request.CreateResponse(Ex);
            }


        }

    }
}
