using System.Collections.Generic;
using AdoptaPet.Models;

namespace AdoptaPet.Providers
{
    public interface IPetProvider
    {
        List<Pets> GetPets();
    }
}
