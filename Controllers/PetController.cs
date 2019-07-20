using System.Linq;
using Microsoft.AspNetCore.Mvc;
using AdoptaPet.Providers;

namespace AdoptaPet.Controllers
{
    [Route("api/[controller]")]
    public class PetController : Controller
    {
        private readonly IPetProvider _petProvider;

        public PetController(IPetProvider petProvider)
        {
            _petProvider = petProvider;
        }

        [HttpGet("[action]")]
        public IActionResult GetPets()
        {           
            var allPets = _petProvider.GetPets();
            var result = new
            {
                Total = allPets.Count
            };

            return Ok(result);
        }
    }
}
