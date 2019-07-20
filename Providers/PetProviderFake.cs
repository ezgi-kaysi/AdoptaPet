using System;
using System.Collections.Generic;
using System.Linq;
using AdoptaPet.Models;

namespace AdoptaPet.Providers
{
    public class PetProviderFake : IPetProvider
    {
        private List<Pets> pets { get; set; }

        public PetProviderFake()
        {
            Initialize(50);
        }

        private void Initialize(int quantity)
        {
            var rng = new Random();
            pets = Enumerable.Range(1, quantity).Select(index => new Pets
            {
               Name = "Köpük",
               Breed ="Golden Retriever"
               
            }).ToList();
        }

        public List<Pets> GetPets()
        {
            return pets;
        }
    }
}
