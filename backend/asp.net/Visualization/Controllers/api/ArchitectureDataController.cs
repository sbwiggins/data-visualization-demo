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
    public class ArchitectureDataController : ApiController
    {

        IArchitectureDataService _architectureDataService;

        public ArchitectureDataController(IArchitectureDataService architectureDataService)
        {
            _architectureDataService = architectureDataService;
        }

        [HttpGet]
        [Route("api/ArchitectureData/GetSelectedArchitectureGridData")]
        public HttpResponseMessage GetSelectedArchitectureGridData()
        {

            try
            {
                var payload = _architectureDataService.ListArchitecturesByLastModifiedInfo();

                return Request.CreateResponse(payload);

            }
            catch (Exception Ex)
            {
                return Request.CreateResponse(Ex);
            }


        }

        [HttpGet]
        [Route("api/ArchitectureData/GetRelatedArchitecturesGridData/{architectureId}")]
        public HttpResponseMessage GetRelatedArchitecturesGridData(int architectureId)
        {

            try
            {

                var payload = _architectureDataService.ListRelatedArchitecturesById(architectureId);

                return Request.CreateResponse(payload);

            }
            catch (Exception Ex)
            {
                return Request.CreateResponse(Ex);
            }
        }

        [HttpGet]       
        [Route("api/ArchitectureData/GetAllRelatedArchitectures")]
        public HttpResponseMessage GetAllRelatedArchitectures(DataSourceLoadOptions loadOptions)
        {

            try
            {
                var payload = _architectureDataService.ListAllRelatedArchitectures();

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
